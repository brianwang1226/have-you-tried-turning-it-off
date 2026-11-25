// Have You Tried Turning It Off? — make.fun one-liner entry.
// One line about the classic tech-support fix: turn it off and on again.
// The joke lands because every support engineer has lived it: the reboot
// fixes the problem, nobody knows why, and the client must never find out.
// The line is written to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I turned it off and on again. It worked. I have no idea why, and I will never admit that to the client.";

const MAX_CHARS = 199;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
