const MARQUEE_ITEMS = {
  es: ['EDICIÓN DE VIDEO','DISEÑO GRÁFICO','ANIMACIÓN','DISEÑO SONORO','MOTION GRAPHICS','DISEÑO DE PRODUCTO','MODELADO 3D','DISEÑO INMERSIVO','DISEÑO DIGITAL'],
  en: ['VIDEO EDITING','GRAPHIC DESIGN','ANIMATION','SOUND DESIGN','MOTION GRAPHICS','PRODUCT DESIGN','3D MODELLING','IMMERSIVE DESIGN','DIGITAL DESIGN']
};

const translations = {
  es: {
    /* ── Global ─────────────────────────────────────────────── */
    'nav.about': 'Acerca de mí',
    'nav.works': 'Trabajos',
    'fab.cta': '¿Trabajamos juntos?',
    'fab.panel.title': 'Contacto',
    'fab.panel.email': 'Correo',
    'fab.panel.phone': 'Teléfono',

    /* ── index.html ─────────────────────────────────────────── */
    'page.title': 'Ramiro Gallo — Diseñador Multidisciplinar',
    'hero.eyebrow': 'Acerca de mí',
    'hero.h1': '<em>¡Hola!</em><br>Soy Ramiro.',
    'hero.descriptor': '<strong>Diseñador multidisciplinario basado en Buenos Aires.</strong> <br> Me interesan lo audiovisual, la edición, el diseño sonoro y el diseño de producto — y disfruto cada vez que esos mundos se cruzan.',
    'hero.cta': 'Conocerme mejor →',
    'hero.top.label': 'Portfolio · 2026',
    'works.tag': 'Trabajos seleccionados',
    'works.title': 'Lo que hago',
    'works.link': 'Ver todos →',
    'contact.eyebrow': 'Contacto',
    'contact.h2': '¿Trabajamos juntos?',
    'contact.info.title': 'Datos de contacto',
    'contact.info.sub': 'Estoy disponible para proyectos freelance, colaboraciones y oportunidades de tiempo completo.',
    'contact.form.title': 'Contacto rápido',
    'form.label.nombre': 'Nombre',
    'form.label.apellido': 'Apellido',
    'form.label.empresa': 'Empresa <span class="optional">(opcional)</span>',
    'form.label.correo': 'Correo',
    'form.label.asunto': 'Motivo del contacto',
    'form.label.mensaje': 'Mensaje',
    'form.placeholder.nombre': 'Tu nombre',
    'form.placeholder.apellido': 'Tu apellido',
    'form.placeholder.empresa': 'Tu empresa',
    'form.placeholder.correo': 'tu@correo.com',
    'form.placeholder.asunto': '¿En qué puedo ayudarte?',
    'form.placeholder.mensaje': 'Contame más sobre tu proyecto o idea...',
    'form.submit': 'Enviar mensaje →',

    /* ── about-ramiro-gallo.html ────────────────────────────── */
    'about.page.title': 'Acerca de mí — Ramiro Gallo',
    'about.photo.eyebrow': 'Diseñador Multidisciplinar · Buenos Aires',
    'about.hero.badge': 'Acerca de mí',
    'about.hero.quote': 'Siempre hay algo más<br>que quiero <em>aprender</em>.',
    'about.bio.1': 'Soy diseñador multidisciplinario, egresado de la Universidad Torcuato Di Tella. Desde antes de empezar a estudiar entendí que no quería quedarme en una sola disciplina: me atrae tanto <strong>lo audiovisual y lo sonoro</strong> como el <strong>modelado 3D y la identidad visual</strong>.',
    'about.bio.2': 'Soy curioso por naturaleza. Siempre estoy haciendo cursos, explorando herramientas nuevas y desarrollando proyectos propios para seguir creciendo. Trabajo con mucha atención al detalle, y eso se nota en los resultados.',
    'about.section.education': 'Formación',
    'about.degree.1': 'Licenciatura en Diseño',
    'about.inst.1': 'Universidad Torcuato Di Tella · Buenos Aires, Argentina',
    'about.degree.2': 'Programa de Intercambio',
    'about.inst.2': 'Erasmus Universiteit · Rotterdam, Países Bajos',
    'about.degree.3': 'Bachiller Bilingüe en Ciencias Sociales y Humanidades',
    'about.inst.3': 'Colegio San Agustín · Buenos Aires, Argentina',
    'about.section.skills': 'Habilidades',
    'about.skills.tools': 'Herramientas',
    'about.skills.languages': 'Idiomas',
    'about.lang.es': 'Español',
    'about.lang.en': 'Inglés',
    'about.lang.level.native': 'Nativo',
    'about.skills.interests': 'Intereses',
    'interest.cine': 'El cine',
    'interest.naturaleza': 'La naturaleza',
    'interest.aprender': 'Aprender',
    'interest.digitalidad': 'La digitalidad',
    'interest.musica': 'La música',
    'interest.viajar': 'Viajar',
    'interest.explorar': 'Explorar',
    'interest.fotografia': 'La fotografía',
    'interest.cultura': 'La cultura',
    'interest.dibujar': 'Dibujar',
    'interest.videos': 'Editar videos',
    'interest.arte': 'El arte',

    /* ── trabajos-ramiro-gallo.html ─────────────────────────── */
    'works.page.title': 'Trabajos — Ramiro Gallo',
    'works.eyebrow': 'Selección de trabajos',
    'works.h1': 'Proyectos <em>destacados</em>',
    'works.count': '05 proyectos',
    'filter.todos': 'Todos',
    'filter.sonoro': 'Sonoro',
    'filter.identidad': 'Identidad',
    'filter.grafico': 'Gráfico',
    'filter.producto': 'Producto',
    'card.tag.conceptual': 'Conceptual',
    'card.tag.grafico': 'Gráfico',
    'card.tag.producto': 'Producto',
    'card.tag.identidad': 'Identidad',
    'card.tag.sonoro': 'Sonoro',
    'card.tag.audiovisual': 'Audiovisual',

    /* ── Elementos comunes páginas de trabajo ───────────────── */
    'work.back': '↑ Todos los trabajos',
    'work.nav.back': '↑ Todos los trabajos',
    'work.meta.team': 'Equipo',
    'work.meta.tools': 'Herramientas',
    'work.meta.skills': 'Habilidades',
    'work.gallery.images': 'Imágenes',
    'work.back.top': '↑ Volver al inicio',

    /* ── trabajo-patagon.html ───────────────────────────────── */
    'patagon.eyebrow': 'Conceptual · Gráfico · Producto · 2025',
    'patagon.skill.1': 'Ilustración',
    'patagon.skill.2': 'Desarrollo conceptual',
    'patagon.skill.3': 'Narrativa',
    'patagon.statement': 'Un juego de mesa para cuatro personas: <em>a conquistar las tierras del sur.</em>',
    'patagon.desc.1': 'El proyecto consistió en la ideación, conceptualización y realización completa de un juego de mesa listo para jugar. Diseñamos e ilustramos cada pieza, ficha y carta.',
    'patagon.desc.2': 'El resultado final fue un tablero de MDF, fichas para cada jugador y cuatro mazos de cartas, con ilustraciones caricaturescas basadas en la Patagonia argentina.',

    /* ── trabajo-post-mortem.html ───────────────────────────── */
    'postmortem.eyebrow': 'Conceptual · Gráfico · Identidad · 2024',
    'postmortem.skill.1': 'Ilustración',
    'postmortem.skill.2': 'Desarrollo conceptual',
    'postmortem.skill.3': 'Narrativa',
    'postmortem.skill.4': 'Experiencia de usuario',
    'postmortem.skill.5': 'Prototipado web',
    'postmortem.statement': 'Una exploración conceptual a partir de la discografía e historia de Dillom. <em>"Quien quiera nacer, tiene que destruir un mundo."</em>',
    'postmortem.desc.1': '<em>Post Mortem</em> es un fanzine inspirado en el álbum debut de Dillom y su conexión conceptual con <em>Demian</em>, el libro de Herman Hesse. Representa el momento de quiebre en el que Dylan, la persona, se convierte en Dillom, el artista.',
    'postmortem.desc.2': 'A través del collage digital y una paleta de colores vibrantes, busca mostrar el lenguaje provocativo e irónico del cantante, en un fanzine de 3 páginas con un póster en el reverso.',
    'postmortem.desc.3': 'El proyecto también incluye un prototipo de página web a modo de videojuego, con estética pixel art, que recorre diferentes etapas de la vida del artista mientras el usuario moldea una canción.',
    'postmortem.gallery.game': 'Videojuego web',
    'postmortem.proto.link': 'Ver prototipo ↗',

    /* ── trabajo-ritual-divino.html ─────────────────────────── */
    'ritual.eyebrow': 'Conceptual · Sonoro · Audiovisual · 2025',
    'ritual.skill.1': 'Modelado 3D',
    'ritual.skill.2': 'Animación',
    'ritual.skill.3': 'Desarrollo conceptual',
    'ritual.skill.4': 'Diseño sonoro',
    'ritual.statement': '¿Qué pasa en la conciencia al adentrarse en su interior? <em>Un acto ceremonial dado para honrar, conectar o invocar.</em>',
    'ritual.desc.1': 'Un viaje dentro de la conciencia, un ritual interno, una búsqueda de elevación, de conexión con algo más poderoso, algo que se encuentra en el más allá. Ese flotar de la mente se convierte en un lugar que gravita entre realidad y fantasía.',
    'ritual.desc.2': 'La experiencia consiste en una pieza audiovisual de 60 segundos diseñada para verse en gafas de realidad virtual. Implicó el desarrollo del concepto, la creación del entorno sonoro, y el modelado y la animación del paisaje y sus personajes.',
    'ritual.video.link': 'Ver video completo ↗',

    /* ── trabajo-the-monkey.html ────────────────────────────── */
    'monkey.eyebrow': 'Sonoro · Audiovisual · 2025',
    'monkey.skill.1': 'Diseño sonoro',
    'monkey.skill.2': 'Técnica de sonido',
    'monkey.skill.3': 'Grabación y edición',
    'monkey.skill.4': 'Foley',
    'monkey.statement': '¿Cómo se componen los sonidos que escuchamos en las películas? <em>¿Cómo se crea un sonido que no existe en la realidad?</em>',
    'monkey.desc.1': 'Partiendo de una pieza audiovisual existente, se eliminó la pista de audio original y se resonorizaron 10 minutos completos: actuar y grabar los sonidos que debería haber en la escena, mirando el video al mismo tiempo.',
    'monkey.desc.2': 'El Foley implica recrear manualmente sonidos cotidianos en un estudio en sincronía con la imagen, generando audios personalizados específicos para esa pieza.',
    'monkey.desc.3': 'Para llegar a resultados más interesantes, no se busca usar el mismo objeto que se ve en pantalla, sino que se desglosa el sonido objetivo y se construye en capas, con otros objetos o props.',
    'monkey.video.placeholder': 'Video — próximamente',

    /* ── trabajo-mulo.html ──────────────────────────────────── */
    'mulo.eyebrow': 'Identidad · Conceptual · Gráfico · 2025',
    'mulo.skill.1': 'Gestión Cultural',
    'mulo.skill.2': 'Desarrollo Conceptual',
    'mulo.skill.3': 'Branding',
    'mulo.skill.4': 'Motion Graphics',
    'mulo.statement': 'Provocación, juego, gesto estético, deformaciones. <em>En lugar de ocultar lo artificial, se celebra.</em> La función se vuelve excusa para construir y experimentar con otro lenguaje.',
    'mulo.desc.1': 'Basado en una selección de objetos de diseño argentino que emplean un "juego provocativo", donde se exageran las formas sin perjudicar ni entorpecer la funcionalidad.',
    'mulo.desc.2': 'Ya sea mobiliario con apariencia escultórica, o afiches con predominancia gráfica, la experimentación con la técnica y la morfología siempre está presente.',
    'mulo.desc.3': 'El engaño, la trampa, la transformación, la ilusión, lo que se ve, lo que no.',
    'mulo.gallery.objects': 'Objetos inspiración',
    'mulo.gallery.brand': 'Marca',
    'mulo.gallery.web': 'Archivo web',
    'mulo.site.link': 'Ver sitio ↗',
  },

  en: {
    /* ── Global ─────────────────────────────────────────────── */
    'nav.about': 'About',
    'nav.works': 'Works',
    'fab.cta': "Want to work?",
    'fab.panel.title': 'Contact',
    'fab.panel.email': 'Email',
    'fab.panel.phone': 'Phone',

    /* ── index.html ─────────────────────────────────────────── */
    'page.title': 'Ramiro Gallo — Multidisciplinary Designer',
    'hero.eyebrow': 'About me',
    'hero.h1': "<em>Hi!</em><br>I'm Ramiro.",
    'hero.descriptor': "<strong>Multidisciplinary designer based in Buenos Aires.</strong> <br> I'm drawn to audiovisual work, editing, sound design, and product design — and I love it when those worlds collide.",
    'hero.cta': 'Get to know me →',
    'hero.top.label': 'Portfolio · 2026',
    'works.tag': 'Selected works',
    'works.title': 'What I do',
    'works.link': 'See all →',
    'contact.eyebrow': 'Contact',
    'contact.h2': 'Want to work?',
    'contact.info.title': 'Contact details',
    'contact.info.sub': 'Available for freelance projects, collaborations, and full-time opportunities.',
    'contact.form.title': 'Quick contact',
    'form.label.nombre': 'First name',
    'form.label.apellido': 'Last name',
    'form.label.empresa': 'Company <span class="optional">(optional)</span>',
    'form.label.correo': 'Email',
    'form.label.asunto': 'Reason for reaching out',
    'form.label.mensaje': 'Message',
    'form.placeholder.nombre': 'Your name',
    'form.placeholder.apellido': 'Your last name',
    'form.placeholder.empresa': 'Your company',
    'form.placeholder.correo': 'your@email.com',
    'form.placeholder.asunto': 'How can I help you?',
    'form.placeholder.mensaje': 'Tell me more about your project or idea...',
    'form.submit': 'Send message →',

    /* ── about-ramiro-gallo.html ────────────────────────────── */
    'about.page.title': 'About — Ramiro Gallo',
    'about.photo.eyebrow': 'Multidisciplinary Designer · Buenos Aires',
    'about.hero.badge': 'About me',
    'about.hero.quote': "There's always something else<br>I want to <em>learn</em>.",
    'about.bio.1': "I'm a multidisciplinary designer, graduate of Universidad Torcuato Di Tella. Even before I started studying I knew I didn't want to stick to a single discipline: I'm drawn to <strong>audiovisual and sound work</strong> just as much as <strong>3D modelling and visual identity</strong>.",
    'about.bio.2': "I'm naturally curious. I'm always taking courses, exploring new tools, and developing personal projects to keep growing. I work with a lot of attention to detail — and that shows in the results.",
    'about.section.education': 'Education',
    'about.degree.1': "Bachelor's Degree in Design",
    'about.inst.1': 'Universidad Torcuato Di Tella · Buenos Aires, Argentina',
    'about.degree.2': 'Exchange Programme',
    'about.inst.2': 'Erasmus Universiteit · Rotterdam, Netherlands',
    'about.degree.3': 'Bilingual Baccalaureate in Social Sciences and Humanities',
    'about.inst.3': 'Colegio San Agustín · Buenos Aires, Argentina',
    'about.section.skills': 'Skills',
    'about.skills.tools': 'Tools',
    'about.skills.languages': 'Languages',
    'about.lang.es': 'Spanish',
    'about.lang.en': 'English',
    'about.lang.level.native': 'Native',
    'about.skills.interests': 'Interests',
    'interest.cine': 'Film',
    'interest.naturaleza': 'Nature',
    'interest.aprender': 'Learning',
    'interest.digitalidad': 'Digitality',
    'interest.musica': 'Music',
    'interest.viajar': 'Travel',
    'interest.explorar': 'Exploring',
    'interest.fotografia': 'Photography',
    'interest.cultura': 'Culture',
    'interest.dibujar': 'Drawing',
    'interest.videos': 'Video editing',
    'interest.arte': 'Art',

    /* ── trabajos-ramiro-gallo.html ─────────────────────────── */
    'works.page.title': 'Works — Ramiro Gallo',
    'works.eyebrow': 'Selected works',
    'works.h1': '<em>Featured</em> projects',
    'works.count': '05 projects',
    'filter.todos': 'All',
    'filter.sonoro': 'Sound',
    'filter.identidad': 'Identity',
    'filter.grafico': 'Graphic',
    'filter.producto': 'Product',
    'card.tag.conceptual': 'Conceptual',
    'card.tag.grafico': 'Graphic',
    'card.tag.producto': 'Product',
    'card.tag.identidad': 'Identity',
    'card.tag.sonoro': 'Sound',
    'card.tag.audiovisual': 'Audiovisual',

    /* ── Elementos comunes páginas de trabajo ───────────────── */
    'work.back': '↑ All works',
    'work.nav.back': '↑ All works',
    'work.meta.team': 'Team',
    'work.meta.tools': 'Tools',
    'work.meta.skills': 'Skills',
    'work.gallery.images': 'Images',
    'work.back.top': '↑ Back to top',

    /* ── trabajo-patagon.html ───────────────────────────────── */
    'patagon.eyebrow': 'Conceptual · Graphic · Product · 2025',
    'patagon.skill.1': 'Illustration',
    'patagon.skill.2': 'Conceptual development',
    'patagon.skill.3': 'Narrative',
    'patagon.statement': 'A board game for four players: <em>conquer the lands of the south.</em>',
    'patagon.desc.1': 'The project involved the full ideation, conceptualisation, and production of a ready-to-play board game. We designed and illustrated every piece, token, and card.',
    'patagon.desc.2': 'The final result was an MDF board, player tokens, and four card decks, featuring caricature-style illustrations based on Argentine Patagonia.',

    /* ── trabajo-post-mortem.html ───────────────────────────── */
    'postmortem.eyebrow': 'Conceptual · Graphic · Identity · 2024',
    'postmortem.skill.1': 'Illustration',
    'postmortem.skill.2': 'Conceptual development',
    'postmortem.skill.3': 'Narrative',
    'postmortem.skill.4': 'User experience',
    'postmortem.skill.5': 'Web prototyping',
    'postmortem.statement': 'A conceptual exploration drawing from Dillom\'s discography and story. <em>"He who wants to be born must first destroy a world."</em>',
    'postmortem.desc.1': "<em>Post Mortem</em> is a fanzine inspired by Dillom's debut album and its conceptual connection to <em>Demian</em>, the novel by Hermann Hesse. It represents the breaking point at which Dylan, the person, becomes Dillom, the artist.",
    'postmortem.desc.2': "Through digital collage and a vibrant colour palette, it captures the singer's provocative and ironic visual language — a 3-page fanzine with a poster on the reverse.",
    'postmortem.desc.3': "The project also includes a web prototype in the form of a pixel-art video game, taking the user through different stages of the artist's life while they shape a song.",
    'postmortem.gallery.game': 'Web game',
    'postmortem.proto.link': 'View prototype ↗',

    /* ── trabajo-ritual-divino.html ─────────────────────────── */
    'ritual.eyebrow': 'Conceptual · Sound · Audiovisual · 2025',
    'ritual.skill.1': '3D Modelling',
    'ritual.skill.2': 'Animation',
    'ritual.skill.3': 'Conceptual development',
    'ritual.skill.4': 'Sound design',
    'ritual.statement': 'What happens in consciousness when it ventures inward? <em>A ceremonial act performed to honour, connect, or invoke.</em>',
    'ritual.desc.1': "A journey within consciousness — an inner ritual, a search for elevation, for connection with something greater, something found beyond. That drifting of the mind becomes a place that hovers between reality and fantasy.",
    'ritual.desc.2': "The experience is a 60-second audiovisual piece designed for VR headsets. It involved concept development, sound environment creation, and the modelling and animation of the landscape and its characters.",
    'ritual.video.link': 'Watch full video ↗',

    /* ── trabajo-the-monkey.html ────────────────────────────── */
    'monkey.eyebrow': 'Sound · Audiovisual · 2025',
    'monkey.skill.1': 'Sound design',
    'monkey.skill.2': 'Sound engineering',
    'monkey.skill.3': 'Recording and editing',
    'monkey.skill.4': 'Foley',
    'monkey.statement': "How are the sounds we hear in films composed? <em>How do you create a sound that doesn't exist in reality?</em>",
    'monkey.desc.1': "Starting from an existing audiovisual piece, the original audio track was removed and 10 full minutes were re-recorded: performing and capturing the sounds that should exist in the scene, while watching the video simultaneously.",
    'monkey.desc.2': "Foley involves manually recreating everyday sounds in a studio in sync with the image, producing custom audio tailored specifically to that piece.",
    'monkey.desc.3': "To reach more interesting results, the goal isn't to use the same object seen on screen — instead, the target sound is broken down and built in layers, using other objects or props.",
    'monkey.video.placeholder': 'Video — coming soon',

    /* ── trabajo-mulo.html ──────────────────────────────────── */
    'mulo.eyebrow': 'Identity · Conceptual · Graphic · 2025',
    'mulo.skill.1': 'Cultural management',
    'mulo.skill.2': 'Conceptual development',
    'mulo.skill.3': 'Branding',
    'mulo.skill.4': 'Motion Graphics',
    'mulo.statement': 'Provocation, play, aesthetic gesture, deformations. <em>Rather than concealing the artificial, it is celebrated.</em> Function becomes an excuse to build and experiment with another language.',
    'mulo.desc.1': 'Based on a selection of Argentine design objects that employ a "provocative play", where forms are exaggerated without compromising or hindering functionality.',
    'mulo.desc.2': 'Whether sculptural-looking furniture or graphically-led posters, experimentation with technique and morphology is always present.',
    'mulo.desc.3': 'Deception, entrapment, transformation, illusion — what is seen, and what is not.',
    'mulo.gallery.objects': 'Inspiration objects',
    'mulo.gallery.brand': 'Brand',
    'mulo.gallery.web': 'Web archive',
    'mulo.site.link': 'Visit site ↗',
  }
};

