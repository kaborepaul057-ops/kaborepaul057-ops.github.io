/*
 * Traductions anglaises du portfolio.
 *
 * Le français n'est PAS recopié ici : il est écrit une seule fois dans index.html,
 * et js/script.js le mémorise au chargement. Ici, seulement l'anglais.
 *
 * Chaque clé correspond à un attribut du HTML :
 *   data-i18n="cle"             → texte de l'élément
 *   data-i18n-attr="alt:cle"    → attribut (alt, aria-label, href…)
 *   meta.* et contact.copied/copyFailed → utilisés directement par le script.
 *
 * Histoire et ambitions : traduction fidèle du texte écrit par Paul (14/11/2026).
 */
window.I18N = {
  en: {
    // Informations de la page (onglet, Google)
    'meta.title': 'Paul Kaboré — Founder & Self-taught Developer',
    'meta.description': 'Portfolio of Paul Kaboré, founder and self-taught developer of Burkina Service, a platform connecting people, professionals and businesses in Burkina Faso.',

    // Navigation
    'nav.skip': 'Skip to content',
    'nav.label': 'Main navigation',
    'nav.brand': 'Paul Kaboré, back to top',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.journey': 'Journey',
    'nav.interests': 'Interests',
    'nav.contact': 'Contact',

    // Accueil
    'hero.eyebrow': 'Burkina Faso',
    'hero.role': 'Founder & Self-taught Developer',
    'hero.pitch': 'I design and build Burkina Service, a platform that connects people, professionals and businesses in Burkina Faso.',
    'hero.cta.projects': 'See my projects',
    'hero.cta.contact': 'Contact me',
    'hero.fact1': 'App published on Google Play',
    'hero.fact2': 'Mobile app and server built end to end',
    'hero.fact3': 'Based in Burkina Faso',
    'hero.photoAlt': 'Portrait of Paul Kaboré',

    // À propos (histoire et ambitions : texte de Paul)
    'about.title': 'About',
    'about.story1': 'I am a technology and digital enthusiast from Burkina Faso. My curiosity about this world gradually led me to programming and software development.',
    'about.story2': 'My path is that of a self-taught developer. I learn, I experiment, I run into difficulties and I constantly strive to improve. With perseverance and the help of artificial intelligence tools, I began turning my ideas into concrete projects.',
    'about.story3': 'This is how Burkina Service was born: an app designed to make everyday life easier by helping people find professionals and businesses, while giving more visibility to small, medium and large organizations.',
    'about.story4': 'To me, this project is much more than an app: it is an entrepreneurial and technical experience that allows me to learn, to build and to understand the challenges of the digital world.',
    'about.howTitle': 'How I work',
    'about.how1': 'I built Burkina Service end to end: the mobile app in Flutter, the server in Python, the PostgreSQL database, hosting on Clever Cloud and publishing on Google Play.',
    'about.how2': 'My environment: Termux on my Android phone, Visual Studio Code, Android Studio, Git and GitHub. I also work with artificial intelligence assistants, which I direct and whose work I review.',
    'about.ambitionsTitle': 'My ambitions',
    'about.ambition1': 'I want to keep developing my skills in programming, artificial intelligence and software architecture.',
    'about.ambition2': 'My ambition is to grow Burkina Service and to take part in technology projects with real-world impact, in Burkina Faso and internationally.',
    'about.ambition3': 'I am also interested in space exploration and aerospace technologies. In the long term, I would like to have the skills and the means to contribute to the design of intelligent systems, satellites or even rocket-related technologies.',
    'about.ambition4': 'I want to learn, build and take part in the technological progress of my country and of the world.',
    'about.card.title': 'At a glance',
    'about.card.countryLabel': 'Country',
    'about.card.country': 'Burkina Faso',
    'about.card.roleLabel': 'Role',
    'about.card.role': 'Founder & Self-taught Developer',
    'about.card.projectLabel': 'Main project',
    'about.card.focusLabel': 'Focus',
    'about.card.focus': 'Mobile and backend development',
    'about.card.interestsLabel': 'Interests',
    'about.card.interests': 'Artificial intelligence, space technologies',

    // Projets
    'projects.title': 'Projects',
    'projects.bs.badge': 'Flagship project',
    'projects.bs.logoAlt': 'Burkina Service logo',
    'projects.bs.summary': 'A digital platform connecting people, professionals and businesses in Burkina Faso. Android app published on Google Play.',
    'projects.bs.play': 'View on Google Play',
    'projects.bs.problemTitle': 'The problem',
    'projects.bs.problem': 'Finding a professional nearby often depends on word of mouth, and many craftspeople and businesses have no online presence. Burkina Service brings both sides together in a single app.',
    'projects.bs.featuresTitle': 'What the app does',
    'projects.bs.f1.title': 'Nearby search',
    'projects.bs.f1.text': 'By trade, by city, or around you using geolocation.',
    'projects.bs.f2.title': 'Detailed profiles',
    'projects.bs.f2.text': 'Photos of past work, opening hours, availability, favorites.',
    'projects.bs.f3.title': 'Direct contact',
    'projects.bs.f3.text': 'Call, WhatsApp or built-in real-time messaging.',
    'projects.bs.f4.title': 'Business space',
    'projects.bs.f4.text': 'Services, business sector and official company documents.',
    'projects.bs.f5.title': 'Notifications',
    'projects.bs.f5.text': 'Messages, incoming contacts and announcements, straight to the phone.',
    'projects.bs.f6.title': 'Mobile payment',
    'projects.bs.f6.text': 'Professional subscriptions paid via mobile money.',
    'projects.bs.screensTitle': 'App preview',
    'projects.bs.screensLabel': 'Burkina Service screenshots',
    'projects.bs.s1.alt': 'Burkina Service home screen',
    'projects.bs.s1.caption': 'Home',
    'projects.bs.s2.alt': 'Search results for plumbers nearby',
    'projects.bs.s2.caption': 'Nearby search',
    'projects.bs.s3.alt': 'Professional profile with call, message and WhatsApp buttons',
    'projects.bs.s3.caption': 'Professional profile',
    'projects.bs.s4.alt': 'List of businesses with distance and services',
    'projects.bs.s4.caption': 'Businesses',
    'projects.bs.screensNote': 'Screenshots taken with demo data. The app is in French.',
    'projects.bs.archTitle': 'Technical architecture',
    'projects.bs.a1.title': 'Mobile app',
    'projects.bs.a1.text': 'REST API, WebSocket for messaging, geolocation, Firebase notifications.',
    'projects.bs.a2.title': 'Server',
    'projects.bs.a2.text': 'API, mobile money payments, scheduled jobs, admin panel.',
    'projects.bs.a3.title': 'Data and hosting',
    'projects.bs.a3.text': 'Relational database, versioned migrations, managed hosting.',
    'projects.bs.a4.title': 'Quality and delivery',
    'projects.bs.a4.text': 'Automated tests for the server and the app, security scanning, Android release builds.',

    // Compétences
    'skills.title': 'Technical skills',
    'skills.intro': 'Technologies are grouped by what they have allowed me to build.',
    'skills.prodTitle': 'Used in production',
    'skills.prodNote': 'They power Burkina Service.',
    'skills.flutter': 'Android mobile app, state management with Riverpod, Firebase notifications',
    'skills.python': 'Server and API, data access with SQLAlchemy',
    'skills.postgres': 'Database, versioned migrations with Alembic',
    'skills.clever': 'Server hosting and scheduled jobs',
    'skills.git': 'Version control, automated tests and builds',
    'skills.toolsTitle': 'Everyday tools',
    'skills.aiAssistants': 'AI assistants',
    'skills.learningTitle': 'Currently learning',
    'skills.learnAI': 'Artificial intelligence',
    'skills.learnArch': 'Software architecture',

    // Parcours
    'journey.title': 'Learning journey',
    'journey.s1.date': 'The beginning',
    'journey.s1.title': 'First steps in programming',
    'journey.s1.text': 'Driven by curiosity about the digital world, self-taught: learning, experimenting, improving.',
    'journey.s2.date': 'August 2026',
    'journey.s2.title': 'Burkina Service begins',
    'journey.s2.text': 'Code repository created: mobile app in Flutter and server in Python.',
    'journey.s3.date': 'September 2026',
    'journey.s3.title': 'Automation and quality',
    'journey.s3.text': 'Automated tests for the server and the app, automated Android builds.',
    'journey.s4.date': 'October 2026',
    'journey.s4.title': 'Published on Google Play',
    'journey.s4.text': 'The app becomes available to the public.',
    'journey.s5.date': 'October 2026',
    'journey.s5.title': 'Opening to businesses',
    'journey.s5.text': 'Dedicated business profiles, automated security scanning and an in-app suggestion box.',
    'journey.s6.date': 'November 2026',
    'journey.s6.title': 'Today',
    'journey.s6.text': 'Ongoing development of Burkina Service while learning artificial intelligence and software architecture.',

    // Centres d'intérêt
    'interests.title': 'Technology interests',
    'interests.ai.title': 'Artificial intelligence',
    'interests.ai.text': 'Understanding and designing intelligent systems.',
    'interests.space.title': 'Space technologies',
    'interests.space.text': 'Space exploration, satellites and rocket-related technologies.',
    'interests.startup.title': 'Tech entrepreneurship',
    'interests.startup.text': 'Projects with real-world impact, in Burkina Faso and internationally.',
    'interests.software.title': 'Software development',
    'interests.software.text': 'Computing, programming and software architecture.',

    // Contact
    'contact.title': 'Contact',
    'contact.intro': 'Open to conversations with developers, founders, companies and partners.',
    'contact.emailLabel': 'Email',
    'contact.copy': 'Copy address',
    'contact.copied': 'Address copied.',
    'contact.copyFailed': 'Copy failed: please select the address above.',
    'contact.whatsappHref': 'https://wa.me/22664816018?text=Hello%20Paul%2C%20I%20am%20contacting%20you%20from%20your%20portfolio.',
    'contact.whatsappHint': 'Direct message, calls welcome.',

    // Pied de page
    'footer.made': 'Built with HTML, CSS and JavaScript, no framework.',
    'footer.top': 'Back to top ↑'
  }
};
