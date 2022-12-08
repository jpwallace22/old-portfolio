# The portfolio of Justin Wallace

## Features

1. **Atoms**: These are a code implementation of a design system. Values can be replaced easily and used across the
   project via quarks
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

- ~~create data-map for socials~~
- ~~add CMS and query with GraphQL~~
- ~~add blog page listing and blog post pages~~
- ~~refactor ugly carousel into something better~~
- ~~lazy import all components~~
- ~~refactor nav (gets hung up)~~
- ~~move blog progress to top for desktop~~
- ~~aria label on ProgressBar~~
- ~~reduce bundle size from PrismJS~~
- implement category taxonomy into the blog (after writing more blogs)
- add global nav to DatoCMS q(added, need to query)
- create featured blog component
  - use the same component for related blogs?
- create testimonial component
- add shutter animation to TechStack
  - ~~query images from cms~~
- create components generator styled paradigm
- add recent || featured blogs to homepage
- add jest
- Create an SEO component
- refactor Button molecule (reduce size)
