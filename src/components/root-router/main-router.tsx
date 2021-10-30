import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import withLoadable from "../../utils/withLoadable";
const Login = withLoadable(import('../../pages/login/LoginController'))

const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" />
                <Route path="/results" />
            </Switch>
        </>
    );
};

export default Main;
