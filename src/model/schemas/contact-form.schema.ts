import { z } from 'zod';

import { queryTypeSchema } from '@/model/schemas/query-type.schema';

export const contactFormSchema = z.object({
	email: z.email('Please enter a valid email address'),
	familyName: z.string(),
	givenName: z.string(),

	queryType: queryTypeSchema,
});
