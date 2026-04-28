import { z } from 'zod';

import { contactFormSchema } from '@/model/schemas/contact-form.schema';

export type ContactFormValues = z.infer<typeof contactFormSchema>;
