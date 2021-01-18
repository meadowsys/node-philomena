import { PhilomenaClient, useragent } from "./utils";
import bent from "bent";
import { ImageRaw, imageValidator } from "./validators";

export const getFeatured = (get: bent.RequestFunction<any>) => {
   return async function(this: PhilomenaClient): Promise<ImageRaw> {
      const res = await get("/images/featured", undefined, {
         ...useragent
      });

      const validationres = imageValidator.safeParse(res);
      if (validationres.success) return validationres.data;
      throw validationres.error;
   };
};
