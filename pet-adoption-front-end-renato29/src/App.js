import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; 
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Search from './components/pages/Search';
import Navbar from './components/layout/Navbar';

import ProfSet from './components/pages/ProfSet'
import UpdateProf from './components/pages/UpdateProf';
import AdmDash from './components/pages/AdmDash';
import LogoutHandler from './components/pages/FormLogin';
import PetList from './components/context/PetList'
import PetDiscover from './components/pages/PetDiscover'
import MypetSaved from './components/pages/MypetSaved';
function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={LogoutHandler} />
          <Route path="/profset" component={ProfSet} />
          <Route path="/profset/userupdate" component={UpdateProf} />
          <Route path="/petdiscover" component={PetDiscover} />
          <Route path="/petlist" component={PetList} />
          <Route path="/mypets" component={MypetSaved} />
          <Route path="/search/" component={Search} />
          <Route path="/dashboard" component={AdmDash} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
