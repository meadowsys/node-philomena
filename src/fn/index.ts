import { get } from "superagent";
import { useragent } from "../consts";
import { Image } from "../struct/image";
import { jsonconverter } from "../utils";

export async function getfeatured(baseDomain: string = "derpibooru.org"): Promise<Image> {
   const img = await get(`"https://${baseDomain}/api/v1/json/images/featured"`).set(useragent);
   return jsonconverter.deserializeObject(JSON.stringify(img.text), Image);
}
