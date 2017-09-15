import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import AppHeader from './AppHeader';
import Home from './HomePage';
import TechsPage from './TechsPage';

import '../stylesheets/MainLayout.css';

class MainLayout extends Component {
  render() {
      
    console.log(this.refs);  
      
    return (
        <BrowserRouter>
            <div className="MainLayout">
                <AppHeader />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/techs" component={TechsPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default MainLayout;