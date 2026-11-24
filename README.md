# Assignment 5 Starter: Routed React Data Feature

This folder is your starting point for Assignment 5. Copy everything inside it, not the folder itself, into your cloned `cs300-assignment-5` repository.

## What Is Here

- `package.json` and `package-lock.json`: the exact React, React Router, and Vitest versions. Do not edit them.
- `vite.config.js` and `index.html`: the Vite setup. You add one `base` line to `vite.config.js` when you deploy.
- `src/App.jsx`: your app starts here. Put your `Routes` here.
- `src/main.jsx`: starts React. Wrap `App` in `BrowserRouter` here.
- `src/App.test.jsx`: two sample tests so `npm test` passes from the start. Add your own test files next to your components.
- `src/styles.css` and `src/test-setup.js`: your CSS and the test setup.
- `public/data/`: the four scenario datasets, plus `empty.json`, `incomplete.json`, and `boundary-records.json`. Files in `public/` are served as-is, so `fetch` can request them.
- `SCENARIOS.md`: the four scenarios. Pick one.
- `.gitignore`: keeps `node_modules` and `dist` out of Git.
- `.github/workflows/deploy.yml`: the GitHub Pages workflow. It builds and publishes your app on every push to `main`; you do not edit it. The `.github` folder starts with a dot and may be hidden; on a Mac, press Shift+Cmd+. in Finder to see it before you copy.

## Your First 15 Minutes

You need Node 24 (any 24.x version; `node --version` starts with `v24`; an npm engine warning about the exact version is fine).

1. Open your `cs300-assignment-5` folder in VS Code and choose **Terminal > New Terminal**.
2. Run `npm ci`. It installs the exact packages, including `react-router`, and takes a minute or two. npm may report vulnerabilities in test tools; do not run `npm audit fix`, which would change the lockfile.
3. Run `npm run dev` and open the address it prints, usually `http://localhost:5173/`. You should see "Your application starts here."
4. Add `data/books.json` (or your scenario's file) to the end of that address. The JSON should appear; that is the URL your app will fetch.
5. Press Ctrl+C, then run `npm test`. The two sample tests should pass.
6. Replace everything in this README with your name and your scenario.
7. Commit with the message `Add starter files and choose scenario` and push.

## Your README Before You Submit

By the deadline, your README must have:

- Your name and your scenario.
- Your live URL.
- How to run the app: `npm ci`, `npm run dev`, and `npm test`.
- A 3-line description of your app.

Your screenshots and answers go in the submission template, which you export as one PDF.

Questions? Email dmandloi@neiu.edu.
