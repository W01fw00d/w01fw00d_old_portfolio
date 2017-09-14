import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Programmer from './Programmer';
import Home_page from './Home_page';
//import logo from '../assets/logo.svg';
import avatar from '../assets/avatar_square.png';
import '../assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <Row>
                <Col xs="2"><img src={avatar} className="Avatar-logo" alt="avatar" /></Col>
                <Col>
                    <Programmer/>
                </Col>
            </Row>
        </div>
        <Home_page>
        </Home_page>
      </div>
    );
  }
}

export default App;
