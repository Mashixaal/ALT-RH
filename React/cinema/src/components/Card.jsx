import React from 'react'

const Card = () => {
  return (
    <>
        <div className='movie'>
            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/AnsSKR9LuK0T9bAOcPVA3PUvyWj.jpg" className='poster' />
            <div className='movie-details'>
                <div className='box'>
                    <h4 className='title'>Fallout</h4>
                    <p className='rating'>9.7</p>
                </div>
                <div className='overview'>
                    <h1>aperçu</h1>
                    Everyone knows the stories of Robin Hood and Maid Marian, but this the story of what happens next. Out of the shadows, a legend returns to save her people from the tyranny of the disgraced Sheriff of Nottingham. Robin Hood remains at war and Marian must put her own combat skills to the test, creating a new tale that will be heralded throughout the ages.</div>
            </div>
        </div>
    </>
  )
}

export default Card