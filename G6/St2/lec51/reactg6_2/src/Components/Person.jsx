import React from 'react'
import './Person.css'

const Person = (p) => {
  return (
    <div className='div'>
      <article className='person'>
        <h1>name:{p.name}</h1>
        <h4>age:17</h4>
        <p>email:gmail.com</p>
      </article>
    </div>
  )
}

export default Person
