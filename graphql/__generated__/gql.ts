/* eslint-disable */
import * as types from './graphql'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
  'mutation Register($input: UsersPermissionsRegisterInput!) {\n    register(input: $input) {\n      jwt\n      user {\n        id\n        username\n        role {\n          id\n          name\n        }\n        email\n        documentId\n      }\n    }\n  }':
    types.RegisterDocument,
  'mutation Login($input: UsersPermissionsLoginInput!) {\n login(input: $input) {\n    jwt\n    user {\n      id\n      documentId\n      username\n      email\n      confirmed\n      blocked\n      profile\n      role {\n        id\n        name\n      }    \n    }\n  }\n}\n':
    types.LoginDocument,
  'mutation ForgotPassword($email: String!) {\n  forgotPassword(email: $email) {\n    ok\n  }\n}':
    types.ForgotPasswordDocument,
  'mutation ResendOtp($input: ResendOTPInput!) {\n  resendOtp(input: $input)\n}':
    types.ResendOtpDocument,
  'mutation VerifyOtp($input: VerifyOtpInput!) {\n  verifyOtp(input: $input)\n}':
    types.VerifyOtpDocument,
  'mutation ResetPassword($password: String!, $passwordConfirmation: String!, $code: String!) {\n  resetPassword(password: $password, passwordConfirmation: $passwordConfirmation, code: $code) {\n    jwt\n  }\n}\n':
    types.ResetPasswordDocument,
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation Register($input: UsersPermissionsRegisterInput!) {\n    register(input: $input) {\n      jwt\n      user {\n        id\n        username\n        role {\n          id\n          name\n        }\n        email\n        documentId\n      }\n    }\n  }'
): (typeof documents)['mutation Register($input: UsersPermissionsRegisterInput!) {\n    register(input: $input) {\n      jwt\n      user {\n        id\n        username\n        role {\n          id\n          name\n        }\n        email\n        documentId\n      }\n    }\n  }']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation Login($input: UsersPermissionsLoginInput!) {\n login(input: $input) {\n    jwt\n    user {\n      id\n      documentId\n      username\n      email\n      confirmed\n      blocked\n      profile\n      role {\n        id\n        name\n      }    \n    }\n  }\n}\n'
): (typeof documents)['mutation Login($input: UsersPermissionsLoginInput!) {\n login(input: $input) {\n    jwt\n    user {\n      id\n      documentId\n      username\n      email\n      confirmed\n      blocked\n      profile\n      role {\n        id\n        name\n      }    \n    }\n  }\n}\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation ForgotPassword($email: String!) {\n  forgotPassword(email: $email) {\n    ok\n  }\n}'
): (typeof documents)['mutation ForgotPassword($email: String!) {\n  forgotPassword(email: $email) {\n    ok\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation ResendOtp($input: ResendOTPInput!) {\n  resendOtp(input: $input)\n}'
): (typeof documents)['mutation ResendOtp($input: ResendOTPInput!) {\n  resendOtp(input: $input)\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation VerifyOtp($input: VerifyOtpInput!) {\n  verifyOtp(input: $input)\n}'
): (typeof documents)['mutation VerifyOtp($input: VerifyOtpInput!) {\n  verifyOtp(input: $input)\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation ResetPassword($password: String!, $passwordConfirmation: String!, $code: String!) {\n  resetPassword(password: $password, passwordConfirmation: $passwordConfirmation, code: $code) {\n    jwt\n  }\n}\n'
): (typeof documents)['mutation ResetPassword($password: String!, $passwordConfirmation: String!, $code: String!) {\n  resetPassword(password: $password, passwordConfirmation: $passwordConfirmation, code: $code) {\n    jwt\n  }\n}\n']

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
