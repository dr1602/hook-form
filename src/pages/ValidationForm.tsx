import type React from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export const ValidationForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div style={{ marginTop: 21 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input {...register('firstName', { required: true, maxLength: 9 })} />
        <label>Last Name</label>
        <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
        <label>Age</label>
        <input type='number' {...register('age', { min: 18, max: 99 })} />
        <input type='submit' />
      </form>
    </div>
  );
};
