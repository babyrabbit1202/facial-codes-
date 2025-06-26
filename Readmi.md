# 微表情心理學互動學習網站

探索人類情緒的面部密碼，學會在0.2秒內讀懂他人真實情感！

![微表情心理學](https://img.shields.io/badge/微表情-心理學-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 專案特色

### 📚 完整學習體系
- **教學影片**：專業的微表情識別教學內容
- **總複習**：系統性的知識點回顧與整合
- **七種基本情緒**：快樂、悲傷、憤怒、厭惡、恐懼、驚訝、輕蔑
- **科學基礎**：基於 FACS（面部動作編碼系統）理論

### 🎮 互動測驗系統
- **10題專業測驗**：真實照片微表情識別挑戰
- **即時反饋**：詳細的答案解析與FACS編碼說明
- **學習追蹤**：答題進度與成績統計
- **鍵盤快捷鍵**：支援數字鍵選擇答案，方向鍵導航

### 🎨 優雅的使用體驗
- **響應式設計**：完美適配手機、平板、電腦
- **流暢動畫**：精心設計的過場動畫與互動效果
- **直觀導航**：智慧滾動導航與平滑頁面切換
- **視覺層次**：清晰的色彩系統與版面佈局

## 🚀 部署方式

### 方法一：GitHub Pages
1. **創建 GitHub 倉庫**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/microexpression-psychology.git
   git push -u origin main
   ```

2. **啟用 GitHub Pages**
   - 進入倉庫 Settings
   - 滾動到 Pages 區域
   - Source 選擇 "Deploy from a branch"
   - Branch 選擇 "main" / (root)
   - 點擊 Save

3. **訪問網站**
   - 網址：`https://yourusername.github.io/microexpression-psychology/`

### 方法二：Netlify
1. **連接 GitHub 倉庫**
   - 登入 [Netlify](https://netlify.com)
   - 點擊 "New site from Git"
   - 選擇 GitHub 並授權
   - 選擇您的倉庫

2. **配置部署設定**
   ```
   Build command: (留空)
   Publish directory: (留空，使用根目錄)
   ```

3. **自動部署**
   - 每次推送到 main 分支會自動重新部署
   - 獲得 Netlify 提供的網址

### 方法三：Vercel
1. **匯入專案**
   - 登入 [Vercel](https://vercel.com)
   - 點擊 "New Project"
   - Import Git Repository

2. **配置設定**
   ```
   Framework Preset: Other
   Root Directory: ./
   Build Command: (留空)
   Output Directory: (留空)
   ```

3. **部署完成**
   - 自動獲得 Vercel 網域
   - 支援自訂域名

## 📁 檔案結構

```
microexpression-psychology/
├── index.html          # 主要 HTML 檔案
├── style.css           # 樣式表
├── script.js           # JavaScript 邏輯
└── README.md           # 專案說明
```

## 🛠️ 技術特點

### HTML5 語意化結構
- 使用語意化標籤提升可訪問性
- 結構清晰的文件組織
- SEO 友好的 meta 標籤

### CSS3 現代設計
- CSS Grid 與 Flexbox 佈局
- CSS 變數系統統一色彩管理
- 流暢的動畫與過渡效果
- 響應式媒體查詢

### Vanilla JavaScript
- ES6+ 現代語法
- 模組化的程式結構
- 事件驅動的互動設計
- 本地存儲與狀態管理

## 📱 響應式設計

### 桌面版 (1200px+)
- 4欄網格佈局
- 完整的導航選單
- 大型互動元素

### 平板版 (768px - 1199px)
- 2欄網格佈局
- 調整間距與字體大小
- 觸控友好的按鈕

### 手機版 (< 768px)
- 單欄佈局
- 隱藏導航選單
- 大型觸控目標

## 🎯 學習目標

完成本課程後，您將能夠：

1. **識別七種基本情緒**：在日常生活中快速識別他人的真實情感
2. **理解 FACS 系統**：掌握科學的面部表情分析方法
3. **應用於實際場景**：
   - 商務談判與客戶服務
   - 跨文化溝通
   - 人際關係建立
   - 謊言識別與真實感受判斷

## 🏆 測驗系統說明

### 評分標準
- **8-10題正確**：🏆 專家級表現
- **6-7題正確**：🎯 良好水準
- **4-5題正確**：📚 持續學習
- **0-3題正確**：💪 加油練習

### 操作指南
- 使用滑鼠點擊選項
- 鍵盤快捷鍵：1-4 數字鍵選擇答案
- 方向鍵：← → 導航題目
- Enter：確認並下一題

## 📞 聯絡與支援

如果您在使用過程中遇到任何問題，歡迎：

- 📧 Email: support@microexpression.com
- 💬 GitHub Issues: [提交問題](https://github.com/yourusername/microexpression-psychology/issues)
- 📚 文檔: [查看詳細文檔](#)

## 🎨 自訂化

### 更換測驗圖片
在 `script.js` 中修改 `quizQuestions` 陣列：
```javascript
const quizQuestions = [
    {
        id: 1,
        imageUrl: '您的圖片網址',
        options: ['選項1', '選項2', '選項3', '選項4'],
        correctAnswer: 0, // 正確答案索引
        explanation: '解釋說明',
        // ...
    }
];
```

### 調整色彩主題
在 `style.css` 中修改 CSS 變數：
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* ... */
}
```

### 新增情緒類型
在 `script.js` 中修改 `emotions` 陣列：
```javascript
const emotions = [
    {
        name: '新情緒',
        englishName: 'New Emotion',
        auCode: 'AU1 + AU2',
        description: '描述',
        color: 'new-emotion',
        icon: '😊',
        videoId: 'video-id'
    }
];
```

## 📈 效能優化

### 圖片優化
- 使用 WebP 格式降低檔案大小
- 實作懶加載減少初始載入時間
- 壓縮圖片保持品質

### 程式碼優化
- JavaScript 模組化
- CSS 關鍵路徑優化
- 快取策略實作

## 🔒 安全性

- 不收集使用者個人資料
- 純前端實作，無伺服器風險
- 使用 HTTPS 確保傳輸安全

## 📄 授權

本專案採用 MIT 授權條款，詳見 [LICENSE](LICENSE) 檔案。

---

**由美麗的涵老師出品 ✨**

基於原生 HTML + CSS + JS 構建 | 響應式設計 | 支援影片切換與測驗模組擴展
