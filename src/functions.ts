import { PhilomenaClient, useragent } from "./utils";
import bent from "bent";

export const getFeatured = (get: bent.RequestFunction<any>) => {
   return async function(this: PhilomenaClient): Promise<any> {
      return await get("/images/featured", undefined, {
         "User-Agent": useragent
      });
   };
};
