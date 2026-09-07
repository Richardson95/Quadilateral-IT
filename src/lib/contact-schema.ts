import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name"),
  email: z.string().trim().email("Enter a valid email address"),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Pick what you need help with"),
  budget: z.string().trim().min(1, "Choose a budget range"),
  message: z
    .string()
    .trim()
    .min(20, "A little more detail helps us reply properly (20+ characters)")
    .max(4000, "Please keep it under 4000 characters"),
  // Honeypot: real people leave this empty, bots fill it in.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Flattens Zod issues into a `{ field: message }` map for the form UI. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !errors[key]) {
      errors[key] = issue.message;
    }
  }
  return errors;
}
