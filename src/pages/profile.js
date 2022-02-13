import React from 'react';
import { Link } from 'react-router-dom';

function Profile({ logout }){
    return (
        <div>
            <Link to='/home'>ir al Home</Link>
            <h1>Bienvenido estas logeado</h1>
            <button onClick={ logout }>Cerrar Sesion</button>
        </div>
    )
}

export default Profile;