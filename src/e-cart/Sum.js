import React, { useState, useEffect, useContext } from 'react';
import { filter } from 'lodash';
import UserContext from './UserContext'


function Sum() {
    const user = useContext(UserContext)        
    console.log('useEffect');
    let arr = filter(user.data, function(pro) { return pro.ecart; });        
    arr.reduce(function(a, b) {return a + b.price}, 0);
    return (
    <div> 
        {console.log(user.data)}
        {user.name} R$:{arr.reduce(function(a, b) {return a + b.price}, 0)}
    </div>
    );
}
export default Sum;