import { z } from 'zod';

export const contactFormSchema = z.object({
	email: z.email(),
	familyName: z.string(),
	givenName: z.string(),
});
