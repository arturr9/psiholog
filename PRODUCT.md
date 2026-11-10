# Ислам — психолог

<!-- impeccable:product-schema 1 -->

## Platform
web

## Stack
Delegated by the explicit brief: plain HTML, CSS and JavaScript, with a Node.js standard-library preview server. No runtime dependencies or build step.

## Product Purpose
Russian single-page introduction to psychologist Islam. Visitors read about him, his approach and informational topics, then contact @islmchanel on Instagram, @minaki10 in Telegram or via VK.

## Capabilities and Constraints
Use all supplied Russian copy without inventing qualifications, methods, prices, outcomes or services. Eight exclusive expandable topics; anchor navigation; responsive desktop, tablet and mobile layouts; keyboard controls and reduced motion. Since 9 November 2026 the Education section contains the client-supplied qualification, professional status and therapy approaches. The empty basic-education block was removed on 10 November 2026 at the client's request. The price placeholder was replaced the same day with client-supplied copy inviting visitors to a direct conversation about format and price. The duplicate closing panel was removed; the “Контакты” anchor now points to the footer with the three contact links. No forms, payment, testimonials, FAQ or extra sections. Local delivery only; publishing requires a separate user request.

## Brand Commitments
User specifies near-black/deep-blue surfaces, electric blue, red and Tiffany accents, locally served Montserrat, large typography, asymmetrical cards, static abstract neon lines. Since 9 November 2026 the «Найти опору.» hero highlight uses a garnet `#8e1238` animated smoke layer instead of Tiffany; Tiffany remains for the brand dot, inline links and keyboard focus. The former Tiffany closing button was removed together with the closing panel. Preserve the actual person's appearance and original photograph; never generate a substitute person.

## Обновление от 9 ноября 2026

Правки по пожеланиям клиента: гранатовый дым на плашке «Найти опору.»; под «Мой подход» две строки «Доказательная психотерапия» и «Индивидуальный подход»; в «Образовании» добавлены «Квалификация» и «Профессиональный статус», блок «Повышение квалификации» переименован в «Подходы в терапии» и наполнен тремя методами; в футере три канала связи, основная кнопка по-прежнему ведёт в Instagram. Новый файл `granat-smoke.js` включается в сборку `build.mjs`, иначе на Vercel дым не попадёт в `public/`.

## Обновление от 10 ноября 2026

По просьбе клиента из раздела «Образование» полностью удалён пустой блок «Основное образование» с текстом «Информация скоро появится». Остались три раскрывающихся блока: «Квалификация», «Профессиональный статус» и «Подходы в терапии». Позже в тот же день в блоке «Консультация» временный текст «Информация скоро появится» заменён на «Начнём с разговора: расскажу о формате и стоимости, отвечу на ваши вопросы.» (редактура в стиле сайта: первое лицо, лексика «разговора», без канцелярита). Кнопка «Уточнить условия» заменена на «Связаться со мной» — так из блока ушло слово «условия» и тон выровнялся. Подзаголовок «Стоимость и формат» сохранён.

Так как новый текст и кнопка дублировали финальный блок «Начнём с разговора?», сам блок удалён полностью вместе с декоративным свечением, неиспользуемыми данными `content.contacts` и мёртвыми CSS-правилами (`.closing`, `.button--tiffany`, `.ambient-glow--closing`). Пункт меню «Контакты» не удалялся: якорь `#contacts` перенесён на футер с тремя каналами связи, ссылка осталась рабочей. Файл `assets/ambient-tiffany.webp` сохранён — он используется другим свечением.

## Evidence on Hand
Full brief: C:/Users/Артур/.codex/attachments/16025fc4-29ed-4303-9ab9-90c20e6ca485/Вставленный текст.txt.
The user supplied the 1024×1536 mockup and original square portrait during implementation. Reference: .impeccable/reference.png. Original, unchanged portrait: assets/islam-portrait.png. Use their composition, lighting and compact topic-card layout as authority.

## Accessibility & Inclusion
Russian document language, readable contrast, visible keyboard focus, accessible topic buttons with aria-expanded, reduced-motion support, no dependence on hover, no horizontal overflow.
