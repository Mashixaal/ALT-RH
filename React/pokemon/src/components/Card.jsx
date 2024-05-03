import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import image from '../assets/img/bg-pokemon.jpg' 

const Card = () => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/10').then(response => {
            console.log(response.data);
            setPokemons(response.data);
            
        })
    }, [])
  return (
    <>
    <div className='row mt-4 center'>
    {pokemons.map(pokemon => (
        <div class="card col-2 mx-2" >
      <div className="card-body ">
      <img src={pokemon.image} width={200} height={200} alt="images" />
        <h5 className="card-title">{pokemon.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    ))} 
    </div>

    </>
  )
}

export default Card