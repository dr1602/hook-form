import './App.css';
import { NativeForms } from './pages/NativeForms';
import { RegisterForm } from './pages/RegisterForm';
import { ValidationForm } from './pages/ValidationForm';
import { Existing } from './pages/Existing';

function App() {
  return (
    <>
      <NativeForms />
      <RegisterForm />
      <ValidationForm />
      <Existing />
    </>
  );
}

export default App;
