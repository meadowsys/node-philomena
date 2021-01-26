// i'm sticking all the types of the derpibooru results and its validators in this file
import z, { object, number } from "zod";

/**
 * validates an image response from the server
 */
export const imageValidator = object({
   image: object({
      id: number(),
      score: number().int(),
      upvotes: number().min(0).int(),
      downvotes: number().min(0).int(),
      faves: number().min(0).int()
   })
}).transform(original => ({
   id: original.image.id,
   score: original.image.score,
   upvotes: original.image.upvotes,
   downvotes: original.image.downvotes,
   favorites: original.image.faves
}));

/**
 * type for a raw image response from derpibooru
 */
export type ImageRaw = z.infer<typeof imageValidator>;
