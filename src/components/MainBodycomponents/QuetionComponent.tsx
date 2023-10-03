import React, { useState } from 'react';
import { Dropdown, Menu, Button, Modal } from 'antd';
import DropDown from './QuetionType/DropDown';
import ParaGraph from './QuetionType/ParaGraph';
import MultipleChoice from './QuetionType/MultipleChoice';
import Yesno from './QuetionType/Yesno';
import { setIsQuetionComponent } from '../../Redux/setIsQuetionCompont';
import { connect } from 'react-redux';
import { RootState } from '../../Redux/store';


interface QuetionComponentProps {
  ApplicationData:any,
  from: string,
  setApplicationData: any
  setIsQuetionComponent:any 
}

const QuetionComponent: React.FC<QuetionComponentProps> = ({
  ApplicationData,
  from,
  setApplicationData,
  setIsQuetionComponent
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [questionType, setQuestionType] = useState<string | null>(null);
  const [QuetionData, setQuetionData] = useState<any | null>(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);
  const [questionToDelete, setQuestionToDelete] = useState<string | null>(null);

  const handleMenuClick = (e: { key: React.Key }) => {
    setSelectedOption(e.key.toString());
    setQuestionType(e.key.toString());
  };

  const showDeleteModal = (questionId: string) => {
    setQuestionToDelete(questionId);
    setDeleteModalVisible(true);
  };

  const handleDeleteQuestion = () => {
    if (questionToDelete) {
      // Remove the question from your state based on its ID
     
      setIsQuetionComponent("")
      
      
      setDeleteModalVisible(false);
      setQuestionToDelete(null);
    }
  };
  

  const options = [
    'paragraph',
    'Short Answer',
    'Yes/no',
    'Dropdown',
    'Multiple Choice',
    'Date',
    'number',
    'File Upload',
    'Video Quetion',
  ];

  const menu = (
    <Menu>
      {options.map((option) => (
        <Menu.Item key={option} onClick={handleMenuClick}>
          <h4>{option}</h4>
        </Menu.Item>
      ))}
    </Menu>
  );




  const handleUpdateData = () => {
    const data = QuetionData;
  
    if (data) {
      const newData = { ...ApplicationData };
      
      if (from === 'Profile') {
        // Update the profileQuestions property if it exists
        if (newData?.data?.attributes?.profile) {
          newData.data.attributes.profile.profileQuestions = [
            ...(newData.data.attributes.profile.profileQuestions || []),
            data,
          ];
        }
      } else {
        // Update the personalQuestions property if it exists
        if (newData?.data?.attributes?.personalInformation) {
          newData.data.attributes.personalInformation.personalQuestions = [
            ...(newData.data.attributes.personalInformation.personalQuestions || []),
            data,
          ];
        }
      }
  
      // Set the updated data as the new state
      setApplicationData(newData);
      setApplicationData(newData);
    setIsQuetionComponent("")
    }
  };
  
  

  return (
    <div className="QuetionComponent">
      {/* Dropdown to select question type */}
      <Dropdown overlay={menu} placement="bottomLeft">
        <div className="dropdown" style={{ backgroundColor: 'white' }}>
          <h4>{selectedOption || 'Quetion type'}</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </Dropdown>

      {/* Render question component based on selected question type */}
      <div>
        {questionType === 'paragraph' ? (
          <ParaGraph getQuetionData={setQuetionData} quetion="" />
        ) : questionType === 'Multiple Choice' ? (
          <MultipleChoice getQuetionData={setQuetionData} quetion="" />
        ) : questionType === 'Yes/no' ? (
          <Yesno getQuetionData={setQuetionData} quetion="" />
        ) : questionType === 'Dropdown' ? (
          <DropDown getQuetionData={setQuetionData} quetion="" />
        ) : (
          ''
        )}
      </div>

      {/* Delete question button */}
      <div className="QuetionComponent-Action">
        <div className="flex gap-4 alignItems">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 delete"
            onClick={() => showDeleteModal(QuetionData.id)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <h4 className="delete">Delete Quetion</h4>
        </div>
        <Button onClick={handleUpdateData} style={{ backgroundColor: 'green', color: 'white' }}>
          Save
        </Button>
      </div>

      {/* Delete confirmation modal */}
      <Modal
        title="Confirm Deletion"
        visible={deleteModalVisible}
        onOk={handleDeleteQuestion}
        onCancel={() => setDeleteModalVisible(false)}
      >
        Are you sure you want to delete this question?
      </Modal>
    </div>
  );
};



const mapStateToProps = (state: RootState) => {
  return {
    isQuetionComponent: state.isQuetionReducer.isQuetionComponent,
  };
};

const mapDispatchToProps = {
  setIsQuetionComponent
};

export default connect(mapStateToProps,mapDispatchToProps)(QuetionComponent);

