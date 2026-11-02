#!/usr/bin/env node
// Upserts a package entry in content/data/packages.json from the package's package.json.
// Usage: node scripts/update_packages_json.mjs <repo-name> <path-to-package.json> [--docs]
//
// Optional metadata in the package's package.json:
//   "eienjs": { "title": "Permission", "icon": "i-tabler-shield-check", "category": "adonisjs" | "tooling" }
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const [name, pkgPath, ...flags] = process.argv.slice(2);
if (!name || !pkgPath) {
  console.error('Usage: update_packages_json.mjs <repo-name> <package.json> [--docs]');
  process.exit(1);
}

const file = path.resolve(import.meta.dirname, '../content/data/packages.json');
const data = JSON.parse(readFileSync(file, 'utf8'));
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const meta = pkg.eienjs ?? {};

const titleFromName = (value) => value
  .replace(/^adonisjs-/, '')
  .split('-')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

const index = data.packages.findIndex((entry) => entry.name === name);
const previous = index === -1 ? {} : data.packages[index];

const entry = {
  name,
  title: meta.title ?? previous.title ?? titleFromName(name),
  description: pkg.description ?? previous.description ?? '',
  icon: meta.icon ?? previous.icon ?? 'i-tabler-package',
  category: meta.category ?? previous.category ?? (name.startsWith('adonisjs-') ? 'adonisjs' : 'tooling'),
  repo: previous.repo ?? `https://github.com/eienjs/${name}`,
  ...(pkg.version ? { version: pkg.version } : (previous.version ? { version: previous.version } : {})),
  docs: flags.includes('--docs') || previous.docs === true,
};

if (!['adonisjs', 'tooling'].includes(entry.category)) {
  console.error(`Invalid category "${entry.category}"`);
  process.exit(1);
}

if (index === -1) {
  data.packages.push(entry);
} else {
  data.packages[index] = entry;
}

writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
console.log(`Updated ${name}`);
