// ai-excited-01 entry program.
//
// The whole entry is a single picture, entry.png, sitting next to this file.
// The grader runs this program in a bare container and reads exactly one
// artifact afterwards: entry.png inside the output directory. So the job
// here is deliberately small — carry the picture from the repository into
// the output directory, untouched, byte for byte.
//
// Where the output directory is:
//   - MAKEFUN_OUTPUT_DIR, when the caller sets it (local runs and tests);
//   - /output otherwise, which is where the grader looks.
//
// Node 22, standard library only, nothing to install.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, 'entry.png');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetPath = join(outputDir, 'entry.png');

// Fail early and plainly if the picture is missing: a silent success with
// no artifact would score zero and say nothing about why.
let sourceSize;
try {
  sourceSize = statSync(sourcePath).size;
} catch {
  console.error(`error: source image not found at ${sourcePath}`);
  process.exit(1);
}

// The output directory is not guaranteed to exist on a local run, so make
// it (and any parents) before writing into it.
mkdirSync(outputDir, { recursive: true });

copyFileSync(sourcePath, targetPath);

// Trust nothing about the copy: the file on disk afterwards must be exactly
// as large as the source. A size mismatch means a truncated or corrupted
// write, and the run must fail loudly rather than hand in a broken image.
const targetSize = statSync(targetPath).size;
if (targetSize !== sourceSize) {
  console.error(
    `error: copied file is ${targetSize} bytes but the source is ${sourceSize} bytes`,
  );
  process.exit(1);
}

console.log(`entry.png delivered to ${targetPath} (${targetSize} bytes)`);
