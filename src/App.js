import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/auth';
import Profile from './pages/profile';
import Home from './pages/home';

function App() {
	let sesionValue = false;
	if(localStorage.getItem('sesion') == 'true'){
		sesionValue = localStorage.getItem('sesion')
	}
	const [ sesion, setSesion ] = useState(sesionValue);
	
	useEffect( () => {
		localStorage.setItem('sesion', sesion);
	}, [sesion]);
	
	return (
		<Routes>
			{ !sesion && (
				<Route 
					path = '/auth'
					element = { <Auth authenticate={ () => setSesion(true) } /> }
				/>
			)}
			{ sesion && (
				<>
					<Route 
						path = '/home'
						element = { <Home/> }
					/>
					<Route 
						path = '/profile'
						element = { <Profile logout={ () => setSesion(false) } /> }
					/>
				</>	
			)}
			<Route 
				path = '*'
				element = { <Navigate to={ sesion ? '/home' : '/auth' } /> }
			/>
		</Routes>
	);
}

export default App;
