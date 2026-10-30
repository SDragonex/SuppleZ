/**
 * SuppleZ Database Enrichment & Normalization Engine
 * Applies updates to all database files, performs validation,
 * ensures 100% field completeness and zero emojis.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');

const { healthAdditions, nootropicsAdditions, pctAdditions } = require('./enrichments-base');
const { hormonesData } = require('./enrichments-hormones');
const { experimentalData } = require('./enrichments-peptides');
const wave2Data = require('./enrichments-wave2');
const wave3Data = require('./enrichments-wave3');

console.log('=== [SuppleZ Database Master Enrichment (Wave 1 + Wave 2 + Wave 3)] ===\n');

// 1. Enrich health.json
const healthPath = path.join(DATA_DIR, 'health.json');
let health = JSON.parse(fs.readFileSync(healthPath, 'utf8'));

// Fix missing interactions in existing health (e.g. Glutamin ID 115)
const glutamine = health.find(x => x.id === 115);
if (glutamine && (!glutamine.interactions || glutamine.interactions.length === 0)) {
  glutamine.interactions = [
    "BPC-157 (silná synergie pro obnovu střevní integrity)",
    "Probiotika (synergická výživa střevního mikrobiomu)"
  ];
}

// Append new health additions if not already present
healthAdditions.forEach(newItem => {
  const existingIdx = health.findIndex(x => x.id === newItem.id || x.name === newItem.name);
  if (existingIdx >= 0) {
    health[existingIdx] = newItem;
  } else {
    health.push(newItem);
  }
});
health.sort((a, b) => a.id - b.id);
fs.writeFileSync(healthPath, JSON.stringify(health, null, 2), 'utf8');
console.log(`✓ health.json updated: ${health.length} items.`);

// 2. Enrich nootropics.json
const nootropicsPath = path.join(DATA_DIR, 'nootropics.json');
let nootropics = JSON.parse(fs.readFileSync(nootropicsPath, 'utf8'));

nootropicsAdditions.forEach(newItem => {
  const existingIdx = nootropics.findIndex(x => x.id === newItem.id || x.name === newItem.name);
  if (existingIdx >= 0) {
    nootropics[existingIdx] = newItem;
  } else {
    nootropics.push(newItem);
  }
});
nootropics.sort((a, b) => a.id - b.id);
fs.writeFileSync(nootropicsPath, JSON.stringify(nootropics, null, 2), 'utf8');
console.log(`✓ nootropics.json updated: ${nootropics.length} items.`);

// 3. Enrich pct.json
const pctPath = path.join(DATA_DIR, 'pct.json');
let pct = JSON.parse(fs.readFileSync(pctPath, 'utf8'));

pctAdditions.forEach(newItem => {
  const existingIdx = pct.findIndex(x => x.id === newItem.id || x.name === newItem.name);
  if (existingIdx >= 0) {
    pct[existingIdx] = newItem;
  } else {
    pct.push(newItem);
  }
});
pct.sort((a, b) => a.id - b.id);
fs.writeFileSync(pctPath, JSON.stringify(pct, null, 2), 'utf8');
console.log(`✓ pct.json updated: ${pct.length} items.`);

// 4. Overwrite hormones.json with clean, deduplicated, comprehensive dataset
const hormonesPath = path.join(DATA_DIR, 'hormones.json');
hormonesData.sort((a, b) => a.id - b.id);
fs.writeFileSync(hormonesPath, JSON.stringify(hormonesData, null, 2), 'utf8');
console.log(`✓ hormones.json updated: ${hormonesData.length} items (clean & deduplicated).`);

// 5. Overwrite experimental.json with clean, comprehensive dataset
const experimentalPath = path.join(DATA_DIR, 'experimental.json');
experimentalData.sort((a, b) => a.id - b.id);
fs.writeFileSync(experimentalPath, JSON.stringify(experimentalData, null, 2), 'utf8');
console.log(`✓ experimental.json updated: ${experimentalData.length} items (clean & deduplicated).`);

// 6. Enrich performance.json empty interactions
const perfPath = path.join(DATA_DIR, 'performance.json');
let perf = JSON.parse(fs.readFileSync(perfPath, 'utf8'));
const perfFixes = {
  211: ["Kreatin (synergická stimulace proteosyntézy po tréninku)", "Rychlé sacharidy (zvýšení vstřebávání aminokyselin inzulínem)"], // Whey
  214: ["Kreatin (Betain slouží jako donor methylových skupin pro endogenní syntézu kreatinu)", "Cholin"], // TMG
  216: ["Beta-Alanin (duální pufracní kapacita: bikarbonát extracelulárně + karnosin intracelulárně)", "Kofein"], // Jedlá soda
  217: ["Elektrolyty (optimální osmolalita iontového nápoje)", "BCAA / EAA (intratréninkový anabolický transport)"], // HBCD
  218: ["Syrovátkový protein (doplnění kompletního spektra esenciálních aminokyselin)", "Citrulin"] // BCAA
};
perf.forEach(item => {
  if (perfFixes[item.id] && (!item.interactions || item.interactions.length === 0)) {
    item.interactions = perfFixes[item.id];
  }
});
fs.writeFileSync(perfPath, JSON.stringify(perf, null, 2), 'utf8');
console.log(`✓ performance.json updated: ${perf.length} items (interactions filled).`);

// 7. Enrich fatloss.json item 413
const fatlossPath = path.join(DATA_DIR, 'fatloss.json');
let fatloss = JSON.parse(fs.readFileSync(fatlossPath, 'utf8'));
const cardarineFatloss = fatloss.find(x => x.id === 413);
if (cardarineFatloss && (!cardarineFatloss.interactions || cardarineFatloss.interactions.length === 0)) {
  cardarineFatloss.interactions = [
    "Stenabolic (SR-9009 - synergická podpora mitochondriální vytrvalosti)",
    "L-Karnitin (podpora transportu mastných kyselin do mitochondrií)"
  ];
}
fs.writeFileSync(fatlossPath, JSON.stringify(fatloss, null, 2), 'utf8');
console.log(`✓ fatloss.json updated: ${fatloss.length} items.`);

// === 8. APPLY WAVE 2 ENRICHMENTS (71 new substances) ===
console.log('\n--- Merging Wave 2 Enrichments (71 substances) ---');
for (const [catKey, items] of Object.entries(wave2Data)) {
  const filePath = path.join(DATA_DIR, `${catKey}.json`);
  let catData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  items.forEach(newItem => {
    const existingIdx = catData.findIndex(x => x.id === newItem.id || x.name === newItem.name);
    if (existingIdx >= 0) {
      catData[existingIdx] = newItem;
    } else {
      catData.push(newItem);
    }
  });

  catData.sort((a, b) => a.id - b.id);
  fs.writeFileSync(filePath, JSON.stringify(catData, null, 2), 'utf8');
  console.log(`✓ ${catKey}.json expanded: now ${catData.length} items.`);
}

// === 8b. APPLY WAVE 3 ENRICHMENTS (51 new substances) ===
console.log('\n--- Merging Wave 3 Enrichments (51 substances) ---');
for (const [catKey, items] of Object.entries(wave3Data)) {
  const filePath = path.join(DATA_DIR, `${catKey}.json`);
  let catData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  items.forEach(newItem => {
    const existingIdx = catData.findIndex(x => x.id === newItem.id || x.name === newItem.name);
    if (existingIdx >= 0) {
      catData[existingIdx] = newItem;
    } else {
      catData.push(newItem);
    }
  });

  catData.sort((a, b) => a.id - b.id);
  fs.writeFileSync(filePath, JSON.stringify(catData, null, 2), 'utf8');
  console.log(`✓ ${catKey}.json expanded: now ${catData.length} items.`);
}

// 9. Overall Validation
console.log('\n--- Running Complete Integrity & Quality Audit ---');
const ALL_FILES = [
  'health.json',
  'performance.json',
  'sleep.json',
  'fatloss.json',
  'hormones.json',
  'nootropics.json',
  'experimental.json',
  'steroids.json',
  'pct.json'
];

let totalSubstances = 0;
const globalIdSet = new Set();
const issues = [];
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/gu;

ALL_FILES.forEach(filename => {
  const filePath = path.join(DATA_DIR, filename);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  totalSubstances += data.length;

  data.forEach(item => {
    // Check ID collisions
    if (globalIdSet.has(item.id)) {
      issues.push(`Duplicate ID ${item.id} found in ${filename}`);
    } else {
      globalIdSet.add(item.id);
    }

    // Required fields check
    const requiredProps = ['id', 'name', 'categoryKey', 'tags', 'rating', 'colorType', 'shortDesc', 'description', 'effects', 'dosage', 'warning', 'mechanism', 'halfLife', 'interactions', 'naturalSources', 'bannedStatus'];
    requiredProps.forEach(prop => {
      if (item[prop] === undefined || item[prop] === null || item[prop] === '') {
        issues.push(`Item ID ${item.id} (${item.name}) in ${filename} missing '${prop}'`);
      }
    });

    // Check non-empty arrays
    if (!Array.isArray(item.interactions) || item.interactions.length === 0) {
      issues.push(`Item ID ${item.id} (${item.name}) in ${filename} has empty interactions`);
    }
    if (!Array.isArray(item.effects) || item.effects.length === 0) {
      issues.push(`Item ID ${item.id} (${item.name}) in ${filename} has empty effects`);
    }

    // Check dosage object
    if (!item.dosage || !item.dosage.short || !item.dosage.long) {
      issues.push(`Item ID ${item.id} (${item.name}) in ${filename} has incomplete dosage object`);
    }

    // Zero Emojis Check
    const rawJson = JSON.stringify(item);
    const emojiMatch = rawJson.match(emojiRegex);
    if (emojiMatch) {
      issues.push(`Item ID ${item.id} (${item.name}) in ${filename} contains emoji: ${emojiMatch.join(', ')}`);
    }
  });
});

if (issues.length > 0) {
  console.error(`\nFound ${issues.length} issues:`);
  issues.slice(0, 10).forEach(i => console.error('  - ' + i));
  if (issues.length > 10) console.error(`  ... and ${issues.length - 10} more`);
  process.exit(1);
} else {
  console.log(`\nALL CHECKS PASSED PERFECTLY!`);
  console.log(`Total active substances across all 9 categories: ${totalSubstances}`);
  console.log(`Zero duplicate IDs, 100% complete scientific fields, ZERO emojis!`);
}

// 9. Rebuild bundles & sitemap
console.log('\n--- Rebuilding Bundle & Sitemap ---');
require('./build-database.js');
