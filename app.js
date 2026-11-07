(() => {
  'use strict';
  const content = window.siteContent;
  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const primaryContact = content.contact.channels.find((channel) => channel.url);
  const external = 'target="_blank" rel="noopener noreferrer"';
  const contactLink = (label, className = 'button button--red') => `<a class="${className}" href="${escape(primaryContact.url)}" ${external}>${escape(label)}<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M4 14 14 4M7 4h7v7"/></svg></a>`;
  const lineArt = (tone, shape, frosted = false) => {
    const source = frosted ? `assets/glass-ribbon-frosted-${tone}.webp` : 'assets/glass-ribbon.webp';
    return `<img class="card-art card-art--${escape(tone)} card-art--${escape(shape)}" src="${escape(source)}" alt="" width="768" height="512" loading="lazy" decoding="async" aria-hidden="true">`;
  };

  document.title = content.title;
  document.querySelector('#site').innerHTML = `
    <div class="page-shell">
      <header class="site-header container">
        <a class="brand" href="#main">Ислам — психолог<span>.</span></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="${escape(content.interface.openMenu)}"><span></span><span></span><span></span></button>
        <nav id="site-navigation" class="navigation" aria-label="Основная навигация">
          ${content.navigation.map((link) => `<a href="#${escape(link.target)}">${escape(link.label)}</a>`).join('')}
          ${contactLink(content.contact.headerButton, 'header-action')}
        </nav>
      </header>
      <main id="main">
        <section class="hero container" aria-labelledby="hero-heading">
          <h1 id="hero-heading"><span>${escape(content.hero.title)}</span><strong>${escape(content.hero.accent)}</strong></h1>
          <p>${escape(content.hero.subtitle)}</p>
          ${contactLink(content.contact.button)}
          <svg class="hero-wave" viewBox="0 0 1100 150" fill="none" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="hero-line" x1="30" y1="110" x2="1070" y2="65" gradientUnits="userSpaceOnUse"><stop stop-color="#2455ff" stop-opacity="0"/><stop offset=".22" stop-color="#2455ff"/><stop offset=".62" stop-color="#168fff"/><stop offset=".78" stop-color="#76f5ff"/><stop offset="1" stop-color="#1475ff" stop-opacity="0"/></linearGradient>
              <linearGradient id="hero-silk" x1="720" y1="130" x2="850" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#073298" stop-opacity="0"/><stop offset=".45" stop-color="#0861e5" stop-opacity=".12"/><stop offset=".72" stop-color="#10baff" stop-opacity=".7"/><stop offset="1" stop-color="#04245a" stop-opacity="0"/></linearGradient>
              <filter id="hero-glow" x="-10%" y="-70%" width="120%" height="240%"><feGaussianBlur stdDeviation="7"/></filter>
            </defs>
            <path d="M10 58C190 82 250 132 470 132S740 126 815 92 914 18 1090 16" stroke="url(#hero-line)" stroke-width="15" opacity=".5" filter="url(#hero-glow)"/>
            <path d="M10 58C190 82 250 132 470 132S740 126 815 92 914 18 1090 16C950 7 925 0 848 21S778 110 670 126C575 141 400 146 270 116S105 64 10 58Z" fill="url(#hero-silk)"/>
            <path d="M10 58C190 82 250 132 470 132S740 126 815 92 914 18 1090 16" stroke="url(#hero-line)" stroke-width="1.5"/>
          </svg>
        </section>
        <section id="about" class="about container section" aria-labelledby="about-heading">
          <div class="section-title section-title--center"><h2 id="about-heading">${escape(content.about.title)}</h2><p>${escape(content.about.subtitle)}</p></div>
          <div class="about-stage">
            <div class="about-portrait"><img src="${escape(content.images.portrait)}" alt="${escape(content.images.portraitAlt)}" width="${content.images.portraitWidth}" height="${content.images.portraitHeight}" fetchpriority="high" decoding="async"></div>
            <div class="about-values">${content.about.values.map((value) => `<article class="value-card value-card--${escape(value.tone)}">${lineArt(value.tone, value.shape)}<h3>${escape(value.title)}</h3></article>`).join('')}</div>
            <div class="approach-note"><h3>${escape(content.about.approachTitle)}</h3><p>${escape(content.about.approachText)}</p></div>
          </div>
          <p class="about-copy">${escape(content.about.text)}</p>
        </section>
        <section id="topics" class="topics container section" aria-labelledby="topics-heading">
          <h2 id="topics-heading">${escape(content.topics.titleStart)} <span>${escape(content.topics.titleAccent)}</span></h2>
          <div class="topics-grid">${content.topics.items.map((topic, index) => `<article class="topic-card topic-card--${escape(topic.tone)}">
            ${lineArt(topic.tone, topic.shape, true)}
            <h3><button class="topic-toggle" id="topic-button-${index}" type="button" aria-expanded="false" aria-controls="topic-panel-${index}"><span>${escape(topic.title)}</span><span class="plus" aria-hidden="true"></span></button></h3>
            <div class="topic-panel" id="topic-panel-${index}" role="region" aria-labelledby="topic-button-${index}" aria-hidden="true" inert><div><p>${escape(topic.description)}</p></div></div>
          </article>`).join('')}</div>
          <a class="articles-link" href="${escape(primaryContact.url)}" ${external}>${escape(content.topics.articlesLabel)}<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M4 14 14 4M7 4h7v7"/></svg></a>
        </section>
        <section class="information container section" aria-label="Образование и консультация">
          <div id="education" class="education information-column">
            <h2>${escape(content.education.title)}</h2><p class="information-subtitle">${escape(content.education.subtitle)}</p>
            <div class="education-list">${content.education.groups.map((group) => `<details><summary>${escape(group.title)}<span aria-hidden="true"></span></summary><p>${escape(group.text)}</p></details>`).join('')}</div>
          </div>
          <div id="consultation" class="consultation information-column">
            <h2>${escape(content.consultation.title)}</h2><p class="information-subtitle">${escape(content.consultation.subtitle)}</p>
            <p class="consultation-text">${escape(content.consultation.text)}</p>
            ${contactLink(content.consultation.button)}
          </div>
        </section>
        <section id="contacts" class="closing container section" aria-labelledby="contacts-heading">
          <h2 id="contacts-heading">${escape(content.contacts.title)}</h2>
          ${contactLink(content.contacts.button, 'button button--tiffany')}
        </section>
      </main>
      <footer class="footer container">
        <a class="brand brand--small" href="#main">Ислам — психолог<span>.</span></a>
        <div class="footer-links">${content.contact.channels.filter((channel) => channel.url).map((channel) => `<a href="${escape(channel.url)}" ${external}>${escape(channel.name)} · ${escape(channel.handle)}</a>`).join('')}</div>
      </footer>
    </div>`;

  const topicToggles = [...document.querySelectorAll('.topic-toggle')];
  function setTopic(button, open) {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    button.setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-hidden', String(!open));
    panel.inert = !open;
    button.closest('.topic-card').classList.toggle('is-open', open);
  }
  topicToggles.forEach((toggle) => toggle.addEventListener('click', () => {
    const shouldOpen = toggle.getAttribute('aria-expanded') !== 'true';
    topicToggles.forEach((item) => setTopic(item, item === toggle && shouldOpen));
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
  window.matchMedia('(min-width: 981px)').addEventListener('change', closeMenu);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const reveals = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry, index) => {
        reveals.unobserve(entry.target);
        if (reducedMotion.matches) return;
        entry.target.animate([
          { opacity: 0, transform: 'translateY(14px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 950, delay: Math.min(index * 110, 330), easing: 'cubic-bezier(.25,.1,.25,1)', fill: 'backwards' });
      });
    }, { threshold: .12 });
    document.querySelectorAll('main h1, main h2, .value-card h3, .approach-note h3, main p:not(.topic-panel p):not(details p), main .button, .articles-link, .topic-toggle > span:first-child, .footer-links').forEach((element) => reveals.observe(element));
    reducedMotion.addEventListener('change', () => {
      if (reducedMotion.matches) {
        reveals.disconnect();
        document.getAnimations().forEach((animation) => animation.cancel());
      }
    });
  }
})();
