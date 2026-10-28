# Amirul Islam — personal website

Personal academic site for **Dr. Amirul Islam**, Assistant Professor, Department of EEE,
BSRM School of Engineering, BRAC University. Built in the same "signal-domain" design
system as the [C2NS research cluster site](https://communicationlab.github.io/research/).

Plain HTML, CSS and JavaScript — no build step, no Jekyll — so it runs directly on
GitHub Pages at **https://amirul2k9.github.io**.

## Structure

```
index.html          Home — hero, profile card, stats, bio, research, selected papers
research.html       Research areas + projects
publications.html   Filterable, searchable publication list (journals, conferences, IEEE 802)
cv.html             Positions, education, teaching, standardization
contact.html        Contact details, map, profile links
404.html            Friendly "page not found" (catches old Jekyll links)
.nojekyll           Tells GitHub Pages NOT to run Jekyll
css/style.css       All styling
js/data.js          ← ALL CONTENT LIVES HERE
js/components.js    Header, footer and renderers
js/main.js          Animations, counters, publication filters
assets/img/         Photo and favicon
```

## Updating content — edit only `js/data.js`

**Add a paper** — paste a line at the top of the journal or conference block in `PUBLICATIONS`:

```js
{ year: 2027, month: "Mar", type: "journal", quartile: "Q1", authors: "A. Islam, X. Y. Author",
  title: "Paper title", venue: "IEEE Transactions on ...", volume: "1", issue: "2", pages: "1-10",
  doi: "10.1109/XXXX.2027.1234567" },
```

- `type`: `"journal"`, `"conference"` or `"standard"`
- `status` (optional): `"accepted"`, `"early access"`, `"preprint"`
- `quartile` (optional): `"Q1"`–`"Q4"`
- If `doi` is set the title links to the DOI automatically.
- Your name (`A. Islam`) is bolded automatically.
- The home-page stats (journal count, Q1 count, IEEE 802 count) update themselves.

**Update citations** — change the `1600` in `PROFILE.stats`.

**New position / course** — add to `PROFILE.experience` or `TEACHING`.

**Research areas** — edit `RESEARCH`. Icons available:
`share, wave, signal, camera, brain, bolt, car, grid, orbit, heart, leaf`.

**Change photo** — replace `assets/img/amirul.jpg` (portrait, ~640×860).

## Deploying (replacing the old Jekyll site)

1. Back up the old site: on GitHub, create a branch called `old-jekyll-site` from `master`/`main`.
2. On the main branch, delete the old files (`_config.yml`, `_layouts`, `_includes`, `_posts`,
   `_data`, `*.md` pages, `assets/`, `Gemfile`, `DevFolio`, `docs`, etc.).
3. Upload everything in this folder **including the hidden `.nojekyll` file**.
4. Commit. GitHub Pages republishes within a minute or two.

From a terminal:

```bash
git clone https://github.com/amirul2k9/amirul2k9.github.io.git
cd amirul2k9.github.io
git checkout -b old-jekyll-site && git push -u origin old-jekyll-site
git checkout master        # or main
git rm -r -q .
cp -r /path/to/this/folder/. .
git add -A && git commit -m "New site in C2NS design" && git push
```

To preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000.
