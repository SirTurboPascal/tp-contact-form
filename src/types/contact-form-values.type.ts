import { z } from 'zod';

import { CONTACT_FORM_SCHEMA } from '@/constants/contact-form-schema.constant';

export type ContactFormValues = z.infer<typeof CONTACT_FORM_SCHEMA>;
