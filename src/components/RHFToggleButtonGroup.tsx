import { Controller, useFormContext, type FieldValues } from 'react-hook-form';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import { type PropsSinLabel } from '../types/props';
import { _ZodString } from 'zod';

export const RHFToggleButtonGroup = <T extends FieldValues>({
  name,
  options,
}: PropsSinLabel<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...restField } }) => (
        <ToggleButtonGroup
          {...restField}
          onChange={(_, newValue) => {
            if (newValue.length) {
              onChange(newValue);
            }
          }}
          value={value.length ? value : [options?.[0].id]}
        >
          {options?.map((option) => (
            <ToggleButton value={option.id} key={option.id}>
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    ></Controller>
  );
};
