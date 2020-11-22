import { JsonConvert } from "json2typescript";
import { get } from "superagent";
import { useragent } from "./consts";
import { Image } from "./struct/image";

export async function getfeatured(): Promise<Image> {
   const img = await get("https://derpibooru.org/api/v1/json/images/featured").set("User-Agent", useragent);
   const converter = new JsonConvert();
   return converter.deserializeObject(JSON.stringify(img.text), Image);
}
