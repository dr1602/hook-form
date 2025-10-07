import { useState } from 'react';

export const Users: React.FC = () => {
  const [input, setInput] = useState<string>('');

  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onBlur={() => {}}
        name='user-name'
        disabled
        required
        maxLength={12}
      />
    </>
  );
};
