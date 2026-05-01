import { z } from 'zod';

import { queryTypeSchema } from '@/model/schemas/query-type.schema';

export type QueryTypeValues = z.infer<typeof queryTypeSchema>;
