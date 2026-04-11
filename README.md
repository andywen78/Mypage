# Mypage

詹詠文的個人網站 · 用 Astro + Tailwind 建置，部署到 GitHub Pages。

## 內容架構

所有頁面內容都在 `src/content/sections/` 下，每個 `.md` 檔就是一個頁面，側邊導覽會自動讀取。

```
src/content/sections/
├── about.md
├── experience.md
├── certifications.md
├── skills.md
├── projects.md
└── contact.md
```

## 新增一個頁面

1. 在 `src/content/sections/` 建一個新的 `.md` 檔，例如 `blog.md`
2. 填 frontmatter：
   ```yaml
   ---
   title: 部落格
   order: 7
   icon: '📝'
   description: 技術筆記與想法
   ---
   ```
3. 下面寫 markdown 內容
4. `git push` → 側邊 nav 自動多一個項目，頁面自動生成在 `/blog`

## 本機開發

```bash
npm install
npm run dev
# 開 http://localhost:4321/Mypage
```

## 部署

push 到 `main` 分支後，GitHub Actions 會自動 build 並部署到 GitHub Pages。
網址：https://andywen78.github.io/Mypage

第一次需要在 repo Settings → Pages → Source 設為 **GitHub Actions**。
