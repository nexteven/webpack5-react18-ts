module.exports = {
    // export default [
    // {
    root: true,
    // 环境，这里可以设置环来做区别判断
    env: {
        browser: true,
        es6: true
    },
    // 使用的扩展库
    extends: ['alloy', 'alloy/react', 'alloy/typescript', 'plugin:prettier/recommended'],
    // 解析器用于解析代码
    parser: '@typescript-eslint/parser',
    // 解析器配置
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 5,
        sourceType: 'module'
    },
    // 可以全局使用变量
    globals: {
        Babel: true,
        React: true,
        PATH_ENV: true
    },
    // 第三方插件
    plugins: ['react', '@typescript-eslint/eslint-plugin'],
    // 规则配置
    ignorePatterns: ['build/*', 'config/*', 'scripts/*', 'package-lock.json', 'package.json'],
    rules: {
        semi: 0,
        'no-unused-vars': [
            2,
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_|^err|^ev' // _xxx, err, error, ev, event
            }
        ],
        'no-useless-escape': 2,
        'no-tabs': 'off',
        'no-debugger': 1,
        'no-console': 2,
        '@typescript-eslint/explicit-member-accessibility': ['off']
        // '@typescript-eslint/no-require-imports': 'off'
    },
    // 指定react版本防止lint报错
    settings: {
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use,
            pragma: 'React', // Pragma to use, default to "React"
            fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
            version: 'detect' // React version. "detect" automatically picks the version you have installed.
        }
    }
};
// ];
