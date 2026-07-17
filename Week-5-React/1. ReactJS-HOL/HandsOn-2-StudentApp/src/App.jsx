import React, { Component } from 'react';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Student Management Portal</h1>
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;