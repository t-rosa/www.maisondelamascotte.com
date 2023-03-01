import { z } from "zod";

export const contactSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
})
