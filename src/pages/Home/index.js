import React from "react";

import {
  HomeSection,
  HomeContent,
  HomeInfo,
  HomeProfilePhoto,
  HomeInfoTitle,
  HomeInfoSecondaryTitle,
  HomeInfoQuote,
  HomeProfilePhotoContainer,
} from "./styled";

import Bg from "../../assets/img/bg.jpg";
import ProfilePhoto from "../../assets/img/profile.jpg";

import useAnimation from "../../hook/useAnimation";

const HomePage = () => {
  const { ref: contentRef } = useAnimation();
  const { ref: imgRef } = useAnimation();
  const { ref: mainTitleRef } = useAnimation();
  const { ref: secondaryTitleRef } = useAnimation();
  const { ref: quoteRef } = useAnimation();

  return (
    <HomeSection bg={Bg}>
      <HomeContent
        ref={contentRef}
        data-animation="fade-top"
        data-delay="0s"
        data-duration="0.5s"
      >
        <HomeInfo>
          <HomeInfoTitle
            ref={mainTitleRef}
            data-animation="fade-bottom"
            data-delay="0.5s"
            data-duration="0.5s"
          >
            Hello there. I'm Filipe.
          </HomeInfoTitle>
          <HomeInfoSecondaryTitle
            ref={secondaryTitleRef}
            data-animation="fade-bottom"
            data-delay="1s"
            data-duration="0.5s"
          >
            I'm a selft taught developer in a quest to become a full stack
            developer.
          </HomeInfoSecondaryTitle>
          <HomeInfoQuote
            ref={quoteRef}
            data-animation="fade-bottom"
            data-delay="1.5s"
            data-duration="0.5s"
          >
            <q>
              In a world full of game players, the only way to set yourself
              apart is to be a game changer.
            </q>
            <span> - Matshona Dhliwayo</span>
          </HomeInfoQuote>
        </HomeInfo>
        <HomeProfilePhotoContainer
          ref={imgRef}
          data-animation="fade-right"
          data-delay="0.5s"
          data-duration="0.5s"
        >
          <HomeProfilePhoto src={ProfilePhoto} />
        </HomeProfilePhotoContainer>
      </HomeContent>
    </HomeSection>
  );
};

export default HomePage;
