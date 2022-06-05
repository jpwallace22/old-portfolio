# The portfolio of Justin Wallace

## Running Storybook

To run Storybook locally, simply run:

```shell
yarn storybook
```

## Features

1. **Atoms**: These are a code implementation of a design system. Values can be replaced easily and used across the
   project via quarks.
2. **Quarks**: These are essentially fully-featured [styled-components](https://styled-components.com/) that implement
   atom values via React props.
3. **Molecules**: These are small React components mostly built using [Material-UI](https://mui.com/) but heavily
   manipulated.
4. **Linting**: Fully fleshed out [ESLint](https://eslint.org/) and [Prettier](https://prettier.io) rule sets are
   included which run on each commit via [Husky](https://typicode.github.io/husky) and
   [lint-staged](https://www.npmjs.com/package/lint-staged).
5. **Type-safety**: This portfolio takes full advantage of Typescript for easy debugging, scalability, and (of course)
   portfolio purposes.

## TODO

- Add clearfix to basic quarks
- ~~Add transparency to colorParser / useColor~~
- Add pseudos to breakpoint interpolations
- update storybook for new components
- create datamap for socials
