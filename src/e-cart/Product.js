import React, { useState, useEffect, useContext } from 'react'
import { Table, Tag } from 'antd';
import { Button } from 'antd';
import { filter } from 'lodash';
import Cart from './Cart';
import Sum from './Sum'
import UserContext from './UserContext'
import 'antd/dist/antd.css';

const Products = () => {
let [ecart , setEcart ] =  useState([]);
const user = useContext(UserContext)
console.log(user.data);

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

function AccessRow (row) {
  if(row !== undefined){    
    user.data.forEach((item, index) => {
      if(row.key === item.key){
        user.data[index].ecart = user.data[index].ecart === true ? false : true;
        setEcart([user.data[index]]);
      }  
    })
  }   
};


return (
    <div>
    <Table columns={columns} dataSource={filter(user.data, function(pro) { return !pro.ecart; })} />
        <h1>    
            Adicionados Carinho
        </h1> 
        <Cart columns={columns} dataSource={ecart}/>       
        <h1>    
          Sum
        </h1>   
        <Sum />    
        </div>
    );
}

export default Products