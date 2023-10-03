import React from 'react'
import QuetionInput from './QuetionInput';
import { useState,useEffect } from 'react';

interface  YesnoProps {
 getQuetionData: (data: any) => void;
    quetion:any;
    }
const Yesno: React.FC<YesnoProps> = ({ getQuetionData,quetion }) => {
  const [inputValueQution,setInputValueQution]=useState<string>('');
  useEffect(()=>{
    if(quetion!==""){
      setInputValueQution(quetion.question)
    }
  },[quetion,setInputValueQution])


  useEffect(() => {
    const data = {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
      type: 'Yes/No',
      question: `${inputValueQution}`,
      choices: [],
      maxChoice: 0,
      disqualify: false,
      other: false,
    };
    getQuetionData(data);
  }, [inputValueQution, getQuetionData]);
  
  
  
 return (
   <div className='ParaGraph'>
       <QuetionInput inputValueQution={inputValueQution} setInputValueQution={setInputValueQution}/>
      
   </div>
 )
}

export default Yesno
