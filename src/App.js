import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';
import store from './store'
import './reset.css';
import './statics/icon/iconfont.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      
        <BrowserRouter>
          <Provider store={ store }>
            <Header />
            <Route path="/" exact component={ Home }></Route>
            <Route path="/detail/:id" exact component={ Detail }></Route>
            <Route path="/login" exact component={ Login }></Route>
            <Route path="/write" exact component={ Write }></Route>
          </Provider>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
