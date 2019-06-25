import React from 'react'
import { render } from 'react-dom'
import { UserProvider } from './e-cart/UserContext'
import Products from './e-cart/Product'

const App = () => {
const user = { name: 'Weder', loggedIn: true }

return ( 
    <UserProvider value={user}>
    <div>
        <h1>    
            Products            
        </h1>
        <Products />
    </div>
    </UserProvider> 
    );
}

render(<App/>,document.getElementById('root'));