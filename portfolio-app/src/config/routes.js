import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';

const Routes = (props) => {
    return (
        <Switch>
            <Route
                exact path='/'
                component={ Home }
            />
            
            {/* <Route
                exact path='/portfolio'
                component={ Portfolio }
            /> */}
        </Switch>
    )
}

export default Routes;