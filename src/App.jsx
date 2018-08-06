import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';


import reactLogo from './assets/React-icon.png';

import { Layout } from 'antd';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';


const { Content } = Layout;

/**
 * this container is defined as class so we can modify state
 * @return {Component} react base component
 */
const App = () => (
  // <BrowserRouter>
  //   <main className="container">
  //     <div>
  //       <h1>hello world!</h1>
  //       <img className="container__image" alt="react logo" src={reactLogo} />
  //       <p>If you see this everything is working!</p>
  //     </div>
  //     <ul className="left">
  //       <li><Link to="/">Home</Link></li>
  //       <li><Link to="/about">About</Link></li>
  //     </ul>
  //     <Routes />
  //   </main>
  // </BrowserRouter>
    <Router>
    <Layout style={{width: '100%', height: '100%'}}>
      <Header></Header>
      <Content>
        <Container></Container>
      </Content>
      <Footer>
      </Footer>
  </Layout>
  </Router>
);

export default App;
