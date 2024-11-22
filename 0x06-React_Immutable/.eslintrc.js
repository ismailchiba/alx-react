module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    "linebreak-style": ["error", "unix"] // For LF (Unix/macOS/Linux)
    // "linebreak-style": ["error", "windows"] // For CRLF (Windows)
  }
};