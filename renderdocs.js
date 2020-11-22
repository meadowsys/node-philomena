"use strict";

if (!process.env.FOLDERNAME) {
   if (process.env.CI) {
      console.error("no folder name provided (and this is CI), aborting");
      process.exit(1);
   }
   process.env.FOLDERNAME = "";
}

const { readFileSync: readfile } = require("fs");
const { resolve: resolvepath } = require("path");
const { parse: json5parse } = require("json5");
const { CliApplication: typedoccliapp } = require("typedoc");
const app = new typedoccliapp();
const input = ["./src/index.ts"];
const out = `docs/${process.env.FOLDERNAME}`;
const tsconfig = json5parse(readfile(resolvepath(__dirname, "tsconfig.json")));
const isreleasebuild = process.env.CI ? process.env.GITHUB_REF.includes("/tag") : false;

const opts = {
   ...tsconfig.compilerOptions,
   inputFiles: input,
   out: out,
   mode: "file",
   // excludeNotExported: true,
   excludePrivate: true,
   ignoreCompilerErrors: true,
   includeVersion: isreleasebuild,
   listInvalidSymbolLinks: true

   // ,readme: "none"
};

// shush typedoc lol
delete opts.sourceMap;
delete opts.declaration;

app.bootstrap(opts);
