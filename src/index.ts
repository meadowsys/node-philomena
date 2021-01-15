// import Cache from "node-cache";
import { PhilomenaClient } from "./types";

export * from "./types";
// how the heck do i format this to make it look good?
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

export function createClient(opts: ClientOpts): PhilomenaClient {
   // if (!opts.cache) return {
   //    // h
   // };

   // const cache = new Cache({
   //    stdTTL: opts.ttl ?? (5 * 60)
   // });

   return {
      get domain() {
         return opts.domain;
      }
   };
}
