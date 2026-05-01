import { z } from 'zod';

import { ErrorMessages } from '@/model/enums/error-messages.enum';
import { queryTypeSchema } from '@/model/schemas/query-type.schema';

export const contactFormSchema = z.object({
	consent: z.boolean().refine((value) => value === true, {
		error: ErrorMessages.NO_CONSENT,
	}),

	email: z.email(ErrorMessages.INVALID_EMAIL_ADDRESS).min(1, ErrorMessages.REQUIRED),
	familyName: z.string().min(1, ErrorMessages.REQUIRED),
	givenName: z.string().min(1, ErrorMessages.REQUIRED),
	message: z.string().min(1, ErrorMessages.REQUIRED),

	queryType: queryTypeSchema,
});
