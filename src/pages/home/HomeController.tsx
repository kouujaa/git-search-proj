import React from "react";
import HomeLayout from "./layout/HomeLayout";
interface Props {
  searchTerm: string;
  setSearchTerm: () => void;
}

const HomeController: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
  return <HomeLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;
};

export default HomeController;
