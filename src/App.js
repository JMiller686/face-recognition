import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

import './App.css';
import 'tachyons';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    line_linked: {
      shadow: {
        enable: true, 
        color: "#3CA9D1",
        blur: 5
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable:true, 
        mode: "grab"
      },
      resize:true
    },
    modes: {
      grab: {
        distance:227.77222777222775,
        line_linked: {
          opacity:1
        }
      }
    }
  },
  retina_detect:true
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className="particles"
          params={particlesOptions}
        />
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
