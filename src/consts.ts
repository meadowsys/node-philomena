// fourteen million rules against that require for the version lol
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

/** version of this package being used */
export const version: string = (require("../package.json").version ?? "unknown") as string;
/** user agent header used when making requests */
export const useragent = "node-philomena version " + version;
