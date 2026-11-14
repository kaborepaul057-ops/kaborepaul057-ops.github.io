/*
 * Comportements du portfolio (JavaScript sans framework).
 * Fait : année du pied de page (étape 1), menu mobile (étape 2),
 * bouton « Copier l'adresse » (étape 6).
 * À venir : changement de langue (étape 7), animations à l'apparition (étape 8).
 */
'use strict';

// --- Année courante dans le pied de page ---
const annee = document.getElementById('year');
if (annee) annee.textContent = String(new Date().getFullYear());

// --- Menu mobile ---
// Le bouton « Menu » ouvre ou ferme la liste. aria-expanded indique l'état
// aux lecteurs d'écran ; la classe .menu-ouvert sert au CSS pour l'afficher.
const entete = document.querySelector('.site-header');
const boutonMenu = document.querySelector('.nav-toggle');

if (entete && boutonMenu) {
  const ouvrirMenu = (ouvrir) => {
    entete.classList.toggle('menu-ouvert', ouvrir);
    boutonMenu.setAttribute('aria-expanded', String(ouvrir));
  };

  boutonMenu.addEventListener('click', () => {
    ouvrirMenu(boutonMenu.getAttribute('aria-expanded') !== 'true');
  });

  // Un lien choisi : on ferme le menu pour laisser voir la section.
  entete.querySelectorAll('.nav-list a').forEach((lien) => {
    lien.addEventListener('click', () => ouvrirMenu(false));
  });

  // Touche Échap : ferme le menu et rend la main au bouton (utilisateurs clavier).
  document.addEventListener('keydown', (evenement) => {
    if (evenement.key === 'Escape' && entete.classList.contains('menu-ouvert')) {
      ouvrirMenu(false);
      boutonMenu.focus();
    }
  });

  // Toucher ailleurs sur la page : ferme le menu.
  document.addEventListener('click', (evenement) => {
    if (!entete.contains(evenement.target)) ouvrirMenu(false);
  });
}

// --- Bouton « Copier l'adresse » ---
// navigator.clipboard ne marche que sur un site sécurisé (https, comme GitHub Pages)
// ou en local. Sinon, on passe par une zone de texte cachée (ancienne méthode).
const copierTexte = async (texte) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(texte);
    return;
  }
  const zone = document.createElement('textarea');
  zone.value = texte;
  zone.setAttribute('readonly', '');
  zone.style.position = 'fixed';
  zone.style.opacity = '0';
  document.body.appendChild(zone);
  zone.select();
  const reussi = document.execCommand('copy');
  zone.remove();
  if (!reussi) throw new Error('copie refusée');
};

document.querySelectorAll('[data-copy]').forEach((bouton) => {
  const statut = bouton.parentElement.querySelector('.copy-status');
  let minuteur;
  bouton.addEventListener('click', async () => {
    try {
      await copierTexte(bouton.dataset.copy);
      // Textes « copié / échec » : traduits à l'étape 7 via window.I18N si disponible
      if (statut) statut.textContent = bouton.dataset.msgOk || 'Adresse copiée.';
    } catch {
      if (statut) statut.textContent = bouton.dataset.msgKo || "Copie impossible : sélectionnez l'adresse ci-dessus.";
    }
    // Le message disparaît après 4 secondes
    clearTimeout(minuteur);
    minuteur = setTimeout(() => { if (statut) statut.textContent = ''; }, 4000);
  });
});
