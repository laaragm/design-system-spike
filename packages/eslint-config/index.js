module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "import/prefer-default-export": "off",
        "prefer-const": "error",
        "no-use-before-define": "off",
        "linebreak-style": "off",
        "no-unused-vars": "off",
        "max-len": ["error", 180],
        "max-lines": ["error", 320],
        "no-shadow": "off",
        "array-callback-return": "error",
        "no-useless-escape": "off",
        radix: ["error", "as-needed"],
        "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    },
};
