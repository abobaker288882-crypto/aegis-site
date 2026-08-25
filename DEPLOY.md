# Deploying the Aegis site

Production target: GitHub Pages, user site
`https://abobaker288882-crypto.github.io/` (repo
`abobaker288882-crypto/abobaker288882-crypto.github.io`).

## Why this shape

- The build is SSR (vinext); GitHub Pages is static. The homepage is fully
  static in practice, so production publishes the SSR-rendered `index.html`
  plus `dist/client` assets. Hydration is verified after every deploy.
- `basePath`/`assetPrefix` are NOT usable: vinext 1.0.0-beta.3 applies them
  inconsistently (CSS prefixed, JS chunks not) — verified 2026-08-25. That is
  why the site lives at a domain root (user site), not a `/repo/` path.
- `.nojekyll` is required or Pages strips `_next/**` (underscore-dir rule).
- `public/aegis-ceo-office.html` is a Codex-host visualization wrapper with a
  frozen demo payload. It stays in the repo for host compatibility but is
  excluded from the public deploy.

## Deploy steps

From `aegis-ceo-office-site/` (Node 22 + pnpm required):

```sh
pnpm lint && npx tsc --noEmit && pnpm build
npx vinext start -p 4173 &          # production server
curl -s http://localhost:4173/ -o /tmp/ssr-index.html

# stage: dist/client minus Cloudflare-only files and the host-only wrapper
STAGE=/tmp/pages-root
rm -rf "$STAGE" && cp -R dist/client "$STAGE"
rm -f "$STAGE/_headers" "$STAGE/aegis-ceo-office.html"
cp /tmp/ssr-index.html "$STAGE/index.html"
touch "$STAGE/.nojekyll"

# publish through the persistent clone
cd /tmp/pages-repo && git pull
find . -mindepth 1 -maxdepth 1 -not -name .git -exec rm -rf {} +
cp -R "$STAGE"/ .
git add -A && git commit -m "Deploy <summary>" && git push
```

`/tmp/pages-repo` is a clone of the Pages repo; recreate it with
`gh repo clone abobaker288882-crypto/abobaker288882-crypto.github.io` if lost.

## Verify after deploy

1. `curl -s https://abobaker288882-crypto.github.io/ | grep <new-copy-marker>`
   until propagated (Pages cache can lag a minute or two).
2. Status checks: `/`, `/og.png`, `/404.html` target → 200; unknown path → 404
   with custom page; `_next` CSS/JS → 200 (proves `.nojekyll` intact).
3. Playwright journey: hydration (copy button → clipboard), anchor nav, fonts
   (`document.fonts.check`), zero console errors, zero failed requests.
4. Rollback: `git revert <commit> && git push` in the Pages repo.
