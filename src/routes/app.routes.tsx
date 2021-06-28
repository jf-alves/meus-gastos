import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/DashBoard';
import List from '../pages/List';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/dasboard" exact component={Dashboard}/>
            <Route path="/list/:type" exact component={List}/>
        </Switch>
    </Layout>
);

export default AppRoutes();