import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*
                
              <FaceRecogition />*/}
      </div>
    );
  }
}

export default App;
