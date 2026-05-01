import { z } from 'zod';

export const contactFormSchema = z.object({
	email: z.email('Please enter a valid email address'),
	familyName: z.string(),
	givenName: z.string(),
});
