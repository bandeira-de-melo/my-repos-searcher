import React, { useContext } from 'react'
import MyReposItem from '../myReposItem/MyReposItem';
import './MyReposList.scss'
import {RepoListContext} from '../context/RepoListContext'

function MyReposList() {
  const[repositories, setRepositories, search, setSearch]=useContext(RepoListContext)
 
  return (
    <section>
      <ul>
        {repositories
        .filter(repoName => repoName.name.includes(search))
        .map( repository =>{
            return <MyReposItem key={repository.id} repository={repository}/>
          })}
      </ul>
    </section>
    
  )
}

export default MyReposList