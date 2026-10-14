# RoCo project website

This site uses [`project-website-template`](https://github.com/MandiZhao/project-website-template) version 1.2.0. Edit project text, links, colors, and media paths in `content.js`. The shared layout lives in `index.html`, `styles.css`, `render-content.js`, `project.js`, and `build-index.mjs`.

After changing content, run:

```sh
node build-index.mjs
node build-index.mjs --check
```

To update the shared layout from a local template checkout, run:

```sh
node ../project-website-template/scripts/update-project.mjs . --dry-run
node ../project-website-template/scripts/update-project.mjs .
node ../project-website-template/scripts/update-project.mjs . --check
```

The `demos/` directory contains the linked episode and dialog pages. `assets/images/` and `assets/videos/` contain the optimized homepage media. Keep `google90ae9e7961795b04.html` for site verification.
