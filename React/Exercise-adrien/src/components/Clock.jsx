import React, { useEffect, useState } from 'react'

const Clock = () => {
 
  const [currentTime, setCurrentTime] = useState( new Date() );

  useEffect( () =>{

   const interval =  setInterval(()=>{
        setCurrentTime(new Date());
    },1000)

    return () => clearInterval(interval);

  },[])

  return (
    <div> Il est : {currentTime.toLocaleTimeString()} </div>
  )
}

export default Clock