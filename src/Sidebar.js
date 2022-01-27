import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );

  return <div className='sidebar' >
    <div className='sidebar__top'>
        <img src={require('./sidebar-bg.jpg')} alt='background-image'/>
        <Avatar className='sidebar__avatar'/>
        <h2>Mohd Owais</h2>
        <h4>Student || KIIT university</h4>
    </div>

    <div className='sidebar__stats'>
        <div className='sidebar__stat'>
        <p>Who viewed you?</p>
        <p className='sidebar__statNumber'>19</p>
        </div>
        <div className='sidebar__stat'>
        <p>Views on Post</p>
        <p className='sidebar__statNumber'>28</p>
        </div>
    </div>
    <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('developer')}
        {recentItem('engineering')}
        {recentItem('design')}
    </div>
  </div>;
}

export default Sidebar;
