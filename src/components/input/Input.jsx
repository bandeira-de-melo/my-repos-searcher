
import './input.scss'
import {RepoListContext} from '../context/RepoListContext'
import { useContext } from 'react'

function Input() {
  const[repositories, setRepositories, search, setSearch]=useContext(RepoListContext)

  function changeSearch (event) {
    setSearch(event.target.value)
  }

  return (
    <div className="input-container">
      <label className='input-label' htmlFor="inputSearch">Search</label>
      <input type="text" name="inputSearch"className="input" onChange={changeSearch}/>
    </div>
    
  )
}

export default Input