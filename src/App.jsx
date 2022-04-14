import React from 'react'
import MyReposList from './components/myReposList/MyReposList'
import Nav from './components/Nav/Nav'
import './global.scss'
import {RepoProvider} from './components/context/RepoListContext'

function App() {
  return (
    <RepoProvider>
      <div className="general-container">
        <Nav />
        <MyReposList />
      </div>
    </RepoProvider>
  )
}

export default App