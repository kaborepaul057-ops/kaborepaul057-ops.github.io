# Portfolio de Paul Kaboré

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

## Avancement

- [x] Étape 1 — squelette et structure
- [x] Étape 2 — identité visuelle, en-tête, menu mobile
- [x] Étapes 3 à 6 — contenu des sections
- [ ] Étape 7 — changement de langue
- [ ] Étape 8 — animations légères
- [ ] Étape 9 — vérifications (accessibilité, performances, affichage)
- [ ] Étape 10 — mise en ligne (seulement sur accord de Paul)
