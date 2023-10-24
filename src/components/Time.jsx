import React from 'react'
import { useState } from 'react';

const Time = () => {


    let time = new Date ().toLocaleTimeString();
    const  [ctime , setCtime] = useState(time);
   
   
    const UpdateTime = ()=>{
         time = new Date ().toLocaleTimeString();
        setCtime(time)

    }

    setInterval(UpdateTime, 1000);
  return (
<>
  <h1 className="Time float-end">{ctime}</h1>
  </>
  )
}

export default Time