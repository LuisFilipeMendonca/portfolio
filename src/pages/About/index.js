import React from "react";

import { AboutSection, AboutContent, AboutText } from "./styled";

import useAnimation from "../../hook/useAnimation";

const AboutPage = () => {
  const { ref } = useAnimation();

  return (
    <AboutSection>
      <AboutContent ref={ref} data-animation="fade-bottom" data-duration="0.5s">
        <AboutText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </AboutText>
        <AboutText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </AboutText>
        <AboutText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </AboutText>
        <AboutText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </AboutText>
        <AboutText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
};

export default AboutPage;
