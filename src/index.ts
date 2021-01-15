// import Cache from "node-cache";
import { ClientOpts, PhilomenaClient } from "./utils";
import { getFeatured } from "./functions";
import bent from "bent";

export * from "./utils";

export function createClient(opts: ClientOpts): PhilomenaClient {
   // if (!opts.cache) return {
   //    // h
   // };

   // const cache = new Cache({
   //    stdTTL: opts.ttl ?? (5 * 60)
   // });

   const jsongetter = bent(`https://${opts.domain}/api/v1/json`, "json", "GET");
   return {
      get domain() {
         return opts.domain;
      },
      getFeatured: getFeatured(jsongetter)
   };
}
