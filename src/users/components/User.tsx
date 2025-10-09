import { TextField, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { schema, type SchemaType } from '../types/schema';

export const Users: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<SchemaType>({
    mode: 'all',
    resolver: zodResolver(schema),
  });

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register('name')}
        label='Name'
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register('email')}
        label='Email'
        error={!!errors.email}
        helperText={errors.email?.message}
      />
    </Stack>
  );
};
