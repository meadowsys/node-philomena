// i'm sticking all the types of the derpibooru results and its validators in this file
import z, { object, number } from "zod";

export const imageValidator = object({
   image: object({
      id: number(),
      score: number().int(),
      upvotes: number().min(0).int(),
      downvotes: number().min(0).int(),
      faves: number().min(0).int()
   })
});

export type ImageRaw = z.infer<typeof imageValidator>;
