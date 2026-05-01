import { z } from 'zod';

import { ContactFormValues } from '@/model/types/contact-form-values';

export type ContactFormErrors = z.core.$ZodErrorTree<ContactFormValues>['properties'];
