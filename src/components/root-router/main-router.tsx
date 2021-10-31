import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import withLoadable from "../../utils/withLoadable";
const Login = withLoadable(import('../../pages/login/LoginController'))
const Home = withLoadable(import('../../pages/home/HomeController'))
const Result = withLoadable(import('../../pages/results/ResultsController'))

const Main = () => {
    return (
        <>
            <Switch>
                <Route exact path="/result" component={Result} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
            </Switch>
        </>
    );
};

export default Main;
