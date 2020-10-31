const config = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 9,
        ecmaFeatures: {
          "jsx": true
        }
    },
    plugins: [
        "eslint-plugin-react"
    ],
    rules: {
        "semi": ["error", "never"],
        "quotes": ["error", "double"],
        "indent": ["error", 4],
        "eqeqeq": "error",
        "camelcase": "error",
        "eol-last": "error",
        "max-len": ["error", {"code": 120}],
        "prefer-const": "error",
        "object-curly-spacing": ["error", "always"],
        "react/jsx-uses-vars": 1,
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs"],
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error", {"before": false, "after": true}],
        "implicit-arrow-linebreak": ["error", "beside"],
        "one-var": ["error", "never"],
        "operator-linebreak": ["error", "before"],
        "no-compare-neg-zero": "error",
        "no-debugger": "error",
        "no-console": "error",
        "no-alert": "error",
        "no-magic-numbers": ["error", {"ignoreArrayIndexes": true, "ignore": [1]}],
        "no-multi-spaces": "error",
        "no-unused-vars": ["error", {"vars": "local", "varsIgnorePattern": "React"}],
        "no-multiple-empty-lines": ["error", {"max": 2}],
        "no-trailing-spaces": "error",
        "no-var": "error",
    },
}

module.exports = config
