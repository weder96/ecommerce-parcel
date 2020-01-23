import React, { Fragment, useEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { CLICK_UPDATE_VALUE } from "./../../../redux/actions/actionTypes";

import allActions from './../../../redux/actions';

import { Title } from './styles';
import { Button } from 'antd';


const Main = ({ ...props }) => {        
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
            </Title>

            <Title>{counter}</Title>                
            <Title>Texto</Title>            
            <button onClick={() => dispatch( { type: CLICK_UPDATE_VALUE, payload: 'texto' } )}>
            Increment counter    
            </button>        

             <div className="App">
                  
            <button onClick={() => dispatch(allActions.userActions.logOut())}>Logout</button>
      
            <h1>Counter: {counter}</h1>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
            <Button type="link">Link</Button>

            <Button type="primary" onClick={() => dispatch(allActions.counterActions.increment())}>Increase Counter</Button>
            <Button type="danger" onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease Counter</Button>
            </div>    
        </Fragment>
    );
}

export default connect(null)(Main);