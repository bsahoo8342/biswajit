---
description: Deploy React Portfolio to GitHub Pages
---

# Deploy React Portfolio to GitHub Pages

Follow these steps to deploy your portfolio:

## Step 1: Create a GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: **RPortfolio** (or any name you prefer)
5. Make it **Public**
6. **Do NOT** check "Initialize this repository with a README"
7. Click "Create repository"

## Step 2: Initialize Git Repository

// turbo
Initialize the git repository:
```powershell
git init
```

## Step 3: Configure Git User

// turbo
Set your git username (replace with your name):
```powershell
git config user.name "Your Name"
```

// turbo
Set your git email (replace with your GitHub email):
```powershell
git config user.email "your.email@example.com"
```

## Step 4: Add and Commit Files

// turbo
Add all files to git:
```powershell
git add .
```

// turbo
Create the first commit:
```powershell
git commit -m "Initial commit: React portfolio"
```

## Step 5: Connect to GitHub

Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME):
```powershell
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

// turbo
Rename branch to main:
```powershell
git branch -M main
```

## Step 6: Push to GitHub

Push your code to GitHub:
```powershell
git push -u origin main
```

## Step 7: Deploy to GitHub Pages

// turbo
Build and deploy to GitHub Pages:
```powershell
npm run deploy
```

## Step 8: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select "Deploy from a branch"
4. Select branch: **gh-pages** and folder: **/ (root)**
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Important Notes:

- If your repository name is different from "RPortfolio", update the `base` path in `vite.config.js`:
  ```javascript
  base: '/YOUR_REPO_NAME/',
  ```

- For future updates, just run:
  ```powershell
  git add .
  git commit -m "Your update message"
  git push
  npm run deploy
  ```
