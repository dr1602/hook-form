import { TextField, Stack, Autocomplete } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import type { SchemaType } from '../types/schema';
import { RHFAutocomplete } from '../../components/RHFAutocomplete';

export const Users: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SchemaType>();
  const options = [{ id: '1', label: 'Mexico' }];

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
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label='States' />}
      />
      <RHFAutocomplete<SchemaType> name='states' />
    </Stack>
  );
};
