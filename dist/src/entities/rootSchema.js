"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRemoteSchema = void 0;
const stitch_1 = require("@graphql-tools/stitch");
const executor_http_1 = require("@graphql-tools/executor-http");
const wrap_1 = require("@graphql-tools/wrap");
const load_1 = require("@graphql-tools/load");
const load_files_1 = require("@graphql-tools/load-files");
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const schema_1 = require("@graphql-tools/schema");
const merge_1 = require("@graphql-tools/merge");
const path = require("path");
// schema stitching (remote schema)
const loadRemoteSchema = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Promise.all([
        "https://countries.trevorblades.com/graphql",
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
    ].map((endpoint) => __awaiter(void 0, void 0, void 0, function* () {
        const remoteExecutor = (0, executor_http_1.buildHTTPExecutor)({
            endpoint,
        });
        return {
            schema: yield (0, wrap_1.schemaFromExecutor)(remoteExecutor),
            executor: remoteExecutor,
        };
    }))).catch((err) => console.log(err));
});
exports.loadRemoteSchema = loadRemoteSchema;
//Local schema merging
const localSchemaMerging = () => __awaiter(void 0, void 0, void 0, function* () {
    const localTypeDefs = (0, load_1.loadTypedefsSync)("src/entities/**/typeDef.gql", {
        loaders: [new graphql_file_loader_1.GraphQLFileLoader()],
    }).map((m) => m.document);
    const localResolver = yield (0, load_files_1.loadFiles)(path.join(__dirname, "/**/resolver.js"), {
        recursive: true,
    });
    return (0, schema_1.makeExecutableSchema)({
        typeDefs: (0, merge_1.mergeTypeDefs)(localTypeDefs),
        resolvers: (0, merge_1.mergeResolvers)(localResolver),
    });
});
const initRootSchema = () => __awaiter(void 0, void 0, void 0, function* () {
    const localSchema = (yield localSchemaMerging());
    const remoteSchema = (yield (0, exports.loadRemoteSchema)());
    return (0, stitch_1.stitchSchemas)({
        subschemas: [localSchema, ...remoteSchema],
    });
});
exports.default = initRootSchema;
