// i'm sticking all the types of the derpibooru results and its validators in this file
import z, { object, number } from "zod";

export const imageValidator = object({
   id: number(),
   score: number().int(),
   upvotes: number().min(0).int(),
   downvotes: number().min(0).int(),
   favorites: number().min(0).int()
});

export type Image = z.infer<typeof imageValidator>;
