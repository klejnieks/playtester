import { test, expect } from '@playwright/test';
// @ts-ignore
import fs from 'fs';
// @ts-ignore
import path from 'path';

const baseURL = 'https://www.etrade.com';
// @ts-ignore
const logFile = path.resolve(__dirname, '../broken-links.log');

const visited = new Set<string>();
const brokenLinks: { url: string; status: number }[] = [];

test('Crawl E*TRADE with limited depth and log broken links', async ({ page }) => {
  const toVisit: { url: string; depth: number }[] = [];

  // 🧭 Step 1: Load base page and collect main nav links
  await page.goto(baseURL);
  const mainNavLinks = await page.$$eval('nav a[href]', links =>
    links.map(link => new URL(link.getAttribute('href') || '', location.origin).pathname)
  );

  const mainNavSet = new Set(mainNavLinks.filter(link => link.startsWith('/')));
  for (const path of mainNavSet) {
    toVisit.push({ url: path, depth: 0 });
  }

  // 🧭 Step 2: Crawl each link up to depth 1
  while (toVisit.length > 0) {
    const { url, depth } = toVisit.shift()!;
    const fullUrl = new URL(url, baseURL).href;
    if (visited.has(url) || depth > 1) continue;

    console.log(`Visiting: ${fullUrl}`);
    visited.add(url);

    let response;
    try {
      response = await page.goto(fullUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
    } catch (e) {
      brokenLinks.push({ url: fullUrl, status: 0 });
      continue;
    }

    const status = response?.status() ?? 0;
    if (status >= 400 || status === 0) {
      brokenLinks.push({ url: fullUrl, status });
    }

    // 🧭 Step 3: Discover new links on this page if depth == 0
    if (depth === 0) {
      const anchors = await page.$$('a[href]');
      for (const anchor of anchors) {
        const href = await anchor.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('javascript')) continue;

        const dest = new URL(href, baseURL);
        if (dest.hostname === new URL(baseURL).hostname && !visited.has(dest.pathname)) {
          toVisit.push({ url: dest.pathname, depth: depth + 1 });
        }
      }
    }
  }

  // 🛠 Step 4: Log broken links to file
  if (brokenLinks.length > 0) {
    const content = brokenLinks
      .map(({ url, status }) => `[${status}] ${url}`)
      .join('\n');
    fs.writeFileSync(logFile, content, 'utf-8');
    console.warn(`⚠️ Broken links logged to ${logFile}`);
  } else {
    fs.writeFileSync(logFile, '✅ No broken links found.', 'utf-8');
    console.log('✅ No broken links found.');
  }
});
