import React, { useState, useEffect} from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'



function App() {

  const [{user}, dispatch] = useStateValue()
  useEffect(() => {
    // will only run once when the app component loads...

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
        
      if (authUser) {
        // the user just logged in / the user was logged in        
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } 

        else {
        // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);     

  console.log(user);
  
  return (
 
     <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<><Login/> </>} />
          <Route path='/checkout' element={<><Header /><Checkout/></>} />
          <Route path ="/" element={<><Header/> <Home/> </>} />
        </Routes> 
      </div>
    </Router>
     
    
    
  );
}

export default App
