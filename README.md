# Portfolio de Paul Kaboré

**En ligne : https://kaborepaul057-ops.github.io/**

Site personnel bilingue (français / anglais) de Paul Kaboré, fondateur et développeur
autodidacte de **Burkina Service**.

Site statique : HTML5, CSS3, JavaScript sans framework. Aucune dépendance, aucun
serveur : il fonctionne tel quel sur GitHub Pages.

## Structure

```
paul-portfolio/
├── index.html            page unique, contenu français par défaut
├── css/style.css         styles (variables de couleurs en haut du fichier)
├── js/i18n.js            textes traduits FR / EN
├── js/script.js          menu mobile, changement de langue, animations
├── assets/
│   ├── favicon.svg       icône d'onglet
│   ├── fonts/            polices libres (Source Serif 4, Source Sans 3 — licence OFL)
│   └── img/              photo de Paul, logo Burkina Service
├── .nojekyll             dit à GitHub Pages de servir les fichiers tels quels
└── README.md
```

## Tester en local (Termux)

```bash
cd ~/paul-portfolio
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000` dans le navigateur du téléphone.
`Ctrl+C` dans Termux pour arrêter.

## Modifier un texte

- Texte français : directement dans `index.html`.
- Traduction anglaise : dans `js/i18n.js`, à la même clé que l'attribut `data-i18n`.
- Les éléments marqués `[À COMPLÉTER]` attendent une information.

## Langues

- Français : écrit dans `index.html`. Anglais : dans `js/i18n.js`.
- Langue de départ : lien `?lang=en` ou `?lang=fr` > choix mémorisé > langue du téléphone
  (français → français, toute autre langue → anglais).
- Lien à partager à un contact anglophone : `…/?lang=en`.

## Sécurité

La page déclare une politique de sécurité (`Content-Security-Policy`, dans `<head>`) :
seuls les fichiers du site sont autorisés, plus la ligne de script du `<head>`,
identifiée par son empreinte sha256. **Si cette ligne est modifiée**, recalculer l'empreinte :

```bash
printf '%s' "document.documentElement.classList.add('js');" | openssl dgst -sha256 -binary | base64
```

puis remplacer la valeur `sha256-…` dans `index.html`.

## Avancement

- [x] Étape 1 — squelette et structure
- [x] Étape 2 — identité visuelle, en-tête, menu mobile
- [x] Étapes 3 à 6 — contenu des sections
- [x] Étape 7 — changement de langue
- [x] Étape 8 — animations légères
- [x] Étape 9 — vérifications (accessibilité, performances, affichage)
- [ ] Étape 10 — mise en ligne (seulement sur accord de Paul)
