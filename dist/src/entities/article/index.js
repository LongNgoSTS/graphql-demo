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
exports.asyncLoadArticleSchema = void 0;
const load_1 = require("@graphql-tools/load");
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const schema_1 = require("@graphql-tools/schema");
const asyncLoadArticleSchema = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, schema_1.makeExecutableSchema)({
        typeDefs: (0, load_1.loadTypedefsSync)("src/entities/article/typeDef.gql", {
            loaders: [new graphql_file_loader_1.GraphQLFileLoader()],
        }).map(m => m.document),
        resolvers: yield Promise.resolve().then(() => require("./resolver.js"))
    });
});
exports.asyncLoadArticleSchema = asyncLoadArticleSchema;
