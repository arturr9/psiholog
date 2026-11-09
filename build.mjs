import { cp, mkdir } from 'node:fs/promises';

await mkdir('public', { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'content.js', 'granat-smoke.js', 'assets']) {
  await cp(file, `public/${file}`, { recursive: true });
}
