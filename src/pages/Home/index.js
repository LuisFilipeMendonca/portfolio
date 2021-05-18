import React from "react";

import {
  HomeSection,
  HomeContent,
  HomeTitle,
  HomeSecondaryTitle,
  HomeQuote,
} from "./styled";

const HomePage = () => {
  return (
    <HomeSection>
      <HomeContent>
        <HomeTitle>Hi, I'm Filipe.</HomeTitle>
        <HomeSecondaryTitle>
          I'm a self taught developer in a quest to become a full stack
          developer.
        </HomeSecondaryTitle>
        <HomeQuote>
          <q>
            In a world full of game players, the only way to set yourself apart
            is to be a game changer.
          </q>
          <span> - Matshona Dhliwayo</span>
        </HomeQuote>
        <button>See my work</button>
      </HomeContent>
    </HomeSection>
  );
};

export default HomePage;
