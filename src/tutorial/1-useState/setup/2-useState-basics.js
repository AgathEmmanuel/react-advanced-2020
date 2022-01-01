import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text,setText]=useState('random title');
  const handleClick=()=>{
    setText('hello world oooo');
  }
  return (
    <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>
      change title
    </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
