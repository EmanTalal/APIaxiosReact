import { Routes, Route, useParams } from 'react-router-dom';
import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

function UseInfo() {
    const id=useParams();
    const[allpost,setAll]=useState([])

    
    useEffect(()=>{
        axios.get('https://finalspaceapi.com/api/v0/character/')
        .then((res)=>{
            console.log(res)
            setAll(res.data)
        })
    },[id]);
  
  return (
    <div>


            {id.id}


{allpost.filter(i=>i.id==id.id).map(character=>{return(
<>
<div className=' flex justify-center'>
<div className='card bg-primary text-primary-content w-96 p-3 m-9 '>
<img src={character.img_url} alt={`${character.name} image`} />
<p><strong>Name:</strong>{character.name}</p>
      <p><strong>hair</strong> {character.hair}</p>
      <p><strong>status:</strong> {character.status}</p>
      <p><strong>species:</strong> {character.species}</p>
      <p><strong>gender:</strong> {character.gender}</p>
      <p><strong>origin:</strong> {character.origin}</p>
      <p><strong>abilities:</strong> {character.abilities}</p>
      </div>
      </div>
</>
)})}


    
    </div>
  );
};


export default UseInfo