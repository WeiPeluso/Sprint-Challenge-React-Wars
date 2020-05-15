import React, {useState,useEffect} from 'react';
import './App.scss';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters]=useState([])
  const [searchName,setSearchName]=useState([])
  const [page,setPage]=useState(1)
  const [information,setInformation]=useState([])

  //useEffect(()=>{console.log(characters)})

  useEffect(()=>{

    axios.get(`https://rickandmortyapi.com/api/character/?name=${searchName}&page=${page}&name=${searchName}`)

    .then((response)=>{

      setCharacters(response.data.results)
      setInformation(response.data.info)
  
    })
    .catch((error)=>{
      setPage(1)
      console.log(error)
    })
  },[searchName,page])


  const prevHandler=(event)=>{
    event.preventDefault()
    if(page>1){
      setPage(page -1)
    }else{
      setPage(information.pages)
    }
  }

  
  const nextHandler=(event)=>{
    event.preventDefault()
    if(page<=information.pages){
      setPage(page+1)
    }else{
      setPage(1)
    }
  }

  return (
    <div className="App">

      <div>
          <h1>Welcome to the Rick and Morty's Family</h1>
      </div>
 
      <div className='searchArea'>
            <p>Search By Name</p>
            <input type='text' onChange={(event)=>{
          setSearchName(event.target.value)
        }} 
        value={searchName}></input>

        </div>

        <div className="pageArea">
        <button onClick={prevHandler}>pre</button>
        <p>{page}/{information.pages}</p>
        <button onClick={nextHandler}>next</button>

        </div>
      
      <div className="displayCharacter">
      {characters.map((character)=> (
            <Character key={character.id} character={character} />
            ))
      }
     </div>
    </div>
  );
}

export default App;
