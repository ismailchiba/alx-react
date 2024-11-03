# Dashboard Project

This project demonstrates how to create a project using Webpack.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ismailchiba/alx-react.git
    ```
2. Navigate to the project directory:
    ```sh
    cd 0x01-react_intro/task_5/dashboard
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Project

To start the development server, run:
```sh
npm start
```

### Building the Project

To build the project for production, run:
```sh
npm run build
```

## Project Structure

- `src/` - Contains the source code
- `dist/` - Contains the bundled output
- `webpack.config.js` - Webpack configuration file

## Webpack Configuration

The project uses Webpack to bundle the JavaScript files. The configuration is defined in `webpack.config.js`.

### Key Features

- Entry point: `src/index.js`
- Output: Bundled files in `dist/` directory
- Loaders: Babel for JavaScript transpilation
- Plugins: HtmlWebpackPlugin for generating HTML file

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Webpack Documentation](https://webpack.js.org/concepts/)
- [Babel Documentation](https://babeljs.io/docs/en/)
