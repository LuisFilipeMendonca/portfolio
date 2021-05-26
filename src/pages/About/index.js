import React from "react";

import { AboutSection, AboutContent, AboutText } from "./styled";

import useAnimation from "../../hook/useAnimation";

const AboutPage = () => {
  const { ref } = useAnimation();

  return (
    <AboutSection>
      <AboutContent ref={ref} data-animation="fade-bottom" data-duration="0.5s">
        <AboutText>
          Hello, my name is Luis Filipe Severino Mendonça. I'm Luis to my
          family, Filipe for my friends and Luis Filipe when my mom is angry. I
          was born and lived since then in a small island of Portugal called
          Madeira in January of 1992.
        </AboutText>
        <AboutText>
          At the age of 18, I started working in a supermarket near my home,
          where I perfomed several tasks, as a cashier, butcher, store decorator
          and repository.
        </AboutText>
        <AboutText>
          A few months later I started an Electronic and Telecommunications
          Engineering degree at the University of Madeira. A few years later,
          and after observing several "incorrect behaviors", I decided to put
          the degree aside for a while, because for me it has become something
          commonplace. I believe in hard work, self motivation and discipline,
          and that's my goal with this portfolio. To show you the real reasons
          why you should hire me.
        </AboutText>
        <AboutText>
          At this moment I feel that I have achieved all that I could by my own,
          so I'm looking for a company that could provide me new challenges and
          thereby improve my skills and with that help the company growth. A
          "quid pro quo" relation.
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
};

export default AboutPage;
