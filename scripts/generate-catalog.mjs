// Generates src/data/catalog.json by reading every image already sitting in
// your Cloudinary "vignesh-metals" folder and its subfolders.
//
// Run this LOCALLY (never in the browser / never on your hosting build,
// unless you keep the secret as a private build-time env var):
//
//   node scripts/generate-catalog.mjs
//
// It needs CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET
// in a .env file at the project root (already there). The API key/secret are
// ONLY used here, in Node, to talk to Cloudinary's Admin API — they are never
// bundled into the website's JS, so this is safe.
//
// Whenever you add/remove/rename product photos in Cloudinary, just re-run
// this script and redeploy — the website itself never calls Cloudinary's API
// at runtime, so there is nothing that can 404.

import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// --- tiny .env loader (avoids adding a dependency just for this) ---
function loadEnv() {
  const envPath = path.join(root, '.env');
  if (!existsSync(envPath)) return;
  const lines = readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}
loadEnv();

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;
const ROOT_FOLDER = process.env.CLOUDINARY_ROOT_FOLDER || 'vignesh-metals';

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error(
    '\nMissing CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET.\n' +
    'Add them to a .env file at the project root (see .env.example).\n'
  );
  process.exit(1);
}

const authHeader = 'Basic ' + Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');

/** Fetches every resource whose public_id starts with `${ROOT_FOLDER}/`, paginating as needed. */
async function fetchAllResources() {
  const resources = [];
  let nextCursor;

  do {
    const url = new URL(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image/upload`);
    url.searchParams.set('prefix', `${ROOT_FOLDER}/`);
    url.searchParams.set('type', 'upload');
    url.searchParams.set('max_results', '500');
    if (nextCursor) url.searchParams.set('next_cursor', nextCursor);

    const res = await fetch(url, { headers: { Authorization: authHeader } });
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error(`Cloudinary Admin API error ${res.status}: ${body}`);
    }
    const data = await res.json();
    resources.push(...data.resources);
    nextCursor = data.next_cursor;
  } while (nextCursor);

  return resources;
}

/** Turns a raw Cloudinary folder name into the URL-safe slug categories.ts expects,
 * e.g. "Brass Copper Plates" or "brass-copper plates" -> "brass-copper-plates". */
function slugify(folderName) {
  return folderName
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-');
}

function main() {
  return fetchAllResources().then((resources) => {
    // Group by the folder directly under the root, e.g.
    // "vignesh-metals/brass-diyas/box-kuthu-vilakku-04" -> "brass-diyas"
    // "vignesh-metals/brass-copper plates/image-01" -> "brass-copper-plates"
    const catalog = {};

    for (const r of resources) {
      const parts = r.public_id.split('/');
      // parts[0] === ROOT_FOLDER, parts[1] is the category folder
      const categorySlug = parts.length >= 3 ? slugify(parts[1]) : 'uncategorized';
      if (!catalog[categorySlug]) catalog[categorySlug] = [];
      catalog[categorySlug].push({
        public_id: r.public_id,
        width: r.width,
        height: r.height,
        format: r.format
      });
    }

    // Sort each category's products for a stable, predictable order
    for (const slug of Object.keys(catalog)) {
      catalog[slug].sort((a, b) => a.public_id.localeCompare(b.public_id));
    }

    const outPath = path.join(root, 'src', 'data', 'catalog.json');
    writeFileSync(outPath, JSON.stringify(catalog, null, 2) + '\n');

    console.log(`\n✓ Wrote ${outPath}`);
    console.log('Categories found:');
    for (const [slug, items] of Object.entries(catalog)) {
      console.log(`  - ${slug}: ${items.length} image(s)`);
    }
    console.log('\nRun "npm run dev" (or redeploy) to see the products.\n');
  });
}

main().catch((err) => {
  console.error('\nFailed to generate catalog:', err.message, '\n');
  process.exit(1);
});
