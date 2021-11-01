import React from "react";
import HomeLayout from "./layout/HomeLayout";

export default function HomeController() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const onSearch = React.useCallback(() => {
    setSearchTerm("");
  }, []);

  return (
    <HomeLayout
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      onSearch={onSearch}
    />
  );
}
