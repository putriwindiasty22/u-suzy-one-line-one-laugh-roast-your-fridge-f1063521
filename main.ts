// One Line, One Laugh: Roast Your Fridge
// Writes a single-line fridge roast (<= 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My fridge hums a lullaby every night to an audience of one expired yogurt and a jar of pickles that has outlived two of my relationships.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast + "\n", "utf8");
console.log(`Wrote ${roast.length} characters to /output/entry.txt`);
