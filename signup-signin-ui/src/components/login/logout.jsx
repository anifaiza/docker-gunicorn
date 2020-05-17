import React from 'react';
import {
    Redirect
} from "react-router-dom"

const logout = () => {
    localStorage.clear();
    return <Redirect to="/login" />
};

export default logout;