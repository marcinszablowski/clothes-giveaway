import React from 'react';
import './scss/main.scss';
import './App.css';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Logout from './components/Logout/Logout'
import { HashRouter, Route} from 'react-router-dom';

function App() {
  return (

    <HashRouter>
      <>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/logout' component={Logout} />
      </>
    </HashRouter>

  );
}

export default App;
