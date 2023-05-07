import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: ["src/entities/**/typeDef.gql"],
  // documents: ["src/entities/**/typeDef.gql"],
  generates: {
    'src/models/index.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
  require: ['ts-node/register'],
}
export default config