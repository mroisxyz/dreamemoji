// hello, wanderer: a quiet canoe ride stands in for the dream vacation.
// One batch of orders claims one output slot; the rest of the file stays empty.

import { mkdirSync, writeFileSync } from 'node:fs';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Anchor a relative output path beside this script, not in the runner's folder.
const here = fileURLToPath(new URL('.', import.meta.url));

const configured = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputDir = isAbsolute(configured) ? configured : join(here, configured);

mkdirSync(outputDir, { recursive: true });

// A single canoe emoji: four UTF-8 bytes, with no trailing newline at all.
const entry = '\u{1F6F6}';

writeFileSync(join(outputDir, 'entry.txt'), entry, 'utf8');

console.log(`${Buffer.byteLength(entry, 'utf8')} bytes`);
