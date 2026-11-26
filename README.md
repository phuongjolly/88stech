# 88stechnologies.com

Static showcase site for 88's Technologies apps (Zhong, Momo HSK, Meow Sort, Momo Block).

- `site/data.mjs` – app list, store links, Vietnamese/English text
- `site/i18n.mjs` – UI strings and app text for 简体中文, 日本語, 한국어, Español
- `site/img/<app>/` – `icon.jpg`, phone screenshots `s1.jpg…`, wide (Apple TV) shots `w1.jpg…`
- `site/static/` – copied as-is to the site root (`app-ads.txt`, `favicon.ico`)

Build locally (Node 20+, no dependencies):

```
node site/build.mjs site/img _site && cp site/static/* _site/
```

English is served at `/`, other languages at `/vi/`, `/zh/`, `/ja/`, `/ko/`, `/es/`.
The build also writes `sitemap.xml` (with hreflang alternates) and `robots.txt`.
Pushing to `main` deploys via `.github/workflows/pages.yml`.
