import React from "react";
import { FaGithub } from "react-icons/fa";

import mobileImage from "../../assets/img/mobile.png";
import desktopImage from "../../assets/img/desktop.png";
import tabletImage from "../../assets/img/tablet.png";

import {
  ProjectsSection,
  SectionTitle,
  ProjectContainer,
  ProjectPreview,
  ProjectInformation,
  MobileContainer,
  MobileImg,
  DesktopContainer,
  TabletContainer,
  ProjectTitle,
  ProjectDescriptionContainer,
  ProjectDescription,
  ProjectCTA,
  ProjectLink,
  ProjectLinkDescription,
} from "./styled";

const ProjectsPages = () => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectContainer>
        <ProjectPreview>
          <MobileContainer>
            <MobileImg src={mobileImage} />
          </MobileContainer>
          <DesktopContainer>
            <MobileImg src={desktopImage} />
          </DesktopContainer>
          <TabletContainer>
            <MobileImg src={tabletImage} />
          </TabletContainer>
        </ProjectPreview>
        <ProjectInformation>
          <ProjectTitle>Rick and Morty</ProjectTitle>
          <ProjectDescriptionContainer>
            <ProjectDescription>
              This was my first project using React. A simple user interface
              design using the Rick and Morty API.
            </ProjectDescription>
            <ProjectDescription>
              It has features such as a Carousel where the characters are
              displayed, a Pagination to search the list of characters offered
              by the API and a SearchBox to search for your favorite characters.
            </ProjectDescription>
          </ProjectDescriptionContainer>
          <ProjectCTA>
            <ProjectLink to="/">
              <FaGithub />
              <ProjectLinkDescription>See source code</ProjectLinkDescription>
            </ProjectLink>
            <button>Watch preview</button>
          </ProjectCTA>
        </ProjectInformation>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectPreview>
          <MobileContainer>
            <MobileImg src={mobileImage} />
          </MobileContainer>
          <DesktopContainer>
            <MobileImg src={desktopImage} />
          </DesktopContainer>
          <TabletContainer>
            <MobileImg src={tabletImage} />
          </TabletContainer>
        </ProjectPreview>
        <ProjectInformation>
          <ProjectTitle>Rick and Morty</ProjectTitle>
          <ProjectDescriptionContainer>
            <ProjectDescription>
              This was my first project using React. A simple user interface
              design using the Rick and Morty API.
            </ProjectDescription>
            <ProjectDescription>
              It has features such as a Carousel where the characters are
              displayed, a Pagination to search the list of characters offered
              by the API and a SearchBox to search for your favorite characters.
            </ProjectDescription>
          </ProjectDescriptionContainer>
          <ProjectCTA>
            <ProjectLink to="/">
              <FaGithub />
              <ProjectLinkDescription>See source code</ProjectLinkDescription>
            </ProjectLink>
            <button>Watch preview</button>
          </ProjectCTA>
        </ProjectInformation>
      </ProjectContainer>
    </ProjectsSection>
  );
};

export default ProjectsPages;
