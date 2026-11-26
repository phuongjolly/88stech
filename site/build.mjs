// Builds the static 88's Technologies app site.
// usage: node build.mjs <imgDir> <outDir>
// English lives at the root, every other language in /<lang>/.
import fs from "node:fs";
import path from "node:path";
import { apps as baseApps, company } from "./data.mjs";
import { LANGS as L1, ui as ui1, appText as at1 } from "./i18n.mjs";
import { LANGS2, ui2, appText2 } from "./i18n2.mjs";
const LANGS = [...L1, ...LANGS2];
const ui = Object.fromEntries(Object.keys(ui1).map((k) => [k, { ...ui1[k], ...(ui2[k] || {}) }]));
const appText = Object.fromEntries(Object.keys(at1).map((s) => {
  const a = at1[s], b = appText2[s] || {};
  const o = {};
  for (const k of ["name", "short", "kind", "tagline"]) o[k] = { ...a[k], ...(b[k] || {}) };
  o.features = a.features.map((f, i) => ({ ...f, ...((b.features || [])[i] || {}) }));
  return [s, o];
}));

const IMG = process.argv[2];
const OUT = process.argv[3];
const SITE = "https://88stechnologies.com";
const DEFAULT = "en";
fs.mkdirSync(OUT, { recursive: true });

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// merge extra languages into app data
const apps = baseApps.map((a) => {
  const x = appText[a.slug] || {};
  const m = { ...a };
  for (const k of ["name", "short", "kind", "tagline"]) m[k] = { ...a[k], ...(x[k] || {}) };
  m.features = a.features.map((f, i) => ({ ...f, ...((x.features || [])[i] || {}) }));
  return m;
});
const platforms = {
  "iPhone, iPad, Android": { zh: "iPhone、iPad、Android", tw: "iPhone、iPad、Android", ja: "iPhone・iPad・Android" },
  "iPhone, iPad": { zh: "iPhone、iPad", tw: "iPhone、iPad", ja: "iPhone・iPad" },
  "Android, Apple TV": { zh: "Android、Apple TV", tw: "Android、Apple TV", ja: "Android・Apple TV" },
};
for (const a of apps) a.platforms = { ...a.platforms, ...(platforms[a.platforms.en] || {}) };

// copy images once to /img
const imgs = {};
for (const a of apps) {
  const src = path.join(IMG, a.slug), dst = path.join(OUT, "img", a.slug);
  fs.mkdirSync(dst, { recursive: true });
  const files = fs.existsSync(src) ? fs.readdirSync(src).sort() : [];
  for (const f of files) fs.copyFileSync(path.join(src, f), path.join(dst, f));
  imgs[a.slug] = { icon: files.find((f) => f.startsWith("icon")), shots: files.filter((f) => /^s\d+\./.test(f)), wide: files.filter((f) => /^w\d+\./.test(f)) };
}
fs.copyFileSync(new URL("./style.css", import.meta.url), path.join(OUT, "style.css"));

const dirOf = (l) => (l === DEFAULT ? "" : `${l}/`);
const urlOf = (l, page) => `${SITE}/${dirOf(l)}${page === "index.html" ? "" : page}`;
const hl = (l) => ({ zh: "zh-Hans", tw: "zh-Hant" }[l] || l);

