import { loadTypedefsSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const asyncLoadArticleSchema = async () => makeExecutableSchema({
  typeDefs: loadTypedefsSync("src/entities/article/typeDef.gql", {
    loaders: [new GraphQLFileLoader()],
  }).map(m => m.document),
  resolvers: await import("./resolver.js")
});
