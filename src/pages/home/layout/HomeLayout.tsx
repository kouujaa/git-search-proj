import React from "react";
import { NavLink } from "react-router-dom";
import NewSearch from "../../components/NewSearch";
import Button from "../../components/Button";
import VisitorOptions from "../../components/VisitorOptions";
import useStyles from "./HomeLayout.style";
export interface Props {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const HomeLayout: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
  const classes = useStyles();
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
        }}
      >
        <VisitorOptions onLogOut={() => {}} />
      </div>
      <div className={classes.container}>
        <div className={classes.mb40}>
          <img
            src="/gitHub-Emblem.png"
            alt="gitHub_logo"
            height={120}
            width={205}
          />
        </div>
        <NewSearch data-testid="searchInput" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <NavLink
          to={`/result/${searchTerm}`}
          style={{ textDecoration: "none" }}
        >
          <Button data-testid="searchBtn" title={"Search Github"} height={"40px"} width={"179px"} />
        </NavLink>
      </div>
    </>
  );
};

export default HomeLayout;
