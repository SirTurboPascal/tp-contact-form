import { z } from 'zod';

export const CONTACT_FORM_SCHEMA = z.object({
	familyName: z.string(),
	givenName: z.string(),
});
