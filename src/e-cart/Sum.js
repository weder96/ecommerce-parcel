import React, { useContext } from 'react'
import UserContext from './UserContext'


function Sum(props) {
    const user = useContext(UserContext)
    return (
    <div> 
        {console.log(user.name)}
        {user.name}:{props.sum}
    </div>
    );
}
export default Sum;