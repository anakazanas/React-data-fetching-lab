// src/components/Form.tsx

import { useState } from 'react';

type FormProps = {
  handleSubmit: (searchTerm: string) => void;
};

function Form({ handleSubmit }: FormProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(searchTerm);
    setSearchTerm('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;