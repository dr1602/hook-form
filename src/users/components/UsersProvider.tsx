import { FormProvider } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { schema, type SchemaType } from '../types/schema';
import { Users } from './User';

export const UsersProvider = () => {
  const methods = useForm<SchemaType>({
    mode: 'all',
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <Users />
    </FormProvider>
  );
};
