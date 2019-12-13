import React, { Fragment, useEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { CLICK_UPDATE_VALUE } from "./../../redux/actions/actionTypes";

import allActions from './../../redux/actions';

import { Title } from './styles';



const Main = ({ newValue }) => {        
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    // 1

    const currentUser = useSelector(state => state.currentUser)
    // {}

    const user = {name: "Rei"}


    useEffect(() => {
        dispatch(allActions.userActions.setUser(user))
    }, [])
    

    return ( 
        <Fragment>
            <Title error={false}> Main 
                <small> Small </small>
                <h1>{counter}</h1>                
                <h1>Texto</h1>
            </Title>            
            <button onClick={() => dispatch( { type: CLICK_UPDATE_VALUE, payload: 'texto' } )}>
            Increment counter    
            </button>        

             <div className="App">
                  
            <button onClick={() => dispatch(allActions.userActions.logOut())}>Logout</button>
      
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(allActions.counterActions.increment())}>Increase Counter</button>
            <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease Counter</button>
            </div>    
        </Fragment>
    );
}

export default connect(null)(Main);