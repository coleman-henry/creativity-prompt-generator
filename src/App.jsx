import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route}from 'react-router-dom';


class App extends React.Component{
  constructor(props){
  super(props);
    this.state = {
      change: true,
    };
  };

  

  
  render(){
    return (
   
      <Router>
          <Navbar/>
      </Router>

    );
  }
}


export default App;
