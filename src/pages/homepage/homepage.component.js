import React from "react";
import { HomePageContainer } from "./homepage.styled";
import Directory from "../../components/directory/directory.component";
const HomePage = () => {
  return (
    <HomePageContainer>
      <div className="directory-menu">
        <Directory />
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
