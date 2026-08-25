# Close UP Security

Static HTML site (no Next.js) — Cloudflare Pages + Laragon.

## Structure (matrix)

| Slot | Section | File to replace |
|------|---------|-----------------|
| IMAGE 1 | Hero | `assets/placeholders/image-01.svg` |
| IMAGE 2 | About | `assets/placeholders/image-02.svg` |
| IMAGE 3 | Services | `assets/placeholders/image-03.svg` |
| IMAGE 4 | Why us | `assets/placeholders/image-04.svg` |
| IMAGE 5 | Sparte Driver | `assets/placeholders/image-05.svg` |
| IMAGE 6 | Aviation | `assets/placeholders/image-06.svg` |
| IMAGE 7 | Coverage | `assets/placeholders/image-07.svg` |
| IMAGE 8 | Contact | `assets/placeholders/image-08.svg` |

Replace each SVG with a JPG/PNG of the same filename, or keep the name and update the `src` in `index.html`.

## Dev (Laragon)

`http://localhost/CloseUpVIP/`

## Production

https://closeupvip.pages.dev/

## i18n

EN default + FR, DE, IT, ES, PT, RU, ZH, AR (`locales/*.json`).
