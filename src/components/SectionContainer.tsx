import React, { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  sectionName: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, sectionName }) => {
  return (
    <div className='SectionContainer'>
      <div className='SectionContainerHeader'>
        <h2>{sectionName}</h2>
      </div>
        <div className='SectionContainerBottom'>
        {children}
        </div>
    </div>
  );
};

export default SectionContainer;
