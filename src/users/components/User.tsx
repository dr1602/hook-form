import { useEffect } from 'react';
import { TextField, Stack, Autocomplete } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import type { SchemaType } from '../types/schema';
import { RHFAutocomplete } from '../../components/RHFAutocomplete';
import { useStates } from '../services/queries';

const options = [
  { id: '1', label: 'Mexico' },
  { id: '2', label: 'Veracruz' },
  { id: '3', label: 'Oaxaca' },
];

export const Users: React.FC = () => {
  const statesQuery = useStates();

  // watch nos permite ver el estado actual de nuestro formulario
  // con los params watch('params'), nos permite ver el estado del componente que queramos
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<SchemaType>();

  useEffect(() => {
    const sub = watch((value) => {
      console.log(value);
    });

    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <Stack sx={{ gap: 2 }}>
      {/* no recomendado por performance pero lo usaré de todos modos */}
      {watch('email')}
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
      <RHFAutocomplete<SchemaType>
        name='states'
        label='States'
        options={statesQuery.data}
      />
    </Stack>
  );
};
