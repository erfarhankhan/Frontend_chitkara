import React from 'react'
import './Person.css';

const Person = (props) => {
  return (
    <div className='div'>
      <article className='person'>
        {/* <h1>name:xyz</h1> */}
        <h1>name:{props.name}</h1>
        <h4>age:17</h4>
        <p>email:gmail.com</p>
      </article>
    </div>
  )
}

export default Person
