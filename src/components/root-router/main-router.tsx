import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";

const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/login" />
                <Route path="/home" />
                <Route path="/results" />
            </Switch>
        </>
    );
};

export default Main;
