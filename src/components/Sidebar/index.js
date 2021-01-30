import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem"> 
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )


  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1533141657590-d8aa5e631eda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="profile-banner"/>
        <Avatar className="sidebar__avatar"/>
        <h2>DougGoncalves</h2>
        <h4>doug.goncalvesf@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,123</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p> 
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar
