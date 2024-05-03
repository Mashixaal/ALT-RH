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
        <div class="card col-2 m-2 bg-yellow " >
      <div className="card-body ">
      <img src={pokemon.image} width={200} height={200} alt="images" />
        <h5 className="card-title">{pokemon.name}</h5>
        <div>
        <h3 className="card-id overview">{pokemon.pokedexId}</h3>
        </div>
        <div>
        <a href="#" className="btn btn-primary">View details</a>
        </div>
      </div>
    </div>
    ))} 
    </div>

    </>
  )
}

export default Card