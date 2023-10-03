import React, { useState, useEffect } from 'react';

import { Input } from 'antd';
import AttributeComponent from './attributecomponent';
import AddQuetion from './AddQuetion';

import UpdateQuetionComponent from './UpdateQuetionComponent';


interface PersonalInformationProps {
  ApplicationData: any;
  setApplicationData:React.Dispatch<React.SetStateAction<undefined>>
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ ApplicationData,setApplicationData }) => {
  const [allQuestions, setAllQuetions] = useState<any[]>([]);
  const [updateQuetionName, setUpdatequetionName] = useState<string | null>(null);

  useEffect(() => {
    console.log(ApplicationData,"ApplicationData")
    setAllQuetions(ApplicationData?.data?.attributes?.personalInformation?.personalQuestions || []);
    

  }, [ApplicationData?.data?.attributes?.personalInformation?.personalQuestions]);

  const UpdateQuetion = (question: any) => {
    setUpdatequetionName(question.question);
  }
  console.log(allQuestions)
  return (
    <div className='PersonalInfo'>
       <div className='attributes'>
        <div className='attribute-head'><h3>First name</h3></div>
        <Input className="custom-input" />
      </div>
      <div className='attributes'>
        <div className='attribute-head'><h3>Last name</h3></div>
        <Input className="custom-input" />
      </div>
      <div className='attributes'>
        <div className='attribute-head'><h3>Email</h3></div>
        <Input className="custom-input" />
      </div>
      <div className='attributes'>
        <div className='attribute-head'>
          <h3 className='flex gap4'>Phone <h5>(Without dial code)</h5></h3>
          <AttributeComponent />
        </div>
        <Input className="custom-input" />
      </div>
      <div className='attributes'>
        <div className='attribute-head'>
          <h3>Nationality</h3>
          <AttributeComponent />
        </div>
        <Input className="custom-input" />
      </div>
      <div className='attributes'>
        <div className='attribute-head'>
          <h3>Current Residence </h3>
          <AttributeComponent />
        </div>
        <Input className="custom-input"  />
      </div>
      <div className='attributes'>
        <div className='attribute-head'>
          <h3>ID Number</h3>
          <AttributeComponent />
        </div>
        <Input className="custom-input"  />
      </div>
      <div className='attributes'>
        <div className='attribute-head'>
          <h3>Date of Birth </h3>
          <AttributeComponent />
        </div>
        <Input className="custom-input"  />
      </div>
      <div className='attributes'>
        <div className='attribute-head'>
          <h3>Gender</h3>
          <AttributeComponent />
        </div>
        <Input className="custom-input" />
      </div>
      {allQuestions.length > 0 &&
  allQuestions.map((question: any, index: number) => (
    <div className='attributes AddedQuetion-Container' key={index}>
      <h5>{question.type}</h5>
      <div className='AddedQuetion'>
        <h3>{question.question}</h3>
        <svg
          onClick={() => UpdateQuetion(question)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 small-svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </div>
      {updateQuetionName === question.question && (
              <UpdateQuetionComponent
                questionType={question.type}
                quetion={question}
                from="PersonalInformation"
                setApplicationData={setApplicationData} // Pass the setUpdatedApplicationData function
                ApplicationData={ApplicationData} // Pass the updated ApplicationData
                setUpdatequetionName={setUpdatequetionName}
              />  
            )}

      <Input className="custom-input" />
    </div>
  ))}



      <div>
        <AddQuetion SectionName="Personal Information"/>
      </div>
    </div>
  );
};


export default PersonalInformation;
