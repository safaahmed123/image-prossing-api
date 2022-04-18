module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        '@typescript-eslint', 'prettier'
    ],
    "rules": {
        semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'prettier/prettier': 2, // Means error
    'no-console': 1, // Means warning
    'no-var': 'error',
    'prefer-const': 'error'
    }
}
