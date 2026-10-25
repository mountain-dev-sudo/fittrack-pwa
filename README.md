# FITTRACK — Motu & Moti

Cloudflare Pages PWA backed by Google Apps Script and Google Sheets.

## Cloudflare Pages setup
- Connect this GitHub repository as a **Pages** project.
- Framework preset: None.
- Build command: empty.
- Build output directory: `.`.
- The Pages Function at `functions/api/dashboard.js` serves `/api/dashboard`.

## Verification
Open `https://YOUR-PROJECT.pages.dev/api/dashboard`; it should return JSON beginning with `{"Profiles":`.

## Privacy
The configured Apps Script endpoint is public. Do not store secrets or sensitive health data in a publicly accessible API.
