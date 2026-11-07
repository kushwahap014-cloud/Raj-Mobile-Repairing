# Raj Mobile Repairing Centre – Website

A simple, fast website (no backend, no database, nothing to maintain).
Customers send their phone problem to the shop's WhatsApp (8707441342) from the "Send your problem" form.

All website files are in the `public/` folder.

## Put it on GitHub
```bash
git init
git add .
git commit -m "Raj Mobile website"
git branch -M main
git remote add origin https://github.com/<your-username>/raj-mobile.git
git push -u origin main
```

## Deploy on Render (free, no sleeping)
1. render.com → **New + → Static Site** → connect the GitHub repo.
2. Build Command: leave empty (or `echo ok`). Publish Directory: `public`.
3. Click **Create Static Site**. Your link will look like `https://raj-mobile.onrender.com`.

(Or choose **New + → Blueprint** and Render will read `render.yaml` automatically.)

## Changing details later
Edit `public/index.html` (phone number, hours, services), commit and push. Render updates the site automatically.
