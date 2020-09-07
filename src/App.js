import React, { Component } from 'react';
import Profile from './Pro';
import './App.css';



  const handleName = () => {
    alert("Hello Sabri Ben Khalil");
  }

class App extends Component {
  render() {
    return (
      <Profile  fullName="Sabri Ben Khalil"
      bio="Expert"
      profession="Developper"
      handleName ={handleName}>    
      </Profile>
    );
  }
}

export default App;
