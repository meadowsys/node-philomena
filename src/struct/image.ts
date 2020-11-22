import { JsonObject, JsonProperty, Any } from "json2typescript";

@JsonObject("Image") export class Image {
   @JsonProperty("animated", Boolean) public animated: boolean = false;
   @JsonProperty("aspect_ratio", Number) public aspectRatio: number = -1;
   @JsonProperty("comment_count", Number) public commentCount: number = -1;
   @JsonProperty("created_at", String) public createdAt: string = "";
   @JsonProperty("deletion_reason", String, true) public deletionReason: string | null = null;
   @JsonProperty("description", String) public description: string = "";
   @JsonProperty("downvotes", Number) public downvotes: number = -1;
   @JsonProperty("duplicate_of", Number) public duplicateOf: number = -1;
   @JsonProperty("duration", Number) public duration: number = -1;
   @JsonProperty("faves", Number) public faves: number = -1;
   @JsonProperty("first_seen_at", String) public firstSeenAt: string = "";
   @JsonProperty("format", String) public format: string = "";
   @JsonProperty("height", Number) public height: number = -1;
   @JsonProperty("hidden_from_users", Boolean) public hiddenFromUsers: boolean = false;
   @JsonProperty("id", Number) public id: number = -1;
   @JsonProperty("intensities", Any) public intensities: any = null; // TODO: fix this!!!
   @JsonProperty("mime_type", String) public mimeType: string = "";
   @JsonProperty("name", String) public name: string = "";
   @JsonProperty("orig_sha512_hash", String) public origSHS512Hash: string = "";
   @JsonProperty("processed", Boolean) public processed: boolean = false;
   @JsonProperty("representations", Any) public representations: any = ""; // TODO: ANYYYYYY
   @JsonProperty("score", Number) public score: number = -1;
   @JsonProperty("sha512_hash", String) public sha512Hash: string = "";
   @JsonProperty("size", Number) public size: number = -1;
   @JsonProperty("source_url", String) public sourceUrl: string = "";
   @JsonProperty("spoilered", Boolean) public spoilered: boolean = false;
   @JsonProperty("tag_count", Number) public tagCount: number = -1;
   @JsonProperty("tag_ids", [String]) public tagIds: string = ""; // TODO: this too
   @JsonProperty("tags", [String]) public tags: Array<string> = [];
   @JsonProperty("thumbnails_generated", Boolean) public thumbnailsGenerated: boolean = false;
   @JsonProperty("updated_at", String) public updatedAt: string = "";
   @JsonProperty("uploader", String) public uploader: string = "";
   @JsonProperty("uploader_id", Number, true) public uploaderId: number | null = null;
   @JsonProperty("upvotes", Number) public upvotes: number = -1;
   @JsonProperty("view_url", String) public viewUrl: string = "";
   @JsonProperty("width", Number) public width: number = -1;
   @JsonProperty("wilson_score", Number) public wilsonScore: number = -1;
}
