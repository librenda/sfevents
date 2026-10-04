# INTERPLAY · sfevents.app

The waitroom page for Interplay. It's a static site with no build step: `index.html`, `app.js`, `favicon.svg`, and `CNAME` for the custom domain.

## Collect signups

Set `window.SUBMIT_URL` near the bottom of `index.html`:

- **Formspree:** `https://formspree.io/f/<your-id>`
- **Google Sheet:** the `/exec` URL of the Apps Script web app bound to the signups sheet. The script lives only in that Apps Script project, not in this repo.

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
