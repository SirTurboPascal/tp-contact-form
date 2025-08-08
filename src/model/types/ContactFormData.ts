import { z } from 'zod';

import { ContactFormSchema } from '@/model/schemas/ContactFormSchema';

export type ContactFormData = z.infer<typeof ContactFormSchema>;
