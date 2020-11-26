import { Domains } from "../consts";
import { Image } from "../struct/image";
import { jsonconverter, requestget } from "../utils";

export async function getfeatured(baseDomain: Domains | string = "derpibooru.org"): Promise<Image> {
   const res = await requestget(baseDomain, "/api/v1/json/images/featured");
   const resobj: any = JSON.parse(res.text);

   if (resobj.image) try {
      return jsonconverter.deserializeObject(resobj.image, Image);
   } catch {}

   // if deserialisation failed or resobj.image doesnt exist, then wewhew throw err
   throw new Error("something went wrong, the result wasn't as expected");
}
