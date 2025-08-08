import { z } from 'zod';

export const ContactFormSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
});
