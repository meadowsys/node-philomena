// random utils and joi schemas for things
// and i put the types and the enums and things here too, because it kind
// of makes sense here

// about fourteen million rules against that require for the version lol
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

/** version of this package being used */
export const version: string = (require("../package.json").version ?? "unknown") as string;

/* eslint-enable @typescript-eslint/no-var-requires */
/* eslint-enable @typescript-eslint/no-require-imports */

/**
 * user agent header used when making requests
 * @internal
 */
export const useragent = "node-philomena version " + version;

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

// how the heck do i format this to make it look good lol?
/** options for when creating a client */
export type ClientOpts = {
   /** token to use (not yet used) */
   token?: string;
   /** domain to use */
   domain: string;
}
& ({
   cache?: true;
   ttl?: number;
} | {
   cache?: false;
});

export type PhilomenaClient = {
   readonly domain: string;
   getFeatured(): Promise<any>;
};
