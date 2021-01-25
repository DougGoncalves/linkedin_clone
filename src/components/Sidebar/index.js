import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="" alt=""/>
        <Avatar className="sidebar__avatar"/>
        <h2>DougGoncalves</h2>
        <h4>doug.goncalvesf@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,123</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
