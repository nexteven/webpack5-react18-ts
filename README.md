# webpack5-react18-ts
基础的webpack5+react18+ts的整合项目，添加了eslint作为代码规范

# 使用指南

## npm初始化项目
`npm install -D`

## 安装vscode插件
安装`ESlint`以及`Prettier - Code formatter`两个插件并且在vscode的`.setting.js`文件内添加配置：
```javascript
{
  "workbench.colorTheme": "Monokai",
  // "workbench.iconTheme": "material-icon-theme",
  "liveServer.settings.donotVerifyTags": true,
  "explorer.compactFolders": false,

  //gitlens扩展配置
  "gitlens.hovers.currentLine.over": "line",
  "gitlens.codeLens.scopes": ["document", "containers"],

  //编辑器配置
  "editor.formatOnSave": true,
  "editor.formatOnType": true,

  //prettier配置
  "prettier.endOfLine": "auto",
  //各类型文件format配置
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // "[vue]": {
  //   "editor.defaultFormatter": "johnsoncodehk.volar"
  // },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.associations": {
    ".env.staging": "env"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  //stylelint扩展配置
  "stylelint.validate": ["css", "less", "scss"],
  "[css]": {
    "editor.defaultFormatter": "stylelint.vscode-stylelint"
  },
  "[less]": {
    // "editor.defaultFormatter": "esbenp.prettier-vscode"
    "editor.defaultFormatter": "stylelint.vscode-stylelint"
  },

  //eslint扩展配置
  "eslint.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.run": "onSave",
  "eslint.format.enable": true,

  "javascript.updateImportsOnFileMove.enabled": "always",
  "eslint.workingDirectories": []
}
```
