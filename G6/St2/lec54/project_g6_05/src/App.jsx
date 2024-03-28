import React from 'react'
// import Product from './Product'
import Shoppinglist from './Shoppinglist'

const App = () => {
  return (
<>
    <h1 style={{textAlign:"center"}}>shopping list is here</h1>
    <div style={{display:"flex",justifyContent:"space-around"}}>
     
      {/* <Product name="hp" imgUrl="https://th.bing.com/th?id=OIP.lPGXgBSyy846n6lU3UohQQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" 
      price="100000"
      />
      <Product name="macbook" imgUrl="https://th.bing.com/th?id=OIP.lPGXgBSyy846n6lU3UohQQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" 
      price="200000"
      />
      <Product name="iphone" imgUrl="https://th.bing.com/th?id=OIP.lPGXgBSyy846n6lU3UohQQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" 
      price="100"
      /> */}
  <Shoppinglist />
  {/* <Shoppinglist /> */}
     
      
    </div>
    </>
  )
}

export default App
