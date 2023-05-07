"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    schema: ["src/entities/**/typeDef.gql"],
    // documents: ["src/entities/**/typeDef.gql"],
    generates: {
        'src/models/index.ts': {
            plugins: ['typescript', 'typescript-resolvers'],
        },
    },
    require: ['ts-node/register'],
};
exports.default = config;
