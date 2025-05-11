import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: `${process.env.EXPO_PUBLIC_API_URL}/graphql`,

  documents: [
    'app/**/*.{ts,tsx}',
    'features/**/*.{ts,tsx}',
    'graphql/**/*.{ts,tsx}',
  ],
  generates: {
    './graphql/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        avoidOptionals: true,
        immutableTypes: true,
        useTypeImports: true,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  ignoreNoDocuments: true,
}

export default config
