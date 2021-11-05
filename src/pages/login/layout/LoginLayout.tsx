import React from "react";
import GitHubLogin from "react-github-login";

import "./loginbutton.css";
import useStyles from "./LoginLayout.style";
import { CLILENT_ID } from "../../../utils/keys";

export interface Props {
  onSuccess: (response: any) => void;
  onFailure: (response: any) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginLayout: React.FC<Props> = ({
  onSuccess,
  onFailure,
  loading,
  setLoading,
}) => {
  const classes = useStyles();
  return (
    <div data-testid="loginBtn">
      <GitHubLogin
        clientId={CLILENT_ID}
        redirectUri={"http://localhost:3000"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        onRequest={() => {
          setLoading(true);
        }}
        disabled={loading}
        className={classes.button}
        buttonText={loading ? "Authenticating..." : "Login to Github"}
      />
    </div>
  );
};

export default LoginLayout;
