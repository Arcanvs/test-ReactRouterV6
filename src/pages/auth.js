import React from 'react';
import { useNavigate } from 'react-router-dom';

function Auth({ authenticate }){
    const navigate = useNavigate();
    const login = () => {
        authenticate();
        navigate('profile');
    };

    return (
        <div>
            <h1>Bienvenido</h1>
            <button onClick={ login }>Ingresar</button>
        </div>
    )
}

export default Auth;