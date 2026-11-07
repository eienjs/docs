# EienJS Docs

Official documentation for EienJS. Use [Nuxt 4](https://nuxt.com) en conjunto con [Nuxt UI](https://ui.nuxt.com) y [Nuxt Content](https://content.nuxt.com).

## Package documentation sync

Package docs live in each package repo under `docs/` and are published here at `content/2.packages/<repo-name>/`.

1. In the package repo, copy [`.github/templates/notify-docs.yml`](.github/templates/notify-docs.yml) to `.github/workflows/notify-docs.yml`.
2. Add a `DOCS_SYNC_TOKEN` secret (fine-grained PAT or GitHub App token with `Contents: read & write` on `eienjs/docs`) to the package repo.
3. Publish a release: the [sync workflow](.github/workflows/sync-package-docs.yml) replaces `content/2.packages/<repo-name>/` with the package's
   `docs/` folder at the release tag and commits it.

You can also run the sync manually from the Actions tab (`Sync package docs` → `Run workflow`).

The landing page cards are driven by [`content/data/packages.json`](content/data/packages.json), which the same workflow updates on every sync (description and version come from the package's `package.json`; cards link to the docs once a package ships them). Optionally set the card metadata in the package's `package.json`:

```json
"eienjs": { "title": "Permission", "icon": "i-tabler-shield-check", "category": "adonisjs", "featured": true }
```

`category` is `adonisjs` or `tooling`. `featured` (optional, boolean) highlights the package on the hero banner terminal. New packages are appended automatically.
