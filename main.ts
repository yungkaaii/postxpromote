// postxpromote — entry for post-x-promote-make-your-own-bounty-01.
//
// The entry is a single X post. Its URL lives in POST.json at the repo root.
// This program copies that file into the harness output directory so the
// grader can read the post URL. It does nothing else: no network, no clock,
// no writes outside the output directory.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? process.cwd();
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(repoRoot, "POST.json");
const target = join(outputDir, "POST.json");

if (!existsSync(source)) {
  throw new Error(`POST.json not found at ${source}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

// Confirm the copy landed where the grader expects it; a silent missing
// output would otherwise look like an empty submission.
if (!existsSync(target)) {
  throw new Error(`failed to copy POST.json to ${target}`);
}
