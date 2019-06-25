import React from 'react'
import { render } from 'react-dom'
import { UserProvider } from './e-cart/UserContext'
import Products from './e-cart/Product'

const App = () => {
const data = [
    { key: 1, name: "Kayak", category: "Watersports",
        description: "A boat for one person", price: 275 , ecart: false ,tags: ['nice', 'developer'] 
    },
    { key: 2, name: "Lifejacket", category: "Watersports",
        description: "Protective and fashionable", price: 48.95 , ecart: false,  tags: ['nice', 'developer'] 
    },
    { key: 3, name: "Soccer Ball", category: "Soccer",
        description: "FIFA-approved size and weight", price: 19.50 ,  ecart: false,  tags: ['nice', 'developer'] 
    },
    { key: 4, name: "Corner Flags", category: "Soccer",
        description: "Give your playing field a professional touch",
        price: 34.95 , ecart: false, tags: ['nice', 'developer']
    },
    /*{ key: 5, name: "Stadium", category: "Soccer",
        description: "Flat-packed 35,000-seat stadium", price: 79500 ,  tags: ['nice', 'developer'] 
    },
    { key: 6, name: "Thinking Cap", category: "Chess",
        description: "Improve brain efficiency by 75%", price: 16 , tags: ['cool', 'teacher']
    },
    { key: 7, name: "Unsteady Chair", category: "Chess",
        description: "Secretly give your opponent a disadvantage",
        price: 29.95,  tags: ['nice', 'developer'] },
    { key: 8, name: "Human Chess Board", category: "Chess",
        description: "A fun game for the family", price: 75 , tags: ['cool', 'teacher'] 
    },
    { key: 9, name: "Bling Bling King", category: "Chess",
    description: "Gold-plated, diamond-studded King", price: 1200 , tags: ['cool', 'teacher'] 
},*/
];

const user = { name: 'Weder', loggedIn: true, data: data }

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