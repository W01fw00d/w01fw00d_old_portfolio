import React, { Component } from 'react';
import '../stylesheets/HomePage.css';

const email = 'romay.gabriel@gmail.com';  

class HomePage extends Component {
  render () {
    return (
        <div className="HomePage">
            <h3 className="contact"> Contact: {email}</h3>
        </div>
    );
  }
}

export default HomePage;