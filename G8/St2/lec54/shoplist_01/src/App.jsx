import React from 'react'
import './index.css'
import Product from './Product'
import Shoppinglist from './Shopping/Shoppinglist'

const App = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      {/* <Product   name="hp" imgUrl="https://th.bing.com/th/id/OIP.A3BKzcvY32CLG3ruEOgj_gHaHa?w=159&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" price="1000000"/>
      <Product   name="macbook" imgUrl="https://th.bing.com/th/id/OIP.Ay1i1xwvBqxZUcP0BncUbgHaE7?w=249&h=180&c=7&r=0&o=5&dpr=1.5&pid=1." price="10000"/>
      <Product   name="Iphone" imgUrl="https://th.bing.com/th?id=OIP.-bFF8aTOznAxapZuqgwAiAHaH2&w=242&h=257&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" price="1000"/> */}
      <Shoppinglist />
      {/* <h1>hello from product</h1> */}
      
    </div>
  )
}

export default App
