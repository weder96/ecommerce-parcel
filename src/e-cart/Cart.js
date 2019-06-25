import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import { filter } from 'lodash';
import 'antd/dist/antd.css';

const Cart = props => { 
let { columns } = props;
let [dataSource, setDataSource] = useState(() => props.dataSource);
useEffect(() => {
    console.log('useEffect Cart'); 
},[dataSource]);  

return (
<div>
    <Table columns={columns} dataSource={filter(dataSource, function(pro) { return pro.ecart; })} />    
</div>    
);
}

export default Cart;