import React from 'react';
import './App.css';
//import { Router as Router, Route } from 'react-router';
//import { LoginComponent } from './components/login-component/LoginComponent';
import  { Pnavbar } from './components/nav-bar/NavBar';
import  LoginComponent  from './components/login-component/LoginContainer';
import { BrowserRouter as Router,Route, Switch  } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import  UserDisplayComponent  from './components/get-all-user-component/user-display/UserDisplayContainer'
import  ReimbursementByStatusDisplayRowComponent  from './components/Get-All-Reimbursements-By-Status-Component/ReimbursementByStatusDisplayContainer';
//import UserByIdDisplayRowComponent from './components/Get-All-User-By-Id-Component/UserByIdDisplayContainer'
import  UserByIdDisplayComponent from './components/Get-All-User-By-Id-Component/UserByIdDisplayContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
          <Pnavbar/>
          <Switch>
            
            <Route path='/login' component={LoginComponent}/>
            <Route path='/user/display/id/' component={UserByIdDisplayComponent}/>
            <Route path='/user/display/' component={UserDisplayComponent}/> 
            <Route path='/reimbursements/status/' component={ReimbursementByStatusDisplayRowComponent} />
            
            <Route path ='/'>
              </Route>
            {/* <Home/> */}
            </Switch>
          </Router>
          </Provider>
    </div>
  );
}

export default App;
