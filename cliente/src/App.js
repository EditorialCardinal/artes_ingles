import React from 'react';
import {BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login';
import LayoutEstuduante from './Layout/LayoutBase';
import Video from './components/panelInterior/videos/Video';
import ComprensionState from './context/auth/ComprensionState';

import './App.scss';

const App = () => {
  return (
    <ComprensionState>
        <Router>
            <Routes>
                <Route exac path={'/'} element={ <Login />} />
                <Route exac path={'/registro'} element={ <Register />} />
                <Route element={<LayoutEstuduante/>}>
                    <Route exac path={'/panelEstudiante'} element={ <Video />} />
                </Route>
            </Routes>
        </Router>        
    </ComprensionState>
  )
}


export default App;
