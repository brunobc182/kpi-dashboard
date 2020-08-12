# KPI Dashboard

**A KPI dashboard to easily track your goals**

![Netlify Status](https://api.netlify.com/api/v1/badges/3cf12008-1695-4d36-be1e-54230b12a0d6/deploy-status)

![Node.js CI](https://github.com/brunobc182/kpi-dashboard/workflows/Node.js%20CI/badge.svg)

## Live version

You can check it out with a live version https://kpidashboard.netlify.app/.

## Requirements

- NodeJS v12.16.1 or higher.

## How to use

To use the application you need to clone this repository and install all dependencies. Follow the steps below:

```bash
git clone git@github.com:brunobc182/kpi-dashboard.git
cd kpi-dashboard
yarn install
```

And to run it execute:

```bash
yarn start
```

## Components Preview

On developement you can use or preview the components on [storybook](https://storybook.js.org/). You just need to run
`yarn storybook` and access `http://localhost:6006/` on browser.

## Production version

To build a production version, just execute:

```bash
yarn build
```

## Run tests

```bash
yarn test
```

## Project strucuture

Inside `src` folder you have our mains folders, `components`, `contaniers` and `theme`. In `components` folder you can add your reusable components, like a `<Title />` for instance. In other hand, the `containers` folder you put you statefull components or main views of the app, `Dashboard` for instance. On `theme` folder you can add everything about our common app style. For example, you can add the mair colors of ou app.

The component have three main files, `index.js` where is declared and developed, `index.test.js` for unit test and `index.stories.js` for
storybook.

```bash
| src
	| components
		| MyComponent
			index.js
			index.test.js
			index.stories.js
	| containers
		| MyPage
			index.js
			index.test.js
	| theme
		index.js
```

## Stack

This project was created using [Create React App](https://create-react-app.dev/docs/getting-started/), but we can name some of the main dependencies:

- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [styled-components](https://www.styled-components.com/)
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro)
- [axios](https://github.com/axios/axios)
- [storybook](https://storybook.js.org/)

## Next steps

- Create a service to use axios across the application
- Create E2E tests with [Cypress](https://www.cypress.io/)
- Developing a feature to see the details of a KPI
- Improve the use of Storybook

## License

[MIT](https://github.com/brunobc182/financial-transactions/blob/master/LICENSE)
