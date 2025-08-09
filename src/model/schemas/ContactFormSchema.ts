import { z } from 'zod';

import { QueryType } from '@/model/types/QueryType';

const queryTypes: QueryType[] = ['general-enquiry', 'support-request'];

export const ContactFormSchema = z.object({
	consent: z.boolean().refine((v) => v === true),

	email: z.email(),
	firstName: z.string(),
	lastName: z.string(),
	message: z.string(),

	queryType: z.enum(queryTypes),
});