function buildMarqueeHTML(lang) {
  const sep = '<span class="msep"></span>';
  const sequence = MARQUEE_ITEMS[lang].map(item => item + sep).join('');
  return `<span class="marquee-item">${sequence.repeat(4)}</span>`;
}

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (key === 'marquee') {
      el.innerHTML = buildMarqueeHTML(lang);
      return;
    }
    const text = translations[lang][key];
    if (text === undefined) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.innerHTML = text;
    }
  });

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.langOpt === lang);
  });

  // Translate carousel categories on index page
  if (window._PROJECTS && window._renderClean) {
    const CAT_ES_TO_EN = {
      'Conceptual · Gráfico · Producto':  'Conceptual · Graphic · Product',
      'Conceptual · Gráfico · Identidad': 'Conceptual · Graphic · Identity',
      'Conceptual · Sonoro · Audiovisual':'Conceptual · Sound · Audiovisual',
      'Sonoro · Audiovisual':             'Sound · Audiovisual',
      'Identidad · Conceptual · Gráfico': 'Identity · Conceptual · Graphic',
    };
    const CAT_EN_TO_ES = Object.fromEntries(Object.entries(CAT_ES_TO_EN).map(([k,v]) => [v,k]));
    window._PROJECTS.forEach(p => {
      p.cat = lang === 'en'
        ? (CAT_ES_TO_EN[p.cat] || p.cat)
        : (CAT_EN_TO_ES[p.cat] || p.cat);
    });
    window._renderClean();
  }

  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const titleKey = document.body.dataset.pageTitleKey;
  if (titleKey && translations[lang][titleKey]) {
    document.title = translations[lang][titleKey];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'es';
  applyLang(saved);
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      applyLang(localStorage.getItem('lang') === 'es' ? 'en' : 'es');
    });
  }
});
