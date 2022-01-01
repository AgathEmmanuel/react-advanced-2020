import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // const [people, setPeople]=React.useState([])
  const [people, setPeople]=React.useState(data)
  //return <h2>useState array example</h2>;
  const removeItem=(id)=>{
    let newPeople=people.filter((person)=>person.id!==id)
    setPeople(newPeople)
  }
  return (
    <>
    {people.map((person) => {
      console.log(person);
      const {id,name}=person;
      return (
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button onClick={()=>removeItem(id)}>remove</button>
        </div>
      )
    })}
    <button className='btn' onClick={() => setPeople([])}>
      clear all items
    </button>
    </>
  )
};

export default UseStateArray;
