import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    // console.log(props.children);
    const role = 1;
    if (role == 0) {
        return <Navigate to="/signin" />
    }
    return props.children 
    
}

export default PrivateRoute