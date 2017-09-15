import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

// Layouts
import MainLayout from './components/MainLayout';
//import SearchLayout from './components/search-layout';

// Pages
import Home from './components/HomePage';
import TechsPage from './components/TechsPage';
//import UserProfile from './components/user-profile';
//import WidgetList from './components/widget-list';

export default (
    <BrowserRouter>
        <div>
            <MainLayout />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/techs" component={TechsPage} />
                </Switch>
            </main>
        </div>
        
    </BrowserRouter>
);