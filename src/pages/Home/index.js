import React from "react";

import {
  HomeSection,
  HomeContent,
  HomeTitle,
  HomeSecondaryTitle,
  HomeQuote,
} from "./styled";

import useAnimation from "../../hook/useAnimation";

import BaseButton from "../../components/BaseButton";

const HomePage = () => {
  const { ref } = useAnimation();

  return (
    <HomeSection>
      <HomeContent ref={ref} data-animation="fade-bottom" data-duration="0.5s">
        <HomeTitle>Hi, I'm Filipe.</HomeTitle>
        <HomeSecondaryTitle>
          I'm a self-taught developer in a quest to become a full stack
          developer.
        </HomeSecondaryTitle>
        <HomeQuote>
          <q>
            In a world full of game players, the only way to set yourself apart
            is to be a game changer.
          </q>
          <span> - Matshona Dhliwayo</span>
        </HomeQuote>
        <BaseButton
          type="link"
          path="/projects"
          classname="secondary"
          role="link"
        >
          See my work
        </BaseButton>
      </HomeContent>
    </HomeSection>
  );
};

export default HomePage;
