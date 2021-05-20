import React from "react";
import { FaGithub } from "react-icons/fa";

import {
  ProjectContainer,
  ProjectPreview,
  ProjectInformation,
  MobileContainer,
  DeviceImg,
  DesktopContainer,
  TabletContainer,
  ProjectTitle,
  ProjectDescriptionContainer,
  ProjectDescription,
  ProjectCTA,
  ProjectLinkDescription,
} from "./styled";

import BaseButton from "../BaseButton";

import useAnimation from "../../hook/useAnimation";

const Project = ({ mobileImg, desktopImg, tabletImg, title, description }) => {
  const { ref } = useAnimation();
  return (
    <ProjectContainer
      ref={ref}
      data-animation="fade-right"
      data-duration="0.5s"
    >
      <ProjectPreview>
        <MobileContainer>
          <DeviceImg src={mobileImg} />
        </MobileContainer>
        <DesktopContainer>
          <DeviceImg src={desktopImg} />
        </DesktopContainer>
        <TabletContainer>
          <DeviceImg src={tabletImg} />
        </TabletContainer>
      </ProjectPreview>
      <ProjectInformation>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescriptionContainer>
          {description.map(({ id, value }) => (
            <ProjectDescription key={id}>{value}</ProjectDescription>
          ))}
        </ProjectDescriptionContainer>
        <ProjectCTA>
          <BaseButton path="/" role="link" classname="secondary">
            <FaGithub />
            <ProjectLinkDescription>Source code</ProjectLinkDescription>
          </BaseButton>
          <BaseButton type="button" role="button" classname="primary">
            Watch preview
          </BaseButton>
        </ProjectCTA>
      </ProjectInformation>
    </ProjectContainer>
  );
};

export default Project;
