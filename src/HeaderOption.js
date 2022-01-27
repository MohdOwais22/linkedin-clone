import { Avatar } from '@mui/material';
import React from 'react';
import './HeaderOption.css'

function HeaderOption({Icon , title, avatar }) {
  return <div className='HeaderOption'>
    {Icon && <Icon className="headerOption__icon" />}
    {avatar && <Avatar className="headerOption__icon" src={avatar} />}
    <h5 className="headerOption__title" >{title}</h5>
  </div>;
}

export default HeaderOption;
