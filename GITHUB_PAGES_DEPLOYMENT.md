# Deploying Nakoda Real Estate to GitHub Pages

Yes, this website is **100% static** and is an ideal match for **GitHub Pages**. There are zero server-side runtimes, zero PHP, and zero databases required.

---

## Method 1: Automatic Deployment with GitHub Actions (Recommended)

An automated workflow has been created in `.github/workflows/deploy.yml`. Whenever you push code to `main` or `master`, GitHub automatically builds the Vite project and deploys the generated `dist/` folder to GitHub Pages.

### Steps to Enable:

1. **Initialize Git and Push to GitHub**:
   ```bash
   cd E:\workspace\nakoda
   git init
   git add .
   git commit -m "feat: complete Nakoda Real Estate website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Actions for Pages**:
   - On GitHub, navigate to your repository: **Settings** &rarr; **Pages** (in the left sidebar).
   - Under **Build and deployment** &rarr; **Source**, select:
     **`GitHub Actions`** (instead of "Deploy from a branch").

3. **That's It!**:
   - Go to the **Actions** tab on your repository to watch the deployment workflow run.
   - Once complete, your live site URL will be displayed right in the GitHub Pages settings (e.g., `https://<your-username>.github.io/<your-repo-name>/` or your custom domain).

---

## Method 2: Manual / Build-First Deployment

If you prefer building locally and deploying the static `dist/` output directly:

1. Build the production files:
   ```bash
   npm run build
   ```
2. The entire compiled website is located inside `E:\workspace\nakoda\dist`.
3. You can push the contents of `dist` to a `gh-pages` branch or upload it to any static web host.

---

## Custom Domain Setup (Optional)

If you have a custom domain (e.g. `nakodarealestate.com`):
1. In your GitHub repository, go to **Settings** &rarr; **Pages**.
2. Under **Custom domain**, enter your domain name (e.g., `www.nakodarealestate.com`).
3. Add a CNAME record in your DNS provider pointing to `<your-username>.github.io`.
4. Enable **Enforce HTTPS**.
