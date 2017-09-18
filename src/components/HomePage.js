import React, { Component } from 'react';
import '../stylesheets/HomePage.css';

class HomePage extends Component {
  render () {
    const email = 'romay.gabriel@gmail.com';  
      
    return (
        <div className="HomePage">
            <h3 className="contact"> Contact: {email}</h3>
        </div>
    );
  }
}

export default HomePage;