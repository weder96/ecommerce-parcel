import React, { useState, useEffect } from 'react';
import api from './../../../service/api';
import axios from 'axios';

function Products() {
  // Declare uma nova variável de state, a qual chamaremos de "count"
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ products: [] });

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3000/products/?productId=189');
      setData(result.data);
    };
    fetchData();
    // Atualiza o titulo do documento usando a API do browser
    document.title = `Você clicou ${count} vezes`;

  },[]);
  
  return (
    <div>
          <ul>
      {data.products ? data.products.map(item => (
        <li key={item.productId}>{item.productId}</li>
      )):[]}
    </ul>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Products;