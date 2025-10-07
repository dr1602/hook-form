import { useForm } from 'react-hook-form';

export const Users: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string }>({ mode: 'all' });

  const onSubmit = () => {
    console.log('submitted');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: { value: true, message: 'Email required' },
          maxLength: { value: 10, message: 'Maximum 10 characters' },
        })}
        placeholder='Email'
      />

      <p>{errors.email?.message}</p>
    </form>
  );
};
