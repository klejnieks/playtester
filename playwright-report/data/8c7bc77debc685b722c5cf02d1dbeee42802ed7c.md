# Test info

- Name: Crawl E*TRADE with limited depth and log broken links
- Location: C:\Users\Kenne\playground\Playtester\playtester\tests\crawler-depth-limited.spec.ts:14:5

# Error details

```
Error: elementHandle.getAttribute: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator(':scope')

    at C:\Users\Kenne\playground\Playtester\playtester\tests\crawler-depth-limited.spec.ts:54:35
```

# Page snapshot

```yaml
- banner:
  - navigation:
    - link "Skip to content":
      - /url: "#page-content"
    - list:
      - listitem:
        - link "Visit banking":
          - /url: https://us.etrade.com/bank
          - text: Banking
      - listitem:
        - link "view our stock plans":
          - /url: https://us.etrade.com/stock-plans
          - text: Stock Plans
    - link "contact us at etrade":
      - /url: https://us.etrade.com/contact-us
      - text: Contact us
    - link "log on to etrade":
      - /url: https://us.etrade.com/e/t/user/login
      - text: Log on
    - link "ETRADE from Morgan Stanley Home page":
      - /url: https://us.etrade.com/home
      - img "ETRADE from Morgan Stanley Home page"
    - list:
      - listitem:
        - link "Account Types":
          - /url: https://us.etrade.com/what-we-offer/our-accounts
        - button "Expand Account Types"
      - listitem:
        - link "Investment Choices":
          - /url: https://us.etrade.com/what-we-offer/investment-choices
        - button "Expand Investment Choices"
      - listitem:
        - link "New to Investing":
          - /url: https://us.etrade.com/planning
      - listitem:
        - link "Trading":
          - /url: https://us.etrade.com/trade
        - button "Expand Trading"
      - listitem:
        - link "Pricing and Rates":
          - /url: https://us.etrade.com/what-we-offer/pricing-and-rates
      - listitem:
        - link "Knowledge":
          - /url: https://us.etrade.com/knowledge/knowledge-center
        - button "Expand Knowledge"
    - button "Search"
    - button "Open an account"
- main:
  - img
  - heading "We couldn't locate your page." [level=1]
  - paragraph: The page you requested may have moved or is temporarily unavailable.
  - paragraph: "Some things you can do:"
  - paragraph:
    - text: Check out our site at
    - link "Click to go to www.etrade.com/home":
      - /url: /home
      - text: etrade.com
  - paragraph: Check the URL and try again
  - paragraph:
    - text: Still can't find what you need? We are available 24 hours a day, 7 days a week. Visit our
    - link "Click here to visit the Contact Us page":
      - /url: /contact-us
      - text: contact us
    - text: page.
- heading "ETRADE Footer" [level=2]
- contentinfo:
  - heading "About Us" [level=4]:
    - strong: About Us
  - list:
    - listitem:
      - link "Company Overview":
        - /url: https://www.morganstanley.com?icid=etrade_globalfooterlogin_companyoverview
    - listitem:
      - link "Investor Relations":
        - /url: https://www.morganstanley.com/about-us-ir?icid=etrade_globalfooterlogin_investorrelations
    - listitem:
      - link "Newsroom":
        - /url: https://www.morganstanley.com/about-us-newsroom#-536583991-tab
    - listitem:
      - link "Careers":
        - /url: https://www.morganstanley.com/people?icid=etrade_globalfooterlogin_careers
    - listitem:
      - link "Accessibility at E*TRADE":
        - /url: https://us.etrade.com/accessibility?icid=etrade_globalfooterlogin_accessibility
    - listitem:
      - link "Privacy & Cookies":
        - /url: https://www.morganstanley.com/privacy-pledge?icid=etrade_globalfooterlogin_privacy
  - heading "Service" [level=4]:
    - strong: Service
  - list:
    - listitem:
      - link "Contact Us":
        - /url: https://us.etrade.com/contact-us?icid=etrade_globalfooterlogin_contactus
    - listitem:
      - link "FAQs":
        - /url: https://us.etrade.com/frequently-asked-questions/most-popular?icid=etrade_globalfooterlogin_faqs
    - listitem:
      - link "Forms and Applications":
        - /url: https://us.etrade.com/forms-applications?icid=etrade_globalfooterlogin_forms
  - heading "Quick Links" [level=4]:
    - strong: Quick Links
  - list:
    - listitem:
      - link "Open An Account":
        - /url: https://us.etrade.com/what-we-offer/our-accounts?icid=etrade_globalfooterlogin_openaccount
    - listitem:
      - link "Fund My Account":
        - /url: https://us.etrade.com/what-we-offer/our-accounts/fund-my-account?icid=etrade_globalfooterlogin_fundaccount
    - listitem:
      - link "Cash Management":
        - /url: https://us.etrade.com/l/cash-management?icid=etrade_globalfooterlogin_cashmanagement
    - listitem:
      - link "Find a Financial Advisor":
        - /url: https://advisor.morganstanley.com/search?icid=etrade_globalfooterlogin_findfinancialadvisor
    - listitem:
      - link "Stock Plans":
        - /url: https://us.etrade.com/stock-plans?icid=etrade_globalfooterlogin_stockplans
    - listitem:
      - link "Executive Services":
        - /url: https://us.etrade.com/l/executive-services?icid=etrade_globalfooterlogin_executiveservices
    - listitem:
      - link "Security Center":
        - /url: https://us.etrade.com/security-center?icid=etrade_globalfooterlogin_securitycenter
    - listitem:
      - link "Site Map":
        - /url: https://us.etrade.com/sitemap?icid=etrade_globalfooterlogin_sitemap
  - heading "Connect with us" [level=4]
  - paragraph:
    - link "phone 800-387-2331":
      - /url: Tel:18003872331
  - list:
    - listitem:
      - link:
        - /url: https://www.facebook.com/ETRADE
    - listitem:
      - link:
        - /url: https://twitter.com/etrade
    - listitem:
      - link:
        - /url: https://www.linkedin.com/company/etrade
    - listitem:
      - link:
        - /url: https://www.youtube.com/user/etrade
    - listitem:
      - link:
        - /url: https://www.instagram.com/etrade_frommorganstanley/
  - separator
  - paragraph
  - heading "Please read all the important disclosures below." [level=4]
  - paragraph: "Investing:"
  - paragraph:
    - text: Check the background of Morgan Stanley Smith Barney LLC on
    - link "Click to check out the background of E*TRADE Securities LLC on FINRA":
      - /url: https://brokercheck.finra.org/
      - text: FINRA's BrokerCheck
    - text: and see the Morgan Stanley Smith Barney LLC
    - link "Relationship Summary":
      - /url: https://www.morganstanleyclientserv.com/publiccontent/msoc/pdf/ClientRelationshipSummary.pdf
    - text: .
  - table:
    - rowgroup:
      - row "Investment Products • Not FDIC Insured • No Bank Guarantee • May Lose Value":
        - cell "Investment Products • Not FDIC Insured • No Bank Guarantee • May Lose Value"
  - paragraph
  - paragraph:
    - img "SiPC logo"
  - paragraph
  - separator
  - paragraph
  - paragraph: "Banking:"
  - paragraph:
    - text: Banking products and services are provided by Morgan Stanley Private Bank, National Association, Member
    - link "FDIC":
      - /url: https://us.etrade.com/e/t/estation/help?id=1600000001
    - text: .
  - table:
    - rowgroup:
      - row "Banking Products • FDIC Insured • Bank Guarantee":
        - cell "Banking Products • FDIC Insured • Bank Guarantee"
  - paragraph
  - paragraph:
    - img "FDIC Insured - Backed by the full faith and credit of the U.S. Government"
  - paragraph:
    - img "Equal housing lender logo"
    - text: Equal Housing Lender
  - paragraph
  - separator
  - paragraph
  - paragraph
  - paragraph
  - list
  - paragraph
  - paragraph:
    - text: Securities products and investment advisory services offered by Morgan Stanley Smith Barney LLC, Member
    - link "SIPC":
      - /url: http://www.sipc.org/
    - text: and a Registered Investment Adviser. Commodity futures and options on futures products and services offered by E*TRADE Futures LLC, Member
    - link "NFA":
      - /url: http://www.nfa.futures.org/
    - text: Stock plan administration solutions and services offered by E*TRADE Financial Corporate Services, Inc., and are a part of Morgan Stanley at Work. Banking products and services provided by Morgan Stanley Private Bank, National Association, Member
    - link "FDIC":
      - /url: https://us.etrade.com/e/t/estation/help?id=1600000001
    - text: . All entities are separate but affiliated subsidiaries of Morgan Stanley. E*TRADE from Morgan Stanley and Morgan Stanley at Work are registered trademarks of Morgan Stanley.
  - paragraph: E*TRADE is a business of Morgan Stanley.
  - paragraph: System response and account access times may vary due to a variety of factors, including trading volumes, market conditions, system performance, and other factors.
  - paragraph:
    - text: For information on the E*TRADE Customer Protection Guarantee visit the
    - link "Security Center":
      - /url: https://us.etrade.com/security-center
    - text: .
  - paragraph:
    - link "Statement of Financial Condition":
      - /url: https://www.morganstanley.com/about-us-ir/subsidiaries
    - text: "|"
    - link "About Asset Protection":
      - /url: https://us.etrade.com/l/f/asset-protection
    - text: "|"
    - link "Account Agreements and Disclosures":
      - /url: https://us.etrade.com/l/f/agreement-library#tab_0
    - text: "|"
    - link "Quarterly 606 Report":
      - /url: https://us.etrade.com/l/quarterly-order-routing-report
    - text: "|"
    - link "Business Resiliency Plan":
      - /url: https://us.etrade.com/l/f/disclosure-library/business-resiliency-plan
  - paragraph:
    - text: ©2025 E*TRADE from Morgan Stanley. All rights reserved.
    - link "E*TRADE Copyright Policy":
      - /url: https://us.etrade.com/l/copyright-policy
  - paragraph
  - separator
  - list:
    - listitem
- alert
- alert
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | // @ts-ignore
   3 | import fs from 'fs';
   4 | // @ts-ignore
   5 | import path from 'path';
   6 |
   7 | const baseURL = 'https://www.etrade.com';
   8 | // @ts-ignore
   9 | const logFile = path.resolve(__dirname, '../broken-links.log');
  10 |
  11 | const visited = new Set<string>();
  12 | const brokenLinks: { url: string; status: number }[] = [];
  13 |
  14 | test('Crawl E*TRADE with limited depth and log broken links', async ({ page }) => {
  15 |   const toVisit: { url: string; depth: number }[] = [];
  16 |
  17 |   // 🧭 Step 1: Load base page and collect main nav links
  18 |   await page.goto(baseURL);
  19 |   const mainNavLinks = await page.$$eval('nav a[href]', links =>
  20 |     links.map(link => new URL(link.getAttribute('href') || '', location.origin).pathname)
  21 |   );
  22 |
  23 |   const mainNavSet = new Set(mainNavLinks.filter(link => link.startsWith('/')));
  24 |   for (const path of mainNavSet) {
  25 |     toVisit.push({ url: path, depth: 0 });
  26 |   }
  27 |
  28 |   // 🧭 Step 2: Crawl each link up to depth 1
  29 |   while (toVisit.length > 0) {
  30 |     const { url, depth } = toVisit.shift()!;
  31 |     const fullUrl = new URL(url, baseURL).href;
  32 |     if (visited.has(url) || depth > 1) continue;
  33 |
  34 |     console.log(`Visiting: ${fullUrl}`);
  35 |     visited.add(url);
  36 |
  37 |     let response;
  38 |     try {
  39 |       response = await page.goto(fullUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
  40 |     } catch (e) {
  41 |       brokenLinks.push({ url: fullUrl, status: 0 });
  42 |       continue;
  43 |     }
  44 |
  45 |     const status = response?.status() ?? 0;
  46 |     if (status >= 400 || status === 0) {
  47 |       brokenLinks.push({ url: fullUrl, status });
  48 |     }
  49 |
  50 |     // 🧭 Step 3: Discover new links on this page if depth == 0
  51 |     if (depth === 0) {
  52 |       const anchors = await page.$$('a[href]');
  53 |       for (const anchor of anchors) {
> 54 |         const href = await anchor.getAttribute('href');
     |                                   ^ Error: elementHandle.getAttribute: Test timeout of 30000ms exceeded.
  55 |         if (!href || href.startsWith('#') || href.startsWith('javascript')) continue;
  56 |
  57 |         const dest = new URL(href, baseURL);
  58 |         if (dest.hostname === new URL(baseURL).hostname && !visited.has(dest.pathname)) {
  59 |           toVisit.push({ url: dest.pathname, depth: depth + 1 });
  60 |         }
  61 |       }
  62 |     }
  63 |   }
  64 |
  65 |   // 🛠 Step 4: Log broken links to file
  66 |   if (brokenLinks.length > 0) {
  67 |     const content = brokenLinks
  68 |       .map(({ url, status }) => `[${status}] ${url}`)
  69 |       .join('\n');
  70 |     fs.writeFileSync(logFile, content, 'utf-8');
  71 |     console.warn(`⚠️ Broken links logged to ${logFile}`);
  72 |   } else {
  73 |     fs.writeFileSync(logFile, '✅ No broken links found.', 'utf-8');
  74 |     console.log('✅ No broken links found.');
  75 |   }
  76 | });
  77 |
```