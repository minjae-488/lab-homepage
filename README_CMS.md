# How to Manage Content with Sanity CMS

Your website is now connected to Sanity CMS for content management! Since the website is deployed as a static site on GitHub Pages, content updates happen in two steps:

## 1. Edit Content (Local CMS)

You manage your content using a local Sanity Studio.

1.  Open your terminal in the project folder.
2.  Run the CMS command:
    ```bash
    npm run cms
    ```
    (Or `npx sanity dev` if you prefer)
3.  Open **`http://localhost:3333`** in your browser.
4.  Login with your Sanity account (if prompted).
5.  Add or edit **Members**, **Publications**, and **News**.
6.  Click **Publish** on your changes.

> **Note:** Changes made here are saved to the Sanity cloud database instantly, but they **will not appear on the live website immediately** because the website is static.

## 2. Update Live Website

To make your content changes visible on `https://minjae-488.github.io/lab-homepage/`, you must rebuild the website.

### Option A: Manual Trigger (Recommended)
1.  Go to your GitHub Repository: `https://github.com/minjae-488/lab-homepage`
2.  Go to **Actions** tab.
3.  Select the **Deploy** workflow (or similar name).
4.  Click **Run workflow**.

### Option B: Automatic (Advanced)
You can set up a webhook in Sanity to trigger GitHub Actions automatically on publish. (Requires stricter security setup).

---

## ⚠️ Important: API Configuration

For the live site to fetch data, you MUST add your Sanity Project ID to your GitHub Repository Secrets.

1.  Go to GitHub Repo > **Settings** > **Secrets and variables** > **Actions**.
2.  Add a New Repository Secret:
    *   **Name:** `NEXT_PUBLIC_SANITY_PROJECT_ID`
    *   **Value:** (Your Sanity Project ID, e.g., `pv8y60im`)
3.  (Optional) Add `NEXT_PUBLIC_SANITY_DATASET` (default is `production`).

If you don't do this, the live site will show empty lists.
