import React from 'react';
import { Input } from 'antd';

interface QuetionInputProps {
  inputValueQution: string;
  setInputValueQution: (value: string) => void;
}

const QuetionInput: React.FC<QuetionInputProps> = ({ inputValueQution, setInputValueQution }) => {
  // Function to handle input value changes
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueQution(e.target.value);
  };

  return (
    <div style={{marginBottom:"16px"}}>
        <h4 style={{textAlign:"start"}}>Quetion</h4>
      <Input
        style={{ height: '40px', flex: 1 }}
        placeholder='Type here'
        value={inputValueQution}
        onChange={handleOptionChange}
      />
    </div>
  );
};

export default QuetionInput;
