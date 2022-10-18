import React from 'react';
import './ButtonSection.scss';

const ButtonsSection = ({ setActive, active }) => {
  return (
    <div className='buttons'>
      <div
        onClick={() => setActive('first')}
        className={active == 'first' ? 'button active' : 'button'}>
        Information
      </div>
      <div
        onClick={() => setActive('second')}
        className={active == 'second' ? 'button active' : 'button'}>
        Portfolio
      </div>
    </div>
  );
};

export default ButtonsSection;
