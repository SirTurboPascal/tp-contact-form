import { z } from 'zod';

export const ContactFormSchema = z.object({
	email: z.email(),
	firstName: z.string(),
	lastName: z.string(),
});
