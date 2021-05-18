import React from "react";
import { FaGithub } from "react-icons/fa";

import rickMobile from "../../assets/img/rick_mobile.png";
import rickDesktop from "../../assets/img/rick_desktop.png";
import rickTablet from "../../assets/img/rick_tablet.png";

import dailyMobile from "../../assets/img/daily_mobile.png";
import dailyDesktop from "../../assets/img/daily_desktop.png";
import dailyTablet from "../../assets/img/daily_tablet.png";

import foodgramMobile from "../../assets/img/foodgram_mobile.png";
import foodgramDesktop from "../../assets/img/foodgram_desktop.png";
import foodgramTablet from "../../assets/img/foodgram_tablet.png";

import socialMobile from "../../assets/img/social_mobile.png";
import socialDesktop from "../../assets/img/social_desktop.png";
import socialTablet from "../../assets/img/social_tablet.png";

import {
  ProjectsSection,
  ProjectsContent,
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
    <ProjectsSection>
      <ProjectsContent>
        <ProjectContainer>
          <ProjectPreview>
            <MobileContainer>
              <MobileImg src={rickMobile} />
            </MobileContainer>
            <DesktopContainer>
              <MobileImg src={rickDesktop} />
            </DesktopContainer>
            <TabletContainer>
              <MobileImg src={rickTablet} />
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
                by the API and a SearchBox to search for your favorite
                characters.
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
              <MobileImg src={dailyMobile} />
            </MobileContainer>
            <DesktopContainer>
              <MobileImg src={dailyDesktop} />
            </DesktopContainer>
            <TabletContainer>
              <MobileImg src={dailyTablet} />
            </TabletContainer>
          </ProjectPreview>
          <ProjectInformation>
            <ProjectTitle>The Daily Manager</ProjectTitle>
            <ProjectDescriptionContainer>
              <ProjectDescription>
                This was my first full stack app, and my first experience with
                VueJS and Express. I also used Vuex has global state manager and
                Sequelize ORM to connect to MySQL Database.
              </ProjectDescription>
              <ProjectDescription>
                In this application you can register and login into your
                account. Manage your contacts list by adding and removing them
                as well as your schedule using the task manager.
              </ProjectDescription>
              <ProjectDescription>
                You can also control your account by adding your income and
                outcomes. It has also a chronometer if you need a time manager.
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
              <MobileImg src={foodgramMobile} />
            </MobileContainer>
            <DesktopContainer>
              <MobileImg src={foodgramDesktop} />
            </DesktopContainer>
            <TabletContainer>
              <MobileImg src={foodgramTablet} />
            </TabletContainer>
          </ProjectPreview>
          <ProjectInformation>
            <ProjectTitle>Foodgram</ProjectTitle>
            <ProjectDescriptionContainer>
              <ProjectDescription>
                My first MERN stack application, and also the first time I used
                Typescript and @redux-toolkit as a global state manager.
              </ProjectDescription>
              <ProjectDescription>
                In this application you can register, login and ask for a
                password reset if you forget it. Here you will find a bunch of
                recipies where you can see the ingredients and also the steps to
                make them. You can also create or delete your own recipies, add
                recipies from other users to your favorites and also rate them.
              </ProjectDescription>
              <ProjectDescription>
                You will also find features like search a recipie by name, order
                them by date or rate and also choose how many recipies you want
                to see per page.
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
              <MobileImg src={socialMobile} />
            </MobileContainer>
            <DesktopContainer>
              <MobileImg src={socialDesktop} />
            </DesktopContainer>
            <TabletContainer>
              <MobileImg src={socialTablet} />
            </TabletContainer>
          </ProjectPreview>
          <ProjectInformation>
            <ProjectTitle>Social Network</ProjectTitle>
            <ProjectDescriptionContainer>
              <ProjectDescription>
                My first MERN stack application, and also the first time I used
                Typescript and @redux-toolkit as a global state manager.
              </ProjectDescription>
              <ProjectDescription>
                In this application you can register, login and ask for a
                password reset if you forget it. Here you will find a bunch of
                recipies where you can see the ingredients and also the steps to
                make them. You can also create or delete your own recipies, add
                recipies from other users to your favorites and also rate them.
              </ProjectDescription>
              <ProjectDescription>
                You will also find features like search a recipie by name, order
                them by date or rate and also choose how many recipies you want
                to see per page.
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
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default ProjectsPages;
