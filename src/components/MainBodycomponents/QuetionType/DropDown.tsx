// utils.js


// DropDown.tsx
import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import QuetionInput from './QuetionInput';


interface DropDownProps {
  getQuetionData: (data: any) => void;
  quetion: any;
}

const DropDown: React.FC<DropDownProps> = ({ getQuetionData, quetion }) => {
  const generateQuestionId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};
  const [options, setOptions] = useState<string[]>(['']);
  const [inputValueQution, setInputValueQution] = useState<string>('');
  const [questionId, setQuestionId] = useState<string>(generateQuestionId());

  useEffect(() => {
    if (quetion !== "") {
      setInputValueQution(quetion.question);
      setOptions(quetion.choices);
      setQuestionId(quetion.id || generateQuestionId());
    }
  }, [quetion]);

  useEffect(() => {
    const data = {
      id: questionId,
      type: 'Dropdown',
      question: `${inputValueQution}`,
      choices: options,
      maxChoice: 2,
      disqualify: false,
      other: false,
    };
    getQuetionData(data);
  }, [inputValueQution, options]);

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const removeOption = (index: number) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  return (
    <div>
      <QuetionInput inputValueQution={inputValueQution} setInputValueQution={setInputValueQution} />
      <div>
        {options.map((option, index) => (
          <div className='flex' key={index}>
            <Input
              style={{ height: '40px', flex: 1 }}
              placeholder='Type here'
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            {options.length > 1 && (
              <Button
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>}
                onClick={() => removeOption(index)}
              />
            )}
          </div>
        ))}
        <Button type='dashed' onClick={addOption}>
          Add Option
        </Button>
      </div>
    </div>
  );
};

export default DropDown;
