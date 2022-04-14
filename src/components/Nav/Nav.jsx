import React from 'react'
import Input from '../input/Input'
import './nav.scss'

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-flex">
        <h1 className="title">My Repos</h1>
        <Input />
      </div>
    </nav>
  )
}

export default Nav