/**
 * Parameters for when making requests
 * @see https://derpibooru.org/pages/api for more info on these params
 * @packageDocumentation
 */


export interface FilterID {
   /**
    * Assuming the user can access the filter ID given by the parameter,
    * overrides the current filter for this request. This is primarily useful for
    * unauthenticated API access.
    * @see https://derpibooru.org/pages/api for more info on these params
    */
   filter_id: string;
}

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

export interface Page {
   /** if the response is paginated, controls the page number. Enpty value is first page */
   page: number;
}

export interface PerPage {
   /** controls number of results per page */
   per_page: number;
}

export interface SearchQuery {
   /** search query, if request is a search request. */
   q: string;
}
