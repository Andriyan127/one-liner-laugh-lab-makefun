// One-Liner Laugh Lab — make.fun competition u-suroso-69-one-liner-laugh-lab-6ccf3aae
// Mission: write ONE funny line — the excuse a robot vacuum gives after eating a sock.
// This program is deterministic: it writes the winning line (chosen from 3+
// candidates scored against the rubric in CANDIDATES.md) to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt). No network, no secrets, no randomness.
// Winning line: "I thought it was a dumpling. In my defense, it was stuffed with foot."
// (69 characters — well inside the 1–200 character gate.)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I thought it was a dumpling. In my defense, it was stuffed with foot.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
