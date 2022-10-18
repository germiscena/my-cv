import React from 'react';
import './InformationSection.scss';
import mail from '../img/mail.svg';
import phone from '../img/phone.svg';
import linkedIn from '../img/linkedin.svg';
import telegram from '../img/telegram.svg';
import mail2 from '../img/mail2.svg';
import vk from '../img/vk.svg';
import js from '../img/js.svg';
import html from '../img/html.svg';
import css from '../img/css.svg';
import react from '../img/react.svg';
import redux from '../img/redux.svg';
import github from '../img/github.svg';
import ts from '../img/ts.svg';

const InformationSection = () => {
  return (
    <div className='information'>
      <div className='informationBorder'>
        <div className='column'>
          <h2 className='sectionTitle'>О себе</h2>
          <div className='aboutMe'>
            <h3>Привет!</h3>
            <p className='pInfo'>Меня зовут Павел, мне 19 лет, я обучаюсь в БНТУ на 3 курсе.</p>
            <p className='pInfo'>
              Год назад я решил заняться программированием, и именно Front-end привлек меня больше
              всего. Сейчас я в поиске работы на место Junior Front-end разработчика.
            </p>
            <p className='pInfo'>
              О себе: веселый, трудолюбивый и целеустремленный. Люблю решать сложные задачи и когда
              все работает правильно.
            </p>
          </div>
          <h2 className='sectionTitle'>Связаться со мной</h2>
          <div className='aboutMe'>
            <div className='contact'>
              <img src={phone} alt='mail' />
              <p className='pContacts'>+375333264065</p>
            </div>
            <div className='contact'>
              <img src={mail} alt='mail' />
              <p className='pContacts'>germiscena@mail.ru</p>
            </div>
            <div className='contact'>
              <img src={mail2} alt='mail' />
              <p className='pContacts'>germiscena@gmail.com</p>
            </div>
            <div className='contact'>
              <img src={linkedIn} alt='mail' />
              <p className='pContacts'>linkedin.com/in/germiscena</p>
            </div>
            <div className='contact'>
              <img src={vk} alt='mail' />
              <p className='pContacts'>vk.com/germis31</p>
            </div>
            <div className='contact'>
              <img src={telegram} alt='mail' />
              <p className='pContacts'>https://t.me/germis123190</p>
            </div>
          </div>
        </div>
        <div className='border' />
        <div style={{ textAlign: 'end' }} className='column right'>
          <h2 className='sectionTitle'> Мои навыки</h2>
          <div className='mySkills'>
            <div className='skill'>
              <p className='pSkill'>JavaScript</p>
              <img src={js} alt='mail' />
            </div>
            <div className='skill'>
              <p className='pSkill'>HTML</p>
              <img src={html} alt='mail' />
            </div>
            <div className='skill'>
              <p className='pSkill'>CSS</p>
              <img src={css} alt='mail' />
            </div>
            <div className='skill'>
              <p className='pSkill'>SCSS</p>
              <img src={css} alt='mail' />
            </div>
            <div className='skill'>
              <p className='pSkill'>React</p>
              <img src={react} alt='mail' />
            </div>
            <div className='skill'>
              <p className='pSkill'>Redux</p>
              <img src={redux} alt='mail' />
            </div>
            <div className='skill'>
              <p className='pSkill'>TypeScript</p>
              <img src={ts} alt='mail' />
            </div>
            <div className='skill'>
              <p className='pSkill'>GIT</p>
              <img src={github} alt='mail' />
            </div>
          </div>
          <h2 className='sectionTitle'>Остальное</h2>
          <div className='other'>
            <div className='otherBlock'>
              <h3>Языки</h3>
              <div className='languages'>
                <p>Английский - B2</p>
                <p>Русский</p>
              </div>
            </div>
            <div className='otherBlock'>
              <h3>Курсы</h3>
              <div className='courses'>
                <p>React Sneakers - Archakov Blog</p>
                <p>React Pizza v2 - Archakov Blog</p>
                <p>Front-end - RSSchool Stage#0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
