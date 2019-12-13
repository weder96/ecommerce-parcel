import React, { Fragment } from 'react'
import GlobalStyle from './styles/global'

import Routes from './routes';

function App(){
    return ( 
        <Fragment>
            <Routes />
            <GlobalStyle />
        </Fragment>
    );
}


export default App;
