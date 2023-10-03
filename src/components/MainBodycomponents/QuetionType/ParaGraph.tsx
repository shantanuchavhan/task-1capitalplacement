import React from 'react'
import QuetionInput from './QuetionInput'
import { useState,useEffect } from 'react';
interface ParaGraphProps {
    getQuetionData: (data: any) => void;
    quetion:any;
  }

const ParaGraph: React.FC<ParaGraphProps> = ({ getQuetionData, quetion }) => {
  const generateQuestionId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  const [inputValueQution,setInputValueQution]=useState<string>('');
  const [questionId, setQuestionId] = useState<string>(generateQuestionId());
  useEffect(()=>{
    if(quetion!==""){
      setInputValueQution(quetion.question)
    }
  },[quetion])
   useEffect(()=>{
    const data = {
      id: questionId,
      type: 'Paragraph',
      question: `${inputValueQution}`,
      choices: [],
      maxChoice: 0,
      disqualify: false,
      other: false,
    };

    getQuetionData(data);
   },[inputValueQution])
  return (
    <div className='ParaGraph'>
        <QuetionInput inputValueQution={inputValueQution} setInputValueQution={setInputValueQution}/>
    </div>
  )
}

export default ParaGraph
