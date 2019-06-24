import React from 'react'
import { Table, Divider, Tag } from 'antd';
import { Button } from 'antd';
import { filter } from 'lodash';
import Cart from './Cart';
import 'antd/dist/antd.css';
import { stringify } from 'querystring';

const Products = () => { 
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
                description: "FIFA-approved size and weight", price: 19.50 ,  ecart: true,  tags: ['nice', 'developer'] 
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

const AccessRow = (row) => {
  console.log(row.key)
  data.forEach((item, index) => {
    if(row.key === item.key){
      data[index].ecart = data[index].ecart === true ? false : true;          
      console.log(JSON.stringify(item));
    }  
  }) 
};


return (
    <div>
    <Table columns={columns} dataSource={filter(data, function(pro) { return !pro.ecart; })} />
        <h1>    
            Adicionados Carinho
        </h1>  
    <Cart columns={columns} dataSource={data}/>    
    </div>
    );
}

export default Products