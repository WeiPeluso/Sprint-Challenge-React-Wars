// Write your Character component here
import React from 'react'
import './Character.scss';
import styled from 'styled-components'


const Character=(props)=>{

    const StatusIndicator=styled.span`
  font-size:4rem;
  ${props=>(props.status==='Alive' ? `color: green`:null)};
  ${props=>(props.status==='Dead' ? `color: red`:null)};
  ${props=>(props.status==='unknown' ? `color: gray`:null)};
`
    
    return (
    
        <div className="characterArea">
         <div>
        <img src={props.character.image} alt={`${props.character.name}`} />
         </div>
         <div className="textArea">
        <p>Name: {props.character.name}</p>
        <p><StatusIndicator status={props.character.status}>.</StatusIndicator>{props.character.status}-{props.character.species}</p>
        <p>Gender: {props.character.gender}</p>
        <p>Origin: {props.character.origin.name}</p>
        <p>Location: {props.character.location.name}</p>
        </div>
  
    </div>)

}


export default Character