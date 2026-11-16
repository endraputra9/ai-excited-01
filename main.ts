// Skywhale Ride — entry program for the make.fun bounty ai-excited-01,
// "Make the AI judge excited".
//
// This entry is a single image, entry.png, stored right beside this file.
// The program has one responsibility: deliver that image, unchanged, into
// the output directory so it can be picked up and judged.
//
// The output directory comes from the MAKEFUN_OUTPUT_DIR environment
// variable when that variable is set; otherwise it defaults to /output.
// The directory is created recursively when it does not exist yet.
//
// Runtime: Node 22, standard library only, TypeScript run directly with
// no build step and nothing to install.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve the folder this file lives in, so the source image is found
// relative to main.ts itself rather than the caller's working directory.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, 'entry.png');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destinationPath = join(outputDir, 'entry.png');

// Guard against a missing source image. If entry.png is not beside this
// file there is nothing to deliver, so say so plainly on stderr and exit
// non-zero instead of crashing with a raw stack trace or, worse, quietly
// producing no artifact at all.
let sourceSize: number;
try {
  sourceSize = statSync(sourcePath).size;
} catch {
  console.error(`error: source image is missing: ${sourcePath}`);
  process.exit(1);
}

// Make sure the output directory exists before writing into it.
mkdirSync(outputDir, { recursive: true });

// Carry the image across byte for byte.
copyFileSync(sourcePath, destinationPath);

// Verify the copy after the fact: the delivered file must be exactly the
// same size as the source. A short or padded file would mean the write was
// truncated or corrupted, and handing that in silently would be worse than
// failing, so any mismatch is a hard error with a non-zero exit.
const deliveredSize = statSync(destinationPath).size;
if (deliveredSize !== sourceSize) {
  console.error(
    `error: size mismatch — delivered file is ${deliveredSize} bytes, source is ${sourceSize} bytes`,
  );
  process.exit(1);
}

console.log(`entry.png delivered: ${deliveredSize} bytes`);
