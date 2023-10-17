import React from 'react';
import { Provider } from 'react-redux';
// import { gapi } from 'gapi-script';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './state/store';
import './App.css';
import Formulario from './pages/Create/CreateUser';
import LoginView from './pages/Login/Login';
import MenuView from './pages/Menu/Menu';
import UserView from './pages/Users/Users';
import 'antd/dist/antd.css';

function App() {

  return (
    <div className="principal-container">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/menu" component={MenuView} />
            <Route exact path="/users" component={UserView} />
            <Route exact path="/create" component={Formulario} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );

}

export default App;
