# Beginner's Guide: Deploying your DSA Dashboard

To run your app on Android even when your laptop is turned off, you need to "host" it in the cloud. We will use **GitHub** (to store your code) and **Vercel** (to run your app 24/7).

---

### Step 1: Create a GitHub Account
1.  Go to [GitHub.com](https://github.com/).
2.  Sign up for a free account.
3.  Once logged in, click the **"+"** icon in the top right and select **"New repository"**.
4.  Give it a name (e.g., `dsa-coach-dashboard`).
5.  Keep it **Public** and click **"Create repository"**.
6.  **Important**: You will see a page with some text. Look for the "HTTPS" URL (it starts with `https://github.com/...`). Copy this!

---

### Step 2: Push your code to GitHub
Open your terminal (PowerShell or Command Prompt) and make sure you are in your project folder (`.../Attached-Assets/Attached-Assets`).

Run these commands one by one:

1.  **Stop the current app**: Press `Ctrl + C` in your terminal.
2.  **Add your files**:
    ```bash
    git add .
    ```
3.  **Commit your changes** (Save the point in history):
    ```bash
    git commit -m "Added CS-Concepts and PWA support"
    ```
4.  **Link to your new GitHub Repo** (Paste the URL you copied earlier here):
    ```bash
    git remote add origin YOUR_URL_HERE
    ```
    *(Example: `git remote add origin https://github.com/Username/dsa-coach-dashboard.git`)*
5.  **Rename your branch to main** (Best practice):
    ```bash
    git branch -M main
    ```
6.  **Upload the code**:
    ```bash
    git push -u origin main
    ```
    *Note: If it asks for login, a browser window will pop up. Just click "Sign in with browser".*

---

### Step 3: Connect to Vercel
1.  Go to [Vercel.com](https://vercel.com/).
2.  Click **"Sign Up"** and choose **"Continue with GitHub"**.
3.  Once in the dashboard, click **"Add New"** → **"Project"**.
4.  Find your `dsa-coach-dashboard` repository and click **"Import"**.
5.  **Configure Project (CRITICAL CLOUD SETTINGS):**
    *   **Framework Preset**: Select **Vite**.
    *   **Root Directory**: Find the input field for **Root Directory** and click **"Edit"**. Select the folder `artifacts/dsa-dashboard`.
    *   **Output Directory**: This should automatically be `dist/public` (based on your config), but keep it default for now.
6.  Click **"Deploy"**.

Wait for 1-2 minutes. Once it's done, Vercel will give you a link (e.g., `dsa-coach-dashboard.vercel.app`). **This link works 24/7 even if your laptop is shut down!**

---

### Step 4: Install on Android (The "App" experience)
Since I added **PWA (Progressive Web App)** support:
1.  On your Android phone, open **Google Chrome**.
2.  Navigate to your Vercel link (e.g., `https://dsa-coach-dashboard.vercel.app`).
3.  Wait for the page to load.
4.  Tap the **three dots (⋮)** in the top-right corner of Chrome.
5.  Tap **"Install App"** (or some phones say "Add to Home Screen").
6.  A prompt will show up with the **"DSA Coach"** icon I generated. Click **"Install"**.

---

### That's it! 
Now you have a dedicated app on your phone that saves your progress locally, works offline, and stays online forever. If you ever change the code, just run `git add .`, `git commit`, and `git push` again — Vercel will update your app automatically!
