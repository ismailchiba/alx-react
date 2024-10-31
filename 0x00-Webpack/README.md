# Task 0

## Overview
This task is part of the ALX React project, focusing on setting up and configuring Webpack.

## Objectives
- Initialize a new project.
- Set up Webpack for bundling JavaScript files.
- Configure Webpack to handle different file types.

## Steps

1. **Initialize Project**
    ```bash
    npm init -y
    ```

2. **Install Webpack**
    ```bash
    npm install --save-dev webpack webpack-cli
    ```

3. **Create Webpack Configuration**
    Create a `webpack.config.js` file with the following content:
    ```javascript
    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist'),
      },
      module: {
         rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                 loader: 'babel-loader',
              },
            },
         ],
      },
    };
    ```

4. **Create Source Files**
    - Create a `src` directory.
    - Add an `index.js` file inside the `src` directory.

5. **Build the Project**
    ```bash
    npx webpack
    ```

## Additional Resources
- [Webpack Documentation](https://webpack.js.org/concepts/)
- [Babel Documentation](https://babeljs.io/docs/en/)

## Author
- ismailchiba

## License
This project is licensed under the MIT License.