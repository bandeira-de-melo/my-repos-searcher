import { createContext, useEffect, useState } from "react";

export const RepoListContext = createContext() //whenever/wherever I want to use the info from the state function bellow I import this

export const RepoProvider = (props) => { // this is going to provide the info to be used in diferent components
  const[repositories, setRepositories]=useState([])
  const[search, setSearch]=useState('')

  useEffect (()=>{
    fetch("https://api.github.com/users/bandeira-de-melo/repos")
    .then(response => response.json())
    .then(data => setRepositories(data))
  },[repositories])


  return (
    <RepoListContext.Provider value={[repositories, setRepositories, search, setSearch]}>
      {props.children}
    </RepoListContext.Provider>
  );
}