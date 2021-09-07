# Vue版 Alpha Shop 結帳頁
使用 Vue 2 做出線上購物網站的結帳頁面。

## 功能
- SPA 模式，使用者操作結帳區塊的"下一步"、"上一步"以及"確認下單"皆不會重新整理頁面。
- 以Vue instance處理資料流，拆分不同components呈現使用者介面。

## 安裝
1. 開啟終端機(Terminal) cd 到欲存放專案的本機位置

2. 執行git指令

```
git clone https://github.com/Armogo/alpha-shop-vue.git
```

## 初始設定

```
cd alpha-shop-vue  //切至專案資料夾

npm install  //安裝套件
```

## 執行程式
1. 開啟程式

```
npm run serve
```
終端機顯示
```App running at:
  - Local:   http://localhost:8080/  
```  
即成功啟動，請至 http://localhost:8080/ 體驗程式。

2. 終止執行

在終端機畫面按1次 `Ctrl+C` ，輸入 `Y` 終止server運作。


### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).