import React, { useContext, useEffect } from 'react'
import './App.css';
import PageView from './components/PageView';
import SignIn from './components/SignIn';
import {AppContext} from './contexts/AppContext';


{/*https://github.com/mui/material-ui/tree/v5.10.7/docs/data/material/getting-started/templates/dashboard*/}

function App() {
  const {username, isAuthenticated , logIn, logOut} = useContext(AppContext); 
  
  useEffect(() => {
		
		if (isAuthenticated) {
			//do fetching some data for the pageview component
		}
	}, [isAuthenticated]);

  return isAuthenticated ? (<PageView/>) : (<SignIn/>);
  
}

export default App;
