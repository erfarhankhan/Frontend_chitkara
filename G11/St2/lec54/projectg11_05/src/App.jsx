import React from 'react'
import Product from './Product'
import Shoppinglist from './Shoppinglist'

const App = () => {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Shopping list is here </h1>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      {/* <Product name="hp" imgUrl="https://th.bing.com/th?id=OIP.lPGXgBSyy846n6lU3UohQQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" 
      price="1000000"
      />
      <Product name="macbook" imgUrl="https://th.bing.com/th?id=OIP.27Bk7A7H_KfWrbrD6TA2FQAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" 
      price="2000000"
      />
      <Product name="Iphone" imgUrl="https://th.bing.com/th?id=OIP.-bFF8aTOznAxapZuqgwAiAHaH2&w=242&h=257&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" 
      price="200"
      /> */}
      {/* <h1>hello react js from app.jsx</h1> */}
      <Shoppinglist />
    </div>
   
    </>
  )
}

export default App
