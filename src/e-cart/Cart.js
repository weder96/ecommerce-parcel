import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import { filter } from 'lodash';
import Sum from './Sum'
import 'antd/dist/antd.css';

const Cart = (props) => { 
let { columns, dataSource } = props;
const [dtSum, setDtSum] = useState(0);

 // Similar to componentDidMount and componentDidUpdate:
useEffect(() => {        
    setDtSum(dataSource.reduce(function(a, b) { 
        console.log('b.ecart: ', b.ecart);
        if(b.ecart == true) {
            return a + b.price
        }
    }, 0));
});  

return (
<div>
    <Table columns={columns} dataSource={filter(dataSource, function(pro) { return pro.ecart; })} />
    <h1>    
    Sum
    </h1>   
    <Sum sum={dtSum} />
</div>    
);
}

export default Cart;