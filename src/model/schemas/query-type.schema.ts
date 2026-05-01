import { z } from 'zod';

export const queryTypeSchema = z.enum(['general-enquiry', 'support-request']);
