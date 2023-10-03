import React, { useState } from 'react';
import { Button } from 'antd';
import DropDown from './QuetionType/DropDown';
import ParaGraph from './QuetionType/ParaGraph';
import MultipleChoice from './QuetionType/MultipleChoice';
import Yesno from './QuetionType/Yesno';

interface UpdateQuetionComponentProps {
  questionType: string;
  quetion: any;
  from: string;
  setApplicationData: any;
  ApplicationData: any;
  setUpdatequetionName:any;
}


const UpdateQuetionComponent: React.FC<UpdateQuetionComponentProps> = ({
  questionType,
  quetion,
  setUpdatequetionName,
  from,
  setApplicationData,
  ApplicationData,
 
}) => {
  const [QuetionData, setQuetionData] = useState<any | null>(quetion);
  
  function updateQuestionText(questionToUpdate: any) {
    if (questionToUpdate.question === quetion.question) {
      return { ...questionToUpdate, question: QuetionData.question };
    }
    return questionToUpdate;
  }

  const handleUpdateData = () => {
    if (from === 'Profile') {
      const updatedProfileQuestions = ApplicationData.data.attributes.profile.profileQuestions.map(
        (Quetion:any) => updateQuestionText(Quetion)
      );

      setApplicationData({
        ...ApplicationData,
        data: {
          ...ApplicationData.data,
          attributes: {
            ...ApplicationData.data.attributes,
            profile: {
              ...ApplicationData.data.attributes.profile,
              profileQuestions: updatedProfileQuestions,
            },
          },
        },
      });
    } else if (from === 'PersonalInformation') {
      const updatedPersonalQuestions = ApplicationData.data.attributes.personalInformation.personalQuestions.map(
        (Quetion:any) => updateQuestionText(Quetion)
      );

      setApplicationData({
        ...ApplicationData,
        data: {
          ...ApplicationData.data,
          attributes: {
            ...ApplicationData.data.attributes,
            personalInformation: {
              ...ApplicationData.data.attributes.personalInformation,
              personalQuestions: updatedPersonalQuestions,
            },
          },
        },
      });
    }
    setUpdatequetionName("")

    // Rest of your update logic...

    // Fetch data update here if needed...
  };

  const handleDelete = () => {
    // Remove the question from your state based on its ID
  
    if (from === 'PersonalInformation') {
      const updatedQuestions = ApplicationData.data.attributes.personalInformation.personalQuestions.filter(
        (question:any) => question.id === QuetionData.id
      );
      
      setApplicationData({
        ...ApplicationData,
        data: {
          ...ApplicationData.data,
          attributes: {
            ...ApplicationData.data.attributes,
            personalInformation: {
              ...ApplicationData.data.attributes.personalInformation,
              personalQuestions: updatedQuestions,
            },
          },
        },
      });
  
      
    } else if (from === 'Profile') {
      console.log(QuetionData.id,"QuetionData.id")
      const updatedQuestions = ApplicationData.data.attributes.profile.profileQuestions.filter(
        (question:any) => question.id === QuetionData.id
      );
      console.log(updatedQuestions)
      const updateData={
        ...ApplicationData,
        data: {
          ...ApplicationData.data,
          attributes: {
            ...ApplicationData.data.attributes,
            profile: {
              ...ApplicationData.data.attributes.profile,
              profileQuestions: updatedQuestions ,
            },
          },
        },
      }
      console.log(updateData,"updateData")
  
      setApplicationData(updateData);
  
      
    }    // Rest of your delete logic...
  };
  
  


  return (
    <div>
      {questionType === 'Paragraph' ? (
        <ParaGraph getQuetionData={setQuetionData} quetion={quetion} />
      ) : questionType === 'Multiple Choice' ? (
        <MultipleChoice getQuetionData={setQuetionData} quetion={quetion} />
      ) : questionType === 'Yes/no' ? (
        <Yesno getQuetionData={setQuetionData} quetion={quetion} />
      ) : questionType === 'Dropdown' ? (
        <DropDown getQuetionData={setQuetionData} quetion={quetion} />
      ) : (
        ''
      )}

      <div  className="QuetionComponent-Action">
        <div onClick={handleDelete} className="flex gap-4 alignItems">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 delete"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <h4 className="delete">Delete Quetion</h4>
        </div>
        <Button onClick={handleUpdateData} style={{ backgroundColor: 'green', color: 'white' }}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default UpdateQuetionComponent;
