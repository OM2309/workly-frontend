import { z } from "zod"

export const waitlistSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  role: z.enum(["worker", "venue"], {
    errorMap: () => ({ message: "Please select your role (Worker or Venue)." }),
  }),
  company: z.string().optional(),
  experience: z.string().optional(),
})

export type WaitlistFormValues = z.infer<typeof waitlistSchema>
export type WaitlistStatus = "idle" | "submitting" | "success" | "error"
