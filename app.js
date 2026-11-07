(() => {
  'use strict';
  const content = window.siteContent;
  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const primaryContact = content.contact.channels.find((channel) => channel.url);
  const external = 'target="_blank" rel="noopener noreferrer"';
  const button = () => `<a class="contact-button" href="${escape(primaryContact.url)}" ${external}>${escape(content.contact.button)}</a>`;
  let artId = 0;

  // Exact vector curves form the static ribbon motif. No image is generated or animated.
  function ribbon(tone = 'blue', variant = 0) {
    const id = `ribbon-${artId++}`;
    const colors = { blue: ['#004ca5', '#00bfff', '#c1f4ff'], red: ['#650e32', '#ff3568', '#ffc2d1'], cyan: ['#006072', '#04d9df', '#b5ffff'] }[tone];
    return `<svg class="ribbon ribbon--${variant % 3}" viewBox="0 0 600 280" fill="none" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="${id}-fill" x1="220" y1="290" x2="500" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="${colors[0]}" stop-opacity="0"/><stop offset=".46" stop-color="${colors[0]}" stop-opacity=".34"/><stop offset=".63" stop-color="${colors[1]}" stop-opacity=".52"/><stop offset=".71" stop-color="${colors[2]}" stop-opacity=".82"/><stop offset=".75" stop-color="${colors[1]}" stop-opacity=".26"/><stop offset="1" stop-color="${colors[0]}" stop-opacity=".02"/></linearGradient>
        <linearGradient id="${id}-edge" x1="100" y1="280" x2="590" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="${colors[1]}" stop-opacity="0"/><stop offset=".58" stop-color="${colors[1]}"/><stop offset=".77" stop-color="${colors[2]}"/><stop offset="1" stop-color="${colors[1]}" stop-opacity=".25"/></linearGradient>
      </defs>
      <path d="M80 305C250 288 302 98 469 92C533 90 576 113 620 66C493 160 506 208 404 244C295 283 196 250 80 305Z" fill="url(#${id}-fill)"/>
      <path d="M80 305C250 288 302 98 469 92C533 90 576 113 620 66M80 305C196 250 295 283 404 244C506 208 493 160 620 66" stroke="url(#${id}-edge)" stroke-width="1.05"/>
      <path d="M135 300C282 270 337 213 403 150C462 93 483 33 529-10C466 112 501 165 420 227C352 278 248 259 135 300Z" fill="url(#${id}-fill)" opacity=".7"/>
      <path d="M135 300C282 270 337 213 403 150C462 93 483 33 529-10" stroke="url(#${id}-edge)" stroke-width=".8"/>
    </svg>`;
  }

  document.title = content.title;
  document.querySelector('#site').innerHTML = `
    <div class="page-shell">
      <header class="site-header container">
        <a class="brand" href="#main">${escape(content.title)}</a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="${escape(content.interface.openMenu)}"><span></span><span></span></button>
        <nav id="site-navigation" class="navigation" aria-label="Основная навигация">${content.navigation.map((link) => `<a href="#${escape(link.target)}">${escape(link.label)}</a>`).join('')}</nav>
      </header>
      <main id="main">
        <div class="intro container">
          <div class="portrait-wrap"><img class="portrait" src="${escape(content.images.portrait)}" alt="${escape(content.images.portraitAlt)}" width="${content.images.portraitWidth}" height="${content.images.portraitHeight}" fetchpriority="high" decoding="async"></div>
          <div class="intro-arc" aria-hidden="true"></div>
          <section class="hero" aria-labelledby="hero-heading">
            <h1 id="hero-heading">${escape(content.hero.title)}</h1>
            <p class="hero-subtitle">${escape(content.hero.subtitle)}</p>
            ${button()}
          </section>
          <section id="about" class="about" aria-labelledby="about-label">
            <h2 class="about-label" id="about-label">${escape(content.about.label)}</h2>
            <p>${escape(content.about.text)}</p>
          </section>
          <div class="intro-ribbon intro-ribbon--left">${ribbon('blue', 0)}</div>
          <div class="intro-ribbon intro-ribbon--right">${ribbon('cyan', 1)}</div>
        </div>
        <section id="approach" class="approach container section" aria-labelledby="approach-heading">
          <div class="section-heading"><h2 id="approach-heading">${escape(content.approach.title)}</h2><span aria-hidden="true"></span></div>
          <div class="approach-grid">${content.approach.cards.map((card, i) => `<article class="approach-card surface tone-${card.tone} ${i === 0 ? 'approach-card--lead' : ''}">${ribbon(card.tone, i)}<div class="card-copy"><h3>${escape(card.title)}</h3><p>${escape(card.text)}</p></div></article>`).join('')}</div>
        </section>
        <section id="topics" class="topics container section" aria-labelledby="topics-heading">
          <div class="section-heading"><h2 id="topics-heading">${escape(content.topics.title)}</h2><span aria-hidden="true"></span></div>
          <div class="topics-grid">${content.topics.items.map((topic, i) => `<article class="topic-card surface tone-${topic.tone}">
            ${topic.image ? `<img class="topic-image" src="${escape(topic.image)}" alt="" width="600" height="280" loading="lazy">` : ribbon(topic.tone, i)}
            <h3><button class="topic-toggle" id="topic-button-${i}" type="button" aria-expanded="false" aria-controls="topic-panel-${i}"><span>${escape(topic.title)}</span><span class="plus-icon" aria-hidden="true"></span></button></h3>
            <div class="topic-panel" id="topic-panel-${i}" role="region" aria-labelledby="topic-button-${i}" aria-hidden="true" inert><div class="topic-panel-inner"><p>${escape(topic.description)}</p></div></div>
          </article>`).join('')}</div>
        </section>
        <section class="details container section" aria-label="Образование и стоимость">${content.details.map((detail, i) => `<article class="detail-card surface tone-${detail.tone}">${ribbon(detail.tone, i)}<div class="card-copy"><h2>${escape(detail.title)}</h2><p>${escape(detail.text)}</p></div></article>`).join('')}</section>
        <footer id="contacts" class="contacts container section">
          <h2>${escape(content.contacts.title)}</h2>
          ${button()}
          <div class="contact-channels">${content.contact.channels.filter((channel) => channel.url).map((channel) => `<a href="${escape(channel.url)}" ${external}>${escape(channel.name)} · ${escape(channel.handle)}</a>`).join('')}</div>
        </footer>
      </main>
      <div class="footer-ribbon" aria-hidden="true">${ribbon('cyan', 2)}</div>
    </div>`;

  const toggles = [...document.querySelectorAll('.topic-toggle')];
  function setTopic(buttonElement, open) {
    buttonElement.setAttribute('aria-expanded', String(open));
    const panel = document.getElementById(buttonElement.getAttribute('aria-controls'));
    panel.setAttribute('aria-hidden', String(!open));
    panel.inert = !open;
    buttonElement.closest('.topic-card').classList.toggle('is-open', open);
  }
  toggles.forEach((toggle) => toggle.addEventListener('click', () => {
    const shouldOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggles.forEach((item) => setTopic(item, item === toggle && shouldOpen));
  }));

  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.navigation');
  function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', content.interface.openMenu);
    navigation.classList.remove('is-open');
  }
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? content.interface.closeMenu : content.interface.openMenu);
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('click', (event) => { if (!event.target.closest('.site-header')) closeMenu(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') { closeMenu(); menuToggle.focus(); }
  });
  window.matchMedia('(min-width: 681px)').addEventListener('change', closeMenu);

  // Reveal once, only when entering the viewport. Content remains visible if JS/motion is unavailable.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.animate([{ opacity: 0.65, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 480, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.section').forEach((section) => observer.observe(section));
    reducedMotion.addEventListener('change', (event) => {
      if (event.matches) { observer.disconnect(); document.getAnimations().forEach((animation) => animation.finish()); }
    });
  }
})();
