# 專案簡介
讓使用者能夠快速產生隨機密碼，透過Node.js及Express運作的網頁應用程式。

## 功能
1. 密碼長度介於4至16字元

2. 可啟用選項
  - 允許使用小寫英文
  - 允許使用大寫英文
  - 允許使用數字
  - 允許使用特殊字元

3. 使用者可指定排除特定字元

## 安裝
1. 開啟終端機(Terminal)cd 到存放專案本機位置並執行:
```
git clone https://github.com/Armogo/password-generator-run-on-Express
```

2. 初始設定

```
cd password-generator-run-on-Express-main  //切至專案資料夾

npm install  //安裝套件
```

## 執行程式
1. 開啟程式

```
nodemon app.js  //執行程式
```
終端機顯示 `Express app is listening on http://localhost:3000` 即成功啟動，請至 http://localhost:3000 體驗程式。

2. 終止執行

在終端機畫面按2次 `Ctrl+C` 終止server運作。

## 使用工具
- Visual Studio Code - 開發環境
- Express 4.17.1 - 應用程式架構
- Express-Handlebars 5.3.2 - 模板引擎
- nodemon - 實時偵測檔案更動部分且自動重新執行應用程式