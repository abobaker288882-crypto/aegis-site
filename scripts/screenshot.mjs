import { mkdirSync } from 'node:fs';
import { chromium } from 'playwright';

const url = process.argv[2] ?? 'http://localhost:4173/';
const outDir = process.argv[3] ?? 'shots';
mkdirSync(outDir, { recursive: true });

const views = [
  ['desktop-dark', { width: 1440, height: 960 }, 'dark'],
  ['desktop-light', { width: 1440, height: 960 }, 'light'],
  ['mobile-dark', { width: 390, height: 844 }, 'dark'],
];

const browser = await chromium.launch();
for (const [name, viewport, colorScheme] of views) {
  const context = await browser.newContext({ viewport, colorScheme });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${outDir}/${name}.png`, fullPage: true });
  console.log(`captured ${name}`);
  await context.close();
}
await browser.close();
