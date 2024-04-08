import { z } from "zod";

const ShoeReqValidation = z.object({
  number: z.coerce.number(),
  brand: z.string(),
  model: z.string(),
});

const ShoeReqParams = z.object({
  id: z.string(),
});

type ShoeReqDto = z.infer<typeof ShoeReqValidation>;

export { ShoeReqValidation, ShoeReqParams, ShoeReqDto };
