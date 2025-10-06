import type React from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequiered: string;
};

export const NativeForms: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('example')); // watch input value example by passing the name of it

  return (
    <>
      {/* handleSubmit will validate your inputs before invoking "onSubmits" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the register function */}
        <input defaultValue='test' {...register('example')} />
        {/* include validation with requiered or other standard HTML validation rules */}
        <input {...register('exampleRequiered', { required: true })} />
        {/* errors will return when field validation fails */}
        {errors.exampleRequiered && <span> This field is requiered </span>}

        <input type='submit' />
      </form>
    </>
  );
};
