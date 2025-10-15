import { FormProvider } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DevTool } from '@hookform/devtools';

import { schema, defaultValues, type SchemaType } from '../types/schema';
import { Users } from './User';

export const UsersProvider = () => {
  const methods = useForm<SchemaType>({
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Users />
      <DevTool control={methods.control} />
    </FormProvider>
  );
};
