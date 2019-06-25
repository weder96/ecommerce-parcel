import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'antd';
import { filter } from 'lodash';
import 'antd/dist/antd.css';
import UserContext from './UserContext'

const Cart = props => { 
let { columns } = props;

const user = useContext(UserContext)
console.log(user.data);

useEffect(() => {
    console.log('useEffect Cart'); 
},[]);  

return (
<div>
    <Table columns={columns} dataSource={filter(user.data, function(pro) { return pro.ecart; })} />    
</div>    
);
}

export default Cart;