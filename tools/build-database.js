/**
 * SuppleZ Database Builder & Validator
 * Validates data integrity, compiles unified supplements bundle,
 * and generates sitemap.xml for SEO.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const SITEMAP_FILE = path.join(ROOT_DIR, 'sitemap.xml');
const BUNDLE_FILE = path.join(DATA_DIR, 'supplements.bundle.json');

const BASE_URL = 'https://sdragonex.github.io/SuppleZ/';

const CATEGORY_FILES = [
  { key: 'health', file: 'health.json', name: 'Zdraví', priority: '0.8' },
  { key: 'performance', file: 'performance.json', name: 'Výkon', priority: '0.8' },
  { key: 'sleep', file: 'sleep.json', name: 'Spánek', priority: '0.8' },
  { key: 'fatloss', file: 'fatloss.json', name: 'Redukce', priority: '0.8' },
  { key: 'hormones', file: 'hormones.json', name: 'Hormony', priority: '0.8' },
  { key: 'nootropics', file: 'nootropics.json', name: 'Nootropika', priority: '0.8' },
  { key: 'experimental', file: 'experimental.json', name: 'Experimentální & Peptidy', priority: '0.8' },
  { key: 'steroids', file: 'steroids.json', name: 'Steroidy', priority: '0.7' },
  { key: 'pct', file: 'pct.json', name: 'PCT & Ochrana', priority: '0.7' }
];

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function run() {
  console.log('--- [SuppleZ DB Builder & Validator] ---');
  const allItems = [];
  const idMap = new Map();
  const errors = [];
  const warnings = [];

  CATEGORY_FILES.forEach(cat => {
    const filePath = path.join(DATA_DIR, cat.file);
    if (!fs.existsSync(filePath)) {
      errors.push(`Soubor neexistuje: ${cat.file}`);
      return;
    }

    try {
      const raw = fs.readFileSync(filePath, 'utf8');
      if (!raw.trim()) {
        errors.push(`Soubor je prázdný: ${cat.file}`);
        return;
      }
      const items = JSON.parse(raw);
      if (!Array.isArray(items)) {
        errors.push(`Obsah souboru ${cat.file} není pole.`);
        return;
      }

      items.forEach((item, index) => {
        // Validace povinných polí
        if (typeof item.id !== 'number') {
          errors.push(`Položka index ${index} v ${cat.file} nemá číselné ID`);
        } else if (idMap.has(item.id)) {
          errors.push(`Duplicitní ID ${item.id} nalezeno v ${cat.file} (původně v ${idMap.get(item.id)})`);
        } else {
          idMap.set(item.id, cat.file);
        }

        if (!item.name || typeof item.name !== 'string') {
          errors.push(`Položka ID ${item.id || index} v ${cat.file} nemá platný 'name'`);
        }

        if (!item.categoryKey) {
          item.categoryKey = cat.key;
          warnings.push(`Položka ID ${item.id} v ${cat.file} postrádala categoryKey, doplněno '${cat.key}'`);
        }

        if (typeof item.rating !== 'number' || item.rating < 1 || item.rating > 5) {
          warnings.push(`Položka ID ${item.id} má neobvyklý rating (${item.rating})`);
        }

        // Doplnění slugu pro SEO deep-linking
        item.slug = slugify(item.name);
        allItems.push(item);
      });

      console.log(`✓ ${cat.file}: ${items.length} položek ověřeno`);
    } catch (err) {
      errors.push(`Chyba parsování ${cat.file}: ${err.message}`);
    }
  });

  if (errors.length > 0) {
    console.error('\n❌ Nalezeny kritické chyby:');
    errors.forEach(e => console.error('  - ' + e));
    process.exit(1);
  }

  if (warnings.length > 0) {
    console.log(`\n⚠️  Varování (${warnings.length}):`);
    warnings.slice(0, 5).forEach(w => console.log('  - ' + w));
    if (warnings.length > 5) console.log(`  ...a dalších ${warnings.length - 5} varování`);
  }

  // Zápis sjednoceného bundlu
  allItems.sort((a, b) => a.id - b.id);
  fs.writeFileSync(BUNDLE_FILE, JSON.stringify(allItems, null, 2), 'utf8');
  console.log(`\n📦 Sjednocený bundle vytvořen: ${BUNDLE_FILE} (${allItems.length} položek)`);

  // Generování Sitemap.xml
  const today = new Date().toISOString().split('T')[0];
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Root
  sitemapXml += `  <url>\n    <loc>${BASE_URL}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

  // Kategorie
  CATEGORY_FILES.forEach(cat => {
    sitemapXml += `  <url>\n    <loc>${BASE_URL}#category=${cat.key}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${cat.priority}</priority>\n  </url>\n`;
  });

  // Jednotlivé suplementy
  allItems.forEach(item => {
    const itemUrl = `${BASE_URL}#item=${item.id}-${item.slug}`;
    sitemapXml += `  <url>\n    <loc>${itemUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
  });

  sitemapXml += `</urlset>\n`;
  fs.writeFileSync(SITEMAP_FILE, sitemapXml, 'utf8');
  console.log(`🌐 Sitemap.xml vygenerována: ${SITEMAP_FILE} (${allItems.length + CATEGORY_FILES.length + 1} URL)`);

  console.log('\n✨ Hotovo! Databáze je kompletní a konzistentní.\n');
}

run();
