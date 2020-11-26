import { JsonConvert } from "json2typescript";
import { get, Response } from "superagent";
import { useragent } from "./consts";
import { AllQueries, converttoquery } from "./struct/params";


/**
 * json converter used internally
 * @see https://www.npmjs.com/package/json2typescript for more info
 * @internal
 */
export const jsonconverter = new JsonConvert();

/**
 * utility function for performing requests
 * @internal
 */
export async function requestget(baseDomain: string, path: string, requestopts: AllQueries = {}): Promise<Response> {
   return await get(`https://${baseDomain}${path}`).set(useragent).set(converttoquery(requestopts));
}
