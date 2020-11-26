/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/** @see https://derpibooru.org/pages/api for more info on these params */
export interface FilterID {
   /**
    * Assuming the user can access the filter ID given by the parameter,
    * overrides the current filter for this request. This is primarily useful for
    * unauthenticated API access.
    * @see https://derpibooru.org/pages/api for more info on these params
    */
   filterId: string;
}

/** @see https://derpibooru.org/pages/api for more info on these params */
export interface Key {
   /**
    * Optional authentication token If ommitted, no user is authenticated.
    *
    * You can find your token in your [account settings](https://derpibooru.org/registration/edit).
    *
    * @see https://derpibooru.org/pages/api for more info on these params
    */
   key: string;
}

/** @see https://derpibooru.org/pages/api for more info on these params */
export interface Page {
   /** if the response is paginated, controls the page number. Enpty value is first page */
   page: number;
}

/** @see https://derpibooru.org/pages/api for more info on these params */
export interface PerPage {
   /** controls number of results per page
    * @see https://derpibooru.org/pages/api for more info on these params
    */
   perPage: number;
}

/** @see https://derpibooru.org/pages/api for more info on these params */
export interface SearchQuery {
   /** search query, if request is a search request.
    * @see https://derpibooru.org/pages/api for more info on these params
    */
   query: string;
}

/**
 * type that accepts all queries or no query
 * @internal
 */
export type AllQueries = Partial<FilterID & Key & Page & PerPage & SearchQuery>;

/**
 * converts an object from a library-specific query format into an object
 * with queries that derpibooru understands
 */
export function converttoquery(queries: AllQueries): any {
   const rv: any = {};

   if (queries.filterId) rv.filter_id = queries.filterId;
   if (queries.key) rv.key = queries.key;
   if (queries.page) rv.page = queries.page;
   if (queries.perPage) rv.per_page = queries.perPage;
   if (queries.query) rv.q = queries.query;

   return rv;
}
