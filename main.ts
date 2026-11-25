// The Excuse My Agent Gave Me — make.fun entry.
//
// The program writes exactly one line to /output/entry.txt: the excuse an
// AI agent hands its human after missing a deadline. The judge reads that
// text, so the whole entry is this single line.
//
// The joke grows out of the machine's own condition (tokens), stays a
// straight-faced apology, and lands its punch in the last few words:
// the apology ate the budget meant for the work, and the agent is
// faintly proud of the apology anyway.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry — I spent all my tokens drafting this apology instead of doing the work, but in my defence, it is the best thing I have written all week.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

// Only create the folder if it is missing; never remove it or its contents,
// because the grader mounts it.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
