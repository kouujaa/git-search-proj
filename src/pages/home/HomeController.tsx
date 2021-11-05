import React from "react";
import HomeLayout from "./layout/HomeLayout";
interface Props {
  match: any;
  searchTerm: any;
  setSearchTerm: any;
}

const HomeController: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
  return <HomeLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;
};

export default HomeController;
