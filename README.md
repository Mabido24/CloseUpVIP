# Close UP Security — Site HTML

Site vitrine static HTML (pas de Next.js) pour Close UP Security, Sparte Driver et Aviation d’Exception.

## Développement (Laragon)

1. Le projet est dans `E:\laragon\www\CloseUpVIP`
2. Ouvrir : **http://closeupvip.test/** (ou `http://localhost/CloseUpVIP/`)
3. Si le vhost n’existe pas encore : Laragon → Menu → Apache → sites → ajouter `CloseUpVIP`

## Production (Cloudflare Pages)

- Build : aucun (static)
- Output directory : `/` (racine)
- Déploiement : `npx wrangler pages deploy . --project-name=closeupvip`

## i18n

- Défaut : **EN** (clés anglaises dans `locales/en.json`)
- Locales : `fr`, `de`, `it`, `es`, `pt`, `ru`, `zh`, `ar`
- Sélecteur de langue en en-tête ; `?lang=fr` possible
- Arabe : `dir="rtl"` automatique

## Structure

```
index.html
css/main.css
js/i18n.js
js/main.js
locales/*.json
assets/images/
assets/logos/
```

## Contact (flyer)

- 06 19 33 27 47 / 06 10 02 41 74
- closeupsecurity@protonmail.com
