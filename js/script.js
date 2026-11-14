/*
 * Comportements du portfolio (JavaScript sans framework).
 * Fait : année du pied de page (étape 1), menu mobile (étape 2),
 * bouton « Copier l'adresse » (étape 6), changement de langue FR / EN (étape 7),
 * animations légères à l'apparition (étape 8).
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

// --- Changement de langue FR / EN ---
// Principe : le français est écrit dans le HTML. Au chargement, on le mémorise ;
// l'anglais vient de window.I18N.en (js/i18n.js). Changer de langue = remplacer
// chaque texte étiqueté, sans recharger la page.
const CLE_LANGUE = 'portfolio-langue';
const racine = document.documentElement;
const metaDescription = document.querySelector('meta[name="description"]');
const anglais = (window.I18N && window.I18N.en) || {};

// Les attributs data-i18n-attr ont la forme « attribut:cle;attribut2:cle2 ».
const lireAttributs = (element) => element.dataset.i18nAttr.split(';').map((paire) => {
  const [attribut, cle] = paire.split(':');
  return { attribut: attribut.trim(), cle: cle.trim() };
});

// 1. Mémoriser le français tel qu'il est écrit dans la page.
const francais = {
  'meta.title': document.title,
  'meta.description': metaDescription ? metaDescription.content : '',
};
document.querySelectorAll('[data-i18n]').forEach((element) => {
  francais[element.dataset.i18n] = element.textContent;
});
document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
  lireAttributs(element).forEach(({ attribut, cle }) => {
    francais[cle] = element.getAttribute(attribut);
  });
});

// 2. Appliquer une langue à toute la page.
const appliquerLangue = (langue) => {
  const textes = langue === 'en' ? anglais : francais;
  // Une clé absente en anglais garde le français : jamais de trou dans la page.
  const traduire = (cle) => (cle in textes ? textes[cle] : francais[cle]);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = traduire(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    lireAttributs(element).forEach(({ attribut, cle }) => {
      element.setAttribute(attribut, traduire(cle));
    });
  });

  document.title = traduire('meta.title');
  if (metaDescription) metaDescription.content = traduire('meta.description');
  racine.lang = langue; // lecteurs d'écran et moteurs de recherche suivent la bonne langue

  document.querySelectorAll('.lang-switch [data-lang]').forEach((bouton) => {
    bouton.setAttribute('aria-pressed', String(bouton.dataset.lang === langue));
  });
};

// 3. Retenir le choix. localStorage peut être bloqué (navigation privée) :
//    dans ce cas on continue simplement sans mémoriser.
const memoriserLangue = (langue) => {
  try { localStorage.setItem(CLE_LANGUE, langue); } catch { /* sans mémoire, tant pis */ }
};
const langueMemorisee = () => {
  try { return localStorage.getItem(CLE_LANGUE); } catch { return null; }
};

// 4. Langue de départ, par ordre de priorité :
//    lien partagé avec ?lang=en  >  choix mémorisé  >  langue du téléphone  >  français.
const langueDeDepart = () => {
  const demandee = new URLSearchParams(window.location.search).get('lang');
  if (demandee === 'fr' || demandee === 'en') return demandee;
  const memorisee = langueMemorisee();
  if (memorisee === 'fr' || memorisee === 'en') return memorisee;
  return (navigator.language || '').toLowerCase().startsWith('fr') ? 'fr' : 'en';
};

document.querySelectorAll('.lang-switch [data-lang]').forEach((bouton) => {
  bouton.addEventListener('click', () => {
    appliquerLangue(bouton.dataset.lang);
    memoriserLangue(bouton.dataset.lang);
  });
});

const depart = langueDeDepart();
if (depart !== 'fr') appliquerLangue(depart);

// --- Animations légères (étape 8) ---
// Rien n'est animé si le visiteur a demandé « réduire les animations »
// ou si son navigateur ne connaît pas IntersectionObserver (très ancien).
const mouvementReduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!mouvementReduit && 'IntersectionObserver' in window) {
  racine.classList.add('anime'); // déclenche l'entrée de l'accueil (CSS)

  // Éléments qui apparaissent au défilement. Les éléments d'un même groupe
  // reçoivent un rang (--rang) pour arriver en cascade, l'un après l'autre.
  const groupes = [
    'main > section:not(.hero) > h2',
    'main > section:not(.hero) > p',
    '.about-text', '.about-card',
    '.project-head', '.project-block',
    '.feature-grid > li', '.arch > li', // pas les captures : hors écran sur le côté, elles resteraient vides
    '.skill-group', '.timeline > li', '.interest-cards > li', '.contact-card',
  ];
  const aReveler = [];
  groupes.forEach((selecteur) => {
    document.querySelectorAll(selecteur).forEach((element) => {
      // Rang dans sa rangée : position parmi ses frères, plafonnée pour ne jamais trop attendre
      const rang = Array.prototype.indexOf.call(element.parentElement.children, element);
      element.style.setProperty('--rang', String(Math.min(rang, 3)));
      element.classList.add('reveal');
      aReveler.push(element);
    });
  });

  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (!entree.isIntersecting) return;
      entree.target.classList.add('visible');
      observateur.unobserve(entree.target); // une seule fois par élément
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0 });

  aReveler.forEach((element) => observateur.observe(element));
}

// Ombre de l'en-tête dès qu'on a défilé. { passive: true } : le navigateur
// sait qu'on ne bloque pas le défilement, il reste parfaitement fluide.
if (entete) {
  const majOmbre = () => entete.classList.toggle('defile', window.scrollY > 8);
  window.addEventListener('scroll', majOmbre, { passive: true });
  majOmbre();
}
