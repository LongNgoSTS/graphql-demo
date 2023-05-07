import {stitchSchemas} from "@graphql-tools/stitch";
import {buildHTTPExecutor} from "@graphql-tools/executor-http";
import {schemaFromExecutor} from "@graphql-tools/wrap";
import {GraphQLSchema} from "graphql";
import {loadTypedefsSync} from "@graphql-tools/load";
import {loadFiles, loadFilesSync} from "@graphql-tools/load-files";
import {GraphQLFileLoader} from "@graphql-tools/graphql-file-loader";
import {makeExecutableSchema} from "@graphql-tools/schema";
import {mergeResolvers, mergeTypeDefs} from "@graphql-tools/merge";
import * as path from "path";
import url from "url";

// schema stitching (remote schema)
export const loadRemoteSchema = async () =>
    await Promise.all(
        [
            "https://countries.trevorblades.com/graphql",
            "https://swapi-graphql.netlify.app/.netlify/functions/index",
        ].map(async (endpoint) => {
            const remoteExecutor = buildHTTPExecutor({
                endpoint,
            });

            return {
                schema: await schemaFromExecutor(remoteExecutor),
                executor: remoteExecutor,
            };
        })
    ).catch((err) => console.log(err));

//Local schema merging
const localSchemaMerging = async (): Promise<GraphQLSchema> => {
    const localTypeDefs = loadTypedefsSync("src/entities/**/typeDef.gql", {
        loaders: [new GraphQLFileLoader()] as any,
    }).map((m) => m.document);
    const localResolver = await loadFiles(
        path.join(__dirname, "/**/resolver.js"),
        {
            recursive: true,
        }
    );

    return makeExecutableSchema({
        typeDefs: mergeTypeDefs(localTypeDefs),
        resolvers: mergeResolvers(localResolver),
    });
};
    
const initRootSchema = async () => {
    const localSchema = (await localSchemaMerging()) as GraphQLSchema;
    const remoteSchema = (await loadRemoteSchema()) as any[];

    return stitchSchemas({
        subschemas: [localSchema, ...remoteSchema],
    });
};
export default initRootSchema;
