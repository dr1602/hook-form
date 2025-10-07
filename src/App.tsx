import { useState } from 'react';

import { NativeForms } from './pages/NativeForms';
import { RegisterForm } from './pages/RegisterForm';
import { ValidationForm } from './pages/ValidationForm';
import { Existing } from './pages/Existing';
import { Users } from './users/components/User';

export function App() {
  const [show, setShow] = useState<boolean>(false);
  console.log(setShow);
  return (
    <>
      {show && (
        <>
          <NativeForms />
          <RegisterForm />
          <ValidationForm />
          <Existing />
        </>
      )}
      <Users />
    </>
  );
}
