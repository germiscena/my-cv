import React from 'react';
import './PortfolioSection.scss';
import sneakers from '../img/sneakers.png';
import pizza from '../img/pizza.png';
import portf from '../img/portf.png';

const PortfolioSection = () => {
  return (
    <div className='information'>
      <div className='informationBorder'>
        <div className='column'>
          <h2>Мои работы</h2>
          <div className='borderHorizont' />
          <div className='works'>
            <div className='work first'>
              <img src={sneakers} alt='sneakers' />
              <p className='work_p'>React Sneakers</p>
              <div className='links'>
                <a
                  className='links_link'
                  target='_blank'
                  href='https://react-sneakers-ltqm.vercel.app/'>
                  Перейти
                </a>
                <a
                  href='https://github.com/germiscena/react-sneakers'
                  className='links_link'
                  target='_blank'>
                  GitHub
                </a>
              </div>
            </div>
            <div className='work second'>
              <img src={pizza} alt='pizza' />
              <p className='work_p'>React Pizza v2</p>
              <div className='links'>
                <a
                  className='links_link'
                  target='_blank'
                  href='https://react-pizza-v2-five.vercel.app/'>
                  Перейти
                </a>
                <a
                  href='https://github.com/germiscena/react-pizza-v2'
                  className='links_link'
                  target='_blank'>
                  GitHub
                </a>
              </div>
            </div>
            <div className='work third'>
              <img src={portf} alt='sneakers' />
              <p className='work_p'>Portfolio Landing</p>
              <div className='links'>
                <a
                  className='links_link'
                  target='_blank'
                  href='https://rolling-scopes-school.github.io/germiscena-JSFEPRESCHOOL/portfolio/'>
                  Перейти
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
