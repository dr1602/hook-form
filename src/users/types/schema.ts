import { z } from 'zod';
import { patterns } from '../../constants/constants';

export const schema = z.object({
  name: z.string().min(1, { message: 'At least 1 character is required' }),
  email: z
    .email()
    .min(1, { message: 'Invalid email length' })
    .refine((email) => patterns.email.test(email), {
      message: 'Invalid email',
    }),
  states: z.array(z.string()).min(1).max(2),
});

// para poder pasar el schema como typado para el intelisense de useForm
// pero esto no conecta el useForm con zod
export type SchemaType = z.infer<typeof schema>;
