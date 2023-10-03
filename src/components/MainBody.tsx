import React from 'react';
import { useState, useEffect } from 'react';
import SectionContainer from './SectionContainer';
import UploadImageSection from './MainBodycomponents/UploadImageSection';
import PersonalInformation from './MainBodycomponents/PersonalInformation';
import ProfileComponent from './MainBodycomponents/ProfileComponent';
import '../Styles/MainBody.css';
import QuetionComponent from './MainBodycomponents/QuetionComponent';
import { connect } from 'react-redux';
import { RootState } from '../Redux/store'; // Import RootState from your Redux store file

interface MainBodyProps {
  isQuetionComponent: string;
}



const MainBody: React.FC<MainBodyProps> = ({ isQuetionComponent }) => {
  const [ApplicationData,setApplicationData] = useState();
  useEffect(() => {
    fetch("https://stoplight.io/mocks/freshertalent/task1capitalplacement/247155419/api/1/programs/jbjrwq0a22203/application-form")
      .then((response) => response.json())
      .then((data) => {console.log(data)
         setApplicationData(data)})
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, []);
  return (
    <div className='main'>
      <SectionContainer sectionName="Section 1">
        <UploadImageSection  />
      </SectionContainer>
      <SectionContainer sectionName="Personal Information">
        <PersonalInformation ApplicationData={ApplicationData} setApplicationData={setApplicationData} /> 
      </SectionContainer>
      {isQuetionComponent === "Personal Information" ? (
        <SectionContainer sectionName="Questions">
          <QuetionComponent from="PersonalInformation" ApplicationData={ApplicationData} setApplicationData ={setApplicationData}   /> 
        </SectionContainer>
      ) : null}

      <SectionContainer sectionName="Profile">
        <ProfileComponent ApplicationData={ApplicationData} setApplicationData ={setApplicationData} /> 
      </SectionContainer>
      { isQuetionComponent === "Profile" ? (
        <SectionContainer sectionName="Questions">
          <QuetionComponent from="Profile" ApplicationData={ApplicationData} setApplicationData ={setApplicationData}  /> 
        </SectionContainer>
      ) : null}
       <SectionContainer sectionName="Additioal Quetions">
        {/* <ProfileComponent />  */}
      </SectionContainer>
    </div>
  );
};




const mapStateToProps = (state: RootState) => {
  return {
    isQuetionComponent: state.isQuetionReducer.isQuetionComponent,
  };
};



export default connect(mapStateToProps)(MainBody);
