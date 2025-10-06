import React from 'react';
import { useForm } from 'react-hook-form';
import type { UseFormRegister, Path, SubmitHandler } from 'react-hook-form';

interface IFormValues {
  'First Name': string;
  Age: number;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required, maxLength: 9 })} />
  </>
);

// You can use React.forwardRef to pass the ref too
const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label> {label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value='20'>20</option>
      <option value='30'>30</option>
    </select>
  </>
));

export const Existing: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div style={{ marginTop: 21 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label='First Name' register={register} required />
        <Select label='Age' {...register('Age')} />
        <input type='submit' />
      </form>
    </div>
  );
};
