# Keep-Fit

A fitness app for you and your friends to have fun, get fit and stay accountable.

## Team

  - __Product Owner__: [Wyatt Lindsey](https://github.com/wyattlindsey)
  - __Scrum Master__: [David Flowers](https://github.com/DavFlo-16)
  - __Development Team Members__: [Diogenis Panagiotis](https://github.com/DiogenisPanagiotis), [Alonzo Alden](https://github.com/alonzoalden), [Luke Golden](https://github.com/DhammaLuke)

## Table of Contents

1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [List of Dependencies](#list-of-dependencies)
1. [Usage](#usage)
1. [Team](#team)
1. [Contributing](#contributing)

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g webpack
npm install
```

#### List of Dependencies
- Babel-core 6.20.x
- Babel-loader 6.2.x
- Babel-preset-es2015 6.18.x
- Babel-preset-react 6.16.x
- Bluebird 3.4.x
- Express 4.14.x
- Mongoose 4.7.2
- Morgan 1.7.x
- Node 6.9.x
- Nodemon 1.11.x
- Path 0.12.x
- React 15.4.x
- React-dom 15.4.x
- React-router 3.0.x
- Webpack 1.14.x

### Usage
To run Keep-Fit on your local machine:

1. `cd` to the root of the project.
2. `mondod --dbpath server/db`
3. `npm install`
4. `webpack`
5. `node server/server.js`
6. navigate to [localhost:8000](https://127.0.0.1:8000)

Webpack development notes:
>Start with ``webpack -w`` to continue watching files. Use ``webpack -p`` to minify for production version. NB: occasionally ``webpack -w`` won't hear latest changes. Restart it occasionally/if your bug seems weird.

## Roadmap

View the project roadmap [here](https://github.com/hrr20-dino/Keep-Fit/issues)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
