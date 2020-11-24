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
const outdir = "docs";
const out = `${outdir}/${process.env.FOLDERNAME}`;
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
   listInvalidSymbolLinks: true,
   stripInternal: true
   // ,readme: "none"
};

// shush typedoc lol
delete opts.sourceMap;
delete opts.declaration;

app.bootstrap(opts);

if (isreleasebuild) {
   const fse = require("fs-extra");
   // also put it in folder "latest"
   fse.copySync(`${outdir}/${process.env.FOLDERNAME}`, `${outdir}/latest`, {
      errorOnExist: true
   });
}