function render(L, page, app) {
  const up = L === DEFAULT ? "" : "../";
  const tx = (o) => esc(o[L] ?? o.en);
  const u = (k) => tx(ui[k]);
  const img = (a, f) => `${up}img/${a.slug}/${f}`;
  const abs = (a, f) => `${SITE}/img/${a.slug}/${f}`;
  const nm = (a) => a.name[L] ?? a.name.en;

  const storeBtns = (a, big) => {
    const b = [];
    if (a.ios) b.push(`<a class="store${big ? " big" : ""}" href="${a.ios}" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.4 12.6c0-2.4 2-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8s-1.9-.8-3.1-.8C6.8 7.2 5.3 8.1 4.5 9.6c-1.7 2.9-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8s1.9.8 3.1.8c1.3 0 2.1-1.2 2.9-2.4.9-1.3 1.300-2.6 1.3-2.7 0 0-2.7-1-2.7-4zM14.1 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.1-.6 2.8-1.4z"/></svg><span><small>${a.tvOnly ? u("onTV") : u("dlOn")}</small>App Store</span></a>`);
    if (a.android) b.push(`<a class="store${big ? " big" : ""}" href="${a.android}" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 2.8v18.4c0 .4.4.6.7.4L16 12 4.7 2.4c-.3-.2-.7 0-.7.4z" opacity=".9"/><path d="M16 12l3.6-2.1c.8-.5.8-1.3 0-1.8L6.5 1.2 16 12zM16 12l-9.5 10.8 13.1-6.9c.8-.5.8-1.3 0-1.8L16 12z" opacity=".6"/></svg><span><small>${u("getOn")}</small>Google Play</span></a>`);
    return `<div class="stores">${b.join("")}</div>`;
  };

  const title = app ? `${nm(app)} · 88's Technologies` : `88's Technologies · ${ui.heroTitle[L]}`;
  const desc = app ? (app.tagline[L] ?? app.tagline.en) : ui.heroLead[L];
  const ogImg = app ? abs(app, imgs[app.slug].icon) : abs(apps[2], imgs[apps[2].slug].shots[0]);
  const alts = LANGS.map(([l]) => `<link rel="alternate" hreflang="${hl(l)}" href="${urlOf(l, page)}">`).join("\n") + `\n<link rel="alternate" hreflang="x-default" href="${urlOf(DEFAULT, page)}">`;
  const org = { "@type": "Organization", name: company.name, url: SITE, email: company.email, telephone: company.phone, address: { "@type": "PostalAddress", streetAddress: "1224 Oxbow Way", addressLocality: "Coquitlam", addressRegion: "BC", postalCode: "V3E 1M9", addressCountry: "CA" } };
  const appLd = (a) => ({
    "@type": "MobileApplication", name: nm(a), alternateName: a.name.en, description: a.tagline[L] ?? a.tagline.en,
    operatingSystem: [a.ios && (a.tvOnly ? "tvOS" : "iOS"), a.android && "Android"].filter(Boolean).join(", "),
    applicationCategory: /game/i.test(a.kind.en) ? "GameApplication" : "EducationalApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    image: abs(a, imgs[a.slug].icon), screenshot: imgs[a.slug].shots.map((f) => abs(a, f)),
    url: urlOf(L, `${a.slug}.html`), sameAs: [a.ios, a.android].filter(Boolean), inLanguage: hl(L),
    publisher: { "@type": "Organization", name: company.name, url: SITE },
  });
  const ld = app
    ? { "@context": "https://schema.org", ...appLd(app) }
    : { "@context": "https://schema.org", "@graph": [org, { "@type": "WebSite", name: "88's Technologies", url: SITE, inLanguage: hl(L) }, { "@type": "ItemList", itemListElement: apps.map((a, i) => ({ "@type": "ListItem", position: i + 1, url: urlOf(L, `${a.slug}.html`), name: nm(a) })) }] };

  const langMenu = `<details class="lang"><summary aria-label="Language">${esc(LANGS.find(([l]) => l === L)[1])}</summary><ul>${LANGS.map(([l, n]) => `<li><a href="${up}${dirOf(l)}${page}" hreflang="${hl(l)}" lang="${hl(l)}" data-setlang="${l}"${l === L ? ' aria-current="true"' : ""}>${esc(n)}</a></li>`).join("")}</ul></details>`;

  const head = `<!doctype html>
<html lang="${hl(L)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="claude:viewport-fit-sides" content="cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${urlOf(L, page)}">
${alts}
<meta property="og:type" content="website">
<meta property="og:site_name" content="88's Technologies">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${urlOf(L, page)}">
<meta property="og:image" content="${ogImg}">
<meta property="og:locale" content="${{ vi: "vi_VN", en: "en_US", zh: "zh_CN", tw: "zh_TW", ja: "ja_JP", ko: "ko_KR", es: "es_ES", th: "th_TH", id: "id_ID", fr: "fr_FR", de: "de_DE", pt: "pt_BR", ru: "ru_RU", tr: "tr_TR", it: "it_IT" }[L]}">
<meta name="twitter:card" content="summary_large_image">
${app?.ios && !app.tvOnly ? `<meta name="apple-itunes-app" content="app-id=${app.ios.match(/id(\d+)/)[1]}">\n` : ""}<link rel="icon" href="${up}favicon.ico">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${up}style.css">
<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>
${L === DEFAULT && page === "index.html" ? `<script>try{var s=localStorage.getItem('lang'),nl=(navigator.language||'').toLowerCase(),n=/^zh-(tw|hk|mo|hant)/.test(nl)?'tw':nl.slice(0,2),ok=${JSON.stringify(LANGS.map(([l]) => l))};var t=s||(ok.indexOf(n)>=0?n:'en');if(t!=='en'&&!/bot|crawl|spider/i.test(navigator.userAgent))location.replace(t+'/')}catch(e){}</script>\n` : ""}</head>
<body>`;

  const nav = `<header class="top"><div class="wrap topin">
<a class="logo" href="index.html"><span class="mark">88</span><span>88's Technologies</span></a>
<nav class="navlinks">${apps.map((a) => `<a href="${a.slug}.html"${app === a ? ' aria-current="page"' : ""}>${tx(a.short)}</a>`).join("")}</nav>
${langMenu}
</div></header>`;

  const foot = `<footer class="foot"><div class="wrap footin">
<div><a class="logo" href="index.html"><span class="mark">88</span><span>88's Technologies</span></a><p>${u("about")}</p></div>
<div><h3>${u("apps")}</h3><ul>${apps.map((a) => `<li><a href="${a.slug}.html">${tx(a.short)}</a></li>`).join("")}</ul></div>
<div><h3>${u("contact")}</h3><ul><li><a href="mailto:${company.email}">${company.email}</a></li><li><a href="tel:${company.tel}">${company.phone}</a></li><li>${esc(company.address)}</li></ul></div>
</div><div class="wrap copy">© 2026 ${esc(company.name)}</div></footer>
<script>{document.querySelectorAll('[data-setlang]').forEach(a=>a.addEventListener('click',()=>{try{localStorage.setItem('lang',a.dataset.setlang)}catch(e){}}))}</script>
</body></html>`;

  const shotAlt = (a, i) => esc(`${nm(a)} – screenshot ${i + 1}`);

  if (!app) {
    const fanApps = apps.filter((a) => imgs[a.slug].shots[0]);
    const fan = fanApps.map((a, i) => `<a class="fanphone" href="${a.slug}.html" style="--d:${i - (fanApps.length - 1) / 2};--c:${a.color}"><img src="${img(a, imgs[a.slug].shots[0])}" alt="${shotAlt(a, 0)}"></a>`).join("");
    const card = (a) => {
      const im = imgs[a.slug];
      return `<article class="card" style="--ar:${a.ar || "9/19.5"};--c:${a.color};--soft:${a.soft};--deep:${a.deep}">
<a class="cardhead" href="${a.slug}.html">${im.icon ? `<img class="icon" src="${img(a, im.icon)}" alt="${esc(nm(a) + " icon")}" width="84" height="84">` : ""}
<div><h3>${tx(a.name)}</h3><p class="kind">${tx(a.kind)} · ${tx(a.platforms)}</p></div></a>
<p class="tag">${tx(a.tagline)}</p>
<a class="strip" href="${a.slug}.html">${im.shots.slice(0, 3).map((f, i) => `<img src="${img(a, f)}" alt="${shotAlt(a, i)}" loading="lazy">`).join("")}</a>
<div class="cardfoot">${storeBtns(a)}<a class="more" href="${a.slug}.html">${u("details")} →</a></div></article>`;
    };
    const learn = apps.filter((a) => ["zhong", "momo-hsk"].includes(a.slug));
    const games = apps.filter((a) => !learn.includes(a));
    return `${head}${nav}<main>
<section class="hero band"><div class="wrap heroin"><div class="herotext">
<h1>${u("heroTitle")}</h1><p class="lead">${u("heroLead")}</p>
<div class="chips">${apps.map((a) => `<a class="chip" href="${a.slug}.html" style="--c:${a.color}">${imgs[a.slug].icon ? `<img src="${img(a, imgs[a.slug].icon)}" alt="">` : ""}${tx(a.short)}</a>`).join("")}</div>
</div><div class="fan">${fan}</div></div></section>
<section class="band"><div class="wrap">
<h2>${u("learn")}</h2><div class="grid">${learn.map(card).join("")}</div>
<h2>${u("games")}</h2><div class="grid">${games.map(card).join("")}</div>
</div></section></main>${foot}`;
  }

  const a = app, im = imgs[a.slug];
  return `${head}${nav}
<main style="--ar:${a.ar || "9/19.5"};--c:${a.color};--soft:${a.soft};--deep:${a.deep}">
<section class="apphero band"><div class="wrap">
<a class="back" href="index.html">← ${u("allApps")}</a>
<div class="apphead">${im.icon ? `<img class="icon xl" src="${img(a, im.icon)}" alt="${esc(nm(a) + " icon")}" width="128" height="128">` : ""}
<div><p class="kind">${tx(a.kind)}</p><h1>${tx(a.name)}</h1><p class="lead">${tx(a.tagline)}</p>
${storeBtns(a, true)}<p class="plat">${u("free")} · ${tx(a.platforms)}</p></div></div></div>
<div class="gallery" tabindex="0" aria-label="Screenshots">${im.shots.map((f, i) => `<img src="${img(a, f)}" alt="${shotAlt(a, i)}" loading="lazy">`).join("")}</div>
${im.wide.length ? `<div class="gallery wide" tabindex="0" aria-label="Apple TV">${im.wide.map((f, i) => `<img src="${img(a, f)}" alt="${esc(`${nm(a)} – Apple TV ${i + 1}`)}" loading="lazy">`).join("")}</div>` : ""}
</section>
<section class="band"><div class="wrap">
<h2>${u("inside")}</h2>
<div class="feats">${a.features.map((f, i) => { const v = f[L] ?? f.en; return `<div class="feat"><span class="num">${i + 1}</span><h3>${esc(v[0])}</h3><p>${esc(v[1])}</p></div>`; }).join("")}</div>
<div class="cta"><div><h2>${esc((ui.getApp[L] ?? ui.getApp.en).replace("{x}", a.short[L] ?? a.short.en))}</h2><p>${u("freeDl")}</p></div>${storeBtns(a, true)}</div>
</div></section>
<section class="band others"><div class="wrap"><h2>${u("more")}</h2>
<div class="otherrow">${apps.filter((o) => o !== a).map((o) => `<a class="other" href="${o.slug}.html" style="--c:${o.color};--soft:${o.soft}">${imgs[o.slug].icon ? `<img src="${img(o, imgs[o.slug].icon)}" alt="">` : ""}<span><b>${tx(o.short)}</b><small>${tx(o.kind)}</small></span></a>`).join("")}</div>
</div></section></main>${foot}`;
}

const pages = ["index.html", ...apps.map((a) => `${a.slug}.html`)];
for (const [L] of LANGS) {
  const dir = path.join(OUT, dirOf(L));
  fs.mkdirSync(dir, { recursive: true });
  for (const p of pages) fs.writeFileSync(path.join(dir, p), render(L, p, apps.find((a) => `${a.slug}.html` === p)));
}

// sitemap + robots
const today = new Date().toISOString().slice(0, 10);
const sm = pages.flatMap((p) => LANGS.map(([L]) => `<url><loc>${urlOf(L, p)}</loc><lastmod>${today}</lastmod>${LANGS.map(([l]) => `<xhtml:link rel="alternate" hreflang="${hl(l)}" href="${urlOf(l, p)}"/>`).join("")}<xhtml:link rel="alternate" hreflang="x-default" href="${urlOf(DEFAULT, p)}"/></url>`));
fs.writeFileSync(path.join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sm.join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(OUT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log("built", pages.length * LANGS.length, "pages");
