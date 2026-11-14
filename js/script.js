/*
 * Comportements du portfolio (JavaScript sans framework).
 * ÉTAPE 1 : seulement l'année du pied de page.
 * À venir : menu mobile (étape 2), changement de langue (étape 7),
 * animations légères à l'apparition des sections (étape 8).
 */
'use strict';

// Année courante dans le pied de page : pas besoin de la changer chaque 1er janvier.
const annee = document.getElementById('year');
if (annee) annee.textContent = String(new Date().getFullYear());
