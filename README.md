# @4lch4/dynatrace-api

This repository is home to an npm package for easily interacting with the Dynatrace API for your managed or SaaS instance.

There is an [official library published by Dynatrace][0] but I found it lacking in a few areas:

- The available types are unusual to me.
- Lacks any extra features that would prove extremely useful.
- I just didn't like how it worked/functioned overall 😐

## Dependencies

- `@4lch4/logger`
  - A simple library for logging messages to the console.
- `axios`
  - A Promise based HTTP client used for interacting with the Dynatrace API.

## devDependencies

- @types/node
  - Required for using standard Node types.
- pnpm
  - Added since pnpm is the preferred package manager.
- prettier
  - Added Prettier as an opinionated code formatter.
- typescript
  - Added since TypeScript to ensure transpiling with the same version.

## Dynatrace API

For official information on the Dynatrace API, refer to the following links:

- [Dynatrace API Documentation][1]

[0]: https://www.npmjs.com/package/@dynatrace/api-client
[1]: https://www.dynatrace.com/support/help/dynatrace-api
