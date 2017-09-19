import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import AppHeader from './AppHeader';
import Home from './HomePage';
import TechsPage from './TechsPage';
import ProfessionalPage from './ProfessionalPage';

import '../stylesheets/MainLayout.css';

class MainLayout extends Component {
    
  componentDidMount() {
    //Hotjar Tracking Code for https://w01fw00d.github.io/w01fw00d_portfolio/
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = "(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:627228,hjsv:5};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');";
    this.instance.appendChild(s);
  }
    
  render() {
      
    return (
        <BrowserRouter>
            <div className="MainLayout" ref={el => (this.instance = el)}>
                <AppHeader />
        
                <Switch>
                    <Route exact path="/w01fw00d_portfolio/" component={Home} />
                    <Route exact path="/w01fw00d_portfolio/techs" component={TechsPage} />
                    <Route exact path="/w01fw00d_portfolio/professional" component={ProfessionalPage} />

                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default MainLayout;