#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import boxen from "boxen";

const description = boxen(
  chalk.green("Translates a sentence to a specific language"),
  { padding: 1, borderColor: "green", dimBorder: false }
);

const argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 -l [language] -s [sentence]")
  .epilog(description) // puts your box at the bottom
  .option("l", {
    alias: "language",
    describe: "Translate to language",
    type: "string",
    demandOption: true,
  })
  .option("s", {
    alias: "sentence",
    describe: "Sentence to be translated",
    type: "string",
    demandOption: true,
  })
  .help(true)
  .parseSync();

console.log(argv.language, argv.sentence);
