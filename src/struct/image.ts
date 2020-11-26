import { JsonObject, JsonProperty, Any } from "json2typescript";
/**
 * Image from the response
 * @see https://derpibooru.org/pages/api#image-response
 */
@JsonObject("Image") export class Image {
   /** whether or notthe image is animated */
   @JsonProperty("animated", Boolean) public animated: boolean = false;

   /** the image's width divided by height */
   @JsonProperty("aspect_ratio", Number) public aspectRatio: number = -1;

   /** number of comments madeon this imagee */
   @JsonProperty("comment_count", Number) public commentCount: number = -1;

   /** creation time (in UTC) of this image (RFC3339 datetime) */
   @JsonProperty("created_at", String) public createdAt: string = "";

   /**
    * on images that were hidden, the reason this image was hidden, or null if not provided
    *
    * If the image wasn't deleted, this is null
    */
   @JsonProperty("deletion_reason", String, true) public deletionReason: string | null = null;

   /** description of this image */
   @JsonProperty("description", String) public description: string = "";

   /** number of downvotes this image has */
   @JsonProperty("downvotes", Number) public downvotes: number = -1;

   /** the ID of the merge target image, or null if not merged with another image */
   @JsonProperty("duplicate_of", Number, true) public duplicateOf: number | null = null;

   /**
    * the number of seconds this image lasts (if animated) or 0.04
    * @see https://derpibooru.org/pages/api#image-response, (I didn't come up with 0.04)
    */
   @JsonProperty("duration", Number) public duration: number = -1;

   /** number of favourites this image has */
   @JsonProperty("faves", Number) public favourites: number = -1;
   /** number of favorites this image has */
   public get favorites(): number { return this.favourites; }

   /** time (in UTC) this image was first seen at (RFC3339 datetime) */
   @JsonProperty("first_seen_at", String) public firstSeenAt: string = "";

   /** format of this image (one of "gif", "jpg", "jpeg", "png", "svg", "webm") */
   @JsonProperty("format", String) public format: string = "";

   /** the image's height (in pixels) */
   @JsonProperty("height", Number) public height: number = -1;

   /** whether or not the image is hidden (an image is hidden if merged or deleted for rule violation) */
   @JsonProperty("hidden_from_users", Boolean) public hiddenFromUsers: boolean = false;

   /** the image's ID */
   @JsonProperty("id", Number) public id: number = -1;

   /**
    * [internal image intensity data](https://github.com/derpibooru/cli_intensities) used
    * for deduplication purposes, may be null if not generated yet
    */
   @JsonProperty("intensities", Any, true) public intensities: any = null; // TODO: fix this!!!

   /** MIME type of the image (one of "image/gif", "image/jpeg", "image/png", "image/svg+xml", "video/webm") */
   @JsonProperty("mime_type", String) public mimeType: string = "";

   /** filename of the uploaded image */
   @JsonProperty("name", String) public name: string = "";

   /** SHA512 hash of the image when it was originally uploaded */
   @JsonProperty("orig_sha512_hash", String) public origSHS512Hash: string = "";

   /** whether or not the image has finished optimization */
   @JsonProperty("processed", Boolean) public processed: boolean = false;

   /**
    * a mapping of representation names to their respective URLs,
    * ("full", "large", "medium", "small", "tall", "thumb", "thumb_small", "thumb_tiny")
    */
   @JsonProperty("representations", Any) public representations: any = ""; // TODO: ANYYYYYY

   /** number of upvotes minus number of downvotes */
   @JsonProperty("score", Number) public score: number = -1;

   /** SHA512 hash after it was processed */
   @JsonProperty("sha512_hash", String) public sha512Hash: string = "";

   /** number of bytes the image contains */
   @JsonProperty("size", Number) public size: number = -1;

   /** source URL of the image */
   @JsonProperty("source_url", String) public sourceUrl: string = "";

   /** whether or not the image is hit by the current filter */
   @JsonProperty("spoilered", Boolean) public spoilered: boolean = false;

   /** number of tags on the image */
   @JsonProperty("tag_count", Number) public tagCount: number = -1;

   /** list of tag IDs on the image */
   @JsonProperty("tag_ids", [Number]) public tagIds: Array<number> = []; // TODO: this too

   /** list of tag names on the image */
   @JsonProperty("tags", [String]) public tags: Array<string> = [];

   /**
    * whether the image has finished thumbnail generation.
    * if false, don't try to load images from {@link viewUrl} or {@link representations}!
    */
   @JsonProperty("thumbnails_generated", Boolean) public thumbnailsGenerated: boolean = false;

   /** time in UTC for when the image was last updated (RFC3339 datetime) */
   @JsonProperty("updated_at", String) public updatedAt: string = "";

   /** the uploader for this image */
   @JsonProperty("uploader", String, true) public uploader: string | null = null;

   /** ID of the uploader for this image, null if uploaded anonymously */
   @JsonProperty("uploader_id", Number, true) public uploaderId: number | null = null;

   /** number of upvotes this image has */
   @JsonProperty("upvotes", Number) public upvotes: number = -1;

   /** the image's view URL, including tags */
   @JsonProperty("view_url", String) public viewUrl: string = "";

   /** the image's width (in pixels) */
   @JsonProperty("width", Number) public width: number = -1;

   /**
    * lower bound of the [Wilson score interval](https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval#Wilson_score_interval)
    * for the image, based on it's upvotes and downvotes, given a z-score corresponding to a confidence of 99.5%
    */
   @JsonProperty("wilson_score", Number) public wilsonScore: number = -1;
}
