# Vishwakarandak '26 — Festival Website

Static site (HTML + CSS + vanilla JS). No build step, no backend, no external dependencies.

## Deploy to Netlify (drag & drop)
1. Unzip the archive.
2. Go to https://app.netlify.com/drop
3. Drag the `vishwakarandak-26` folder onto the page. Done.

## Run locally
Double-click `index.html`.

## Editing
- All events, codes, fees and zones live in the `ZONES` array at the top of `script.js` — the single source of truth.
- Set `VIERP_URL` at the top of `script.js` once the official VIERP link is confirmed; the registration step will become a link automatically.
- Event format (individual/team) is set only where the event name makes it clear; others show "Format TBA".

## Files
- index.html, styles.css, script.js, assets/logo.svg
