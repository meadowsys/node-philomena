// about fourteen million rules against that require for the version lol
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

export type PhilomenaClient = {
   readonly domain: string;
};

/** version of this package being used */
export const version: string = (require("../package.json").version ?? "unknown") as string;

/**
 * user agent header used when making requests
 * @internal
 */
export const useragent = {
   "User-Agent": "node-philomena version " + version
};

/**
 * an enum containing known base domains of Philomena-based imageboards.
 *
 * If a site you want to use this library with doesn't have its domain
 * listed here, but you can confirm it is still Philomena based, you can still
 * use it! You just have to manually specify it.
 */
export enum Domains {
   /** domain for Derpibooru */
   DERPIBOORU = "derpibooru.org",

   /**
    * domain for Trixiebooru
    *
    * NOTE: Trixiebooru is just Derpibooru, and Derpibooru recommends you
    * use the derpibooru address
    */
   TRIXIEBOORU = "trixiebooru.org",

   /** domain for Furbooru */
   FURBOORU = "furbooru.org",

   /** domain for Ponybooru */
   PONYBOORU = "ponybooru.org"
}
