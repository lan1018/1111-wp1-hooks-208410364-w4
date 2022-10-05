import React, { useState } from 'react';

const T14_64_UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'frankie',
    age: 21,
    message: 'random message'
  });

const changeMessage = () => {
  setPerson({...person, message: 'frankie, 208410364'});
}

  return <>
     <h3>{person.name}</h3>
     <h3>{person.age}</h3>
     <h4>{person.message}</h4>
     <button className='btn' onClick={changeMessage}>change Message</button>
  </>
};

export default T14_64_UseStateObject;
