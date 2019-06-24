import React from 'react'
import { render } from 'react-dom'

import Products from './e-cart/Product'

const App = () => {
return (  
    <div>
        <h1>    
            Products            
        </h1>
        <Products />
    </div>
    );
}

render(<App/>,document.getElementById('root'));