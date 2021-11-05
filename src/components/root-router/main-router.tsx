import React from "react";
import { useQuery } from "@apollo/client";
import { Route } from "react-router";
import { Switch, Redirect } from "react-router-dom";
import withLoadable from "../../utils/withLoadable";
import * as H from "history";
import { GET_REPOSITORIES, GET_USERS } from "../../services/queries";
const Login = withLoadable(import("../../pages/login/LoginController"));
const Search = withLoadable(import("../../pages/home/HomeController"));
const Result = withLoadable(import("../../pages/results/ResultsController"));
interface Props {
  match: any;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

const Main = (props: Props) => {
  const [token, setToken] = React.useState<string | null>("");
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const { data: repositoryData } = useQuery(GET_REPOSITORIES, {
    variables: { queryString: searchTerm },
  });
  const { data: userData } = useQuery(GET_USERS, {
    variables: { queryString: searchTerm },
  });

  React.useEffect(() => {
    setToken(localStorage.getItem("access_token"));
  }, []);
  return (
    <>
      <Switch>
        <Route
          exact
          path="/result/:searchTerm"
          render={(props) => {
            if (!token) return <Redirect to="/login" />;
            //@ts-ignore
            return <Result searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm}
            repositoryData={repositoryData}
            userData={userData} {...props} />;
          }}
        />
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
          path="/search"
          render={(props) => {
            if (!token) return <Redirect to="/login" />;
            //@ts-ignore
            return <Search searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm}
            {...props} />;
          }}
        />
        <Route
          exact
          path="/"
          render={(props) => {
            if (!token) return <Login />;
            //@ts-ignore
            return <Search searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} {...props} />;
          }}
        />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Main;
