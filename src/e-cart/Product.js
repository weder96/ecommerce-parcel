import React, { useState, useEffect } from 'react'
import { Table, Tag } from 'antd';
import { Button } from 'antd';
import { filter } from 'lodash';
import Cart from './Cart';
import Sum from './Sum'
import 'antd/dist/antd.css';

const Products = () => {
let [ecart , setEcart ] =  useState([]);
let [dtSum, setDtSum] = useState(0);

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Ecart',
    dataIndex: 'ecart',
    key: 'ecart',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button type="primary" onClick={() => AccessRow(record)}> {record.ecart ? 'Remove Cart': 'Add Cart'}</Button>        
      </span>
    ),
  },
];

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

function AccessRow (row) {
  if(row !== undefined){    
    data.forEach((item, index) => {
      if(row.key === item.key){
        data[index].ecart = data[index].ecart === true ? false : true;          
        console.log(JSON.stringify(item));
        setEcart([data[index]]);
      }  
    })
  }   
};

useEffect(() => {
  ecart.map( cart => console.log(cart.key));  
},[ecart]);     

 useEffect(() => {
  console.log('useEffect');
  function fetchProduct() {
      let arr = filter(data, function(pro) { return pro.ecart; });        
      setDtSum(arr.reduce(function(a, b) {return a + b.price}, 0));
  }
  fetchProduct();   
},[]);  

return (
    <div>
    <Table columns={columns} dataSource={filter(data, function(pro) { return !pro.ecart; })} />
        <h1>    
            Adicionados Carinho
        </h1> 
        <Cart columns={columns} dataSource={ecart}/>       
        <h1>    
          Sum
        </h1>   
        <Sum sum={dtSum} />    
        </div>
    );
}

export default Products