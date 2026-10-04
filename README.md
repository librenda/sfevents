# INTERPLAY · sfevents.app

The waitroom page for Interplay. It's a static site with no build step: `index.html`, `app.js`, `favicon.svg`, and `CNAME` for the custom domain.

## Collect signups

Set `window.SUBMIT_URL` near the bottom of `index.html`:

- **Formspree:** `https://formspree.io/f/<your-id>`
- **Google Sheet (free, no cap):** the `/exec` URL of your Apps Script web app. The script is `signups.gs`:
  1. Create a Google Sheet, then go to Extensions → Apps Script.
  2. Replace the code with `signups.gs` and save.
  3. Deploy → New deployment → Web app. Set "Execute as" to Me and "Who has access" to Anyone. Authorise it.
  4. Copy the web app URL (ends in `/exec`) into `window.SUBMIT_URL`.

  Signups land in a `Signups` tab with a timestamp, and duplicates are skipped.

If it's left empty, the page works but saves nothing.

## Hosting

GitHub Pages: Settings → Pages → Deploy from a branch → `main` / root. The custom domain is `sfevents.app` (from `CNAME`).

DNS at your registrar:

| Type  | Host | Value |
|-------|------|-------|
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |
| CNAME | www  | librenda.github.io |

Then tick **Enforce HTTPS** once the certificate is issued.
