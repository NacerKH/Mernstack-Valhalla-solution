import React from 'react';
import { BrowserRouter as Router , Route, Switch , Redirect} from 'react-router-dom';
import Profil from '../../pages/Profil';
import Home from '../../pages/Home';
import Trending from '../../pages/Trending';

const index = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profil" exact component={Profil} />
                <Route path="/trending" exact component={Trending} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default index;