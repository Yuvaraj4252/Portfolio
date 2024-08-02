import React, { useState } from 'react';
import './Education.css';
// Make sure to replace with the actual path to your PrePHD component
import PrePhd from './PrePhd';
import PostPHD from './PostPHD';

const Education = () => {
  const [isGeneral, setGeneral] = useState(true);
  const [isPHD, setPHD] = useState(false);

  const handleGeneralClick = () => {
    setGeneral(true);
    setPHD(false);
  };

  const handlePHDClick = () => {
    setGeneral(false);
    setPHD(true);
  };

  return (
    <div className='container'>
      <div className='tiles'>
        <div className={isGeneral ? 'selected tile' : 'tile'} onClick={handleGeneralClick}>General</div>
        <div className={isPHD ? 'selected tile' : 'tile'} onClick={handlePHDClick}>PHD</div>
      </div>
      <div className='gap'></div>
      {isGeneral && <PrePhd />}
      {isPHD && <PostPHD />}
    </div>
  );
};

export default Education;
