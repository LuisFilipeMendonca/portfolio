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
  ProjectGithubContainer,
  ProjectGithubLink,
} from "./styled";

import BaseButton from "../BaseButton";

import useAnimation from "../../hook/useAnimation";

const Project = ({
  id,
  mobileImg,
  desktopImg,
  tabletImg,
  title,
  description,
  setVideoHandler,
  githubRefs,
}) => {
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
          <ProjectGithubContainer>
            {githubRefs.map(({ id, value }) => (
              <ProjectGithubLink href={value} key={id} target="_blank">
                <FaGithub />
                <ProjectLinkDescription>
                  {id} - Source Code
                </ProjectLinkDescription>
              </ProjectGithubLink>
            ))}
          </ProjectGithubContainer>
          <BaseButton
            type="button"
            role="button"
            classname="primary"
            clickHandler={() => setVideoHandler(id)}
          >
            Watch preview
          </BaseButton>
        </ProjectCTA>
      </ProjectInformation>
    </ProjectContainer>
  );
};

export default Project;
