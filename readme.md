# Product Details page

This project uses the Atomic Design pattern as described by Brad Frost in his book [Atomic Design](https://atomicdesign.bradfrost.com/).

Building and maintaining large React applications can quickly become messy and tedious to maintain if a proper folder structure is not employed. The Atomic Design pattern helps to solve this problem by grouping components into `atoms`, `molecules`, `organisms`, `templates` and `pages`.

Since this project is small, only `atoms` folder structure was implemented.

1. Typescript is used to enable static type checking
1. Core project componets are prefixed with `App` to easily identify them.
1. CSS Modules is configured to enable scoping of css styles within a component
1. [Tailwind](https://tailwindcss.com/) is configured to easily reuse common css classes
1. Redux is configured for global state management. While this might be an overkill for this small project, I used it to model how it can be used in a real-life application.


# Installation

```js
$ npm install -g pnpm // Install pnpm globally if you don't have it installed already

$ pnpm install // Run this command to install dependencies

$ pnpm start:dev // To start the app in development environment. The application will be running on http://localhost:9000

// If you are deploying for production

$ pnpm build // To build the app. Copy the contents of the "build" directory to a static server. vercel.com is recommended.
```

See [https://pnpm.js.org/en/motivation](https://pnpm.js.org/en/motivation) for why pnpm is used for this project.
