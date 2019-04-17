import React, { Component } from 'react';
import Container from './components/containerMain/index';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className='containerMain'>
        <Container width='25%' tipo='perfil'/>
        <Container width='75%' tipo='projetos'/>
      </div>
    );
  }
}

export default App;
