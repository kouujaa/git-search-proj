import React from "react";
import { Route } from "react-router";
import { Switch, Redirect } from "react-router-dom";
import withLoadable from "../../utils/withLoadable";
import * as H from "history"
const Login = withLoadable(import("../../pages/login/LoginController"));
const Search = withLoadable(import("../../pages/home/HomeController"));
const Result = withLoadable(import("../../pages/results/ResultsController"));
interface Props {
  match: any;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

const Main = () => {
  const [token, setToken] = React.useState<string | null>("");

  React.useEffect(() => {
    setToken(localStorage.getItem("access_token"));
  }, []);

  return (
    <>
      <Switch>
        <Route
          exact
          path="/login"
          render={(props: Props) => {
            if (token) return <Redirect to="/search" />;
            //@ts-ignore
            return <Login {...props} />;
          }}
        />
        <Route
          exact
          path="/result/:searchTerm"
          render={(props) => {
            if (!token) return <Redirect to="/login" />;
            //@ts-ignore
            return <Result {...props} />;
          }}
        />
        <Route
          exact
          path="/search"
          render={(props) => {
            if (!token) return <Redirect to="/login" />;
            //@ts-ignore
            return <Search {...props} />;
          }}
        />
        <Route
          exact
          path="/"
          render={(props) => {
            if (!token) return <Login />;
            //@ts-ignore
            return <Search {...props} />
          }}
        />
        <Route exact path="/seach" component={Search} />
      </Switch>
    </>
  );
};

export default Main;
