import React from 'react';
import { connect } from 'react-redux';
import { setIsQuetionComponent } from '../../Redux/setIsQuetionCompont';
import { RootState } from '../../Redux/store'; // Import RootState from your Redux store file

interface AddQuetionProps {
  setIsQuetionComponent: (sectionName: string) => void;
  SectionName: string;
}

const AddQuetion: React.FC<AddQuetionProps> = ({ setIsQuetionComponent, SectionName }) => {
  const Addquetion = () => {
    setIsQuetionComponent(SectionName);
  };

  return (
    <div>
      <div onClick={Addquetion} className='flex gap-4 alignItems'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
        </svg>
        <h3>Add Question</h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => { // Specify the type for 'state'
  return {
    isQuetionComponent: state.isQuetionReducer.isQuetionComponent,
  };
};

const mapDispatchToProps = {
  setIsQuetionComponent,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddQuetion);
