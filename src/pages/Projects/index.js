import React from "react";

import { ProjectsSection, ProjectsContent } from "./styled";

import { projects } from "../../constants";

import Project from "../../components/Project";

const ProjectsPages = () => {
  return (
    <ProjectsSection>
      <ProjectsContent>
        {projects.map(
          ({ id, mobileImg, desktopImg, tabletImg, title, description }) => (
            <Project
              key={id}
              mobileImg={mobileImg}
              desktopImg={desktopImg}
              tabletImg={tabletImg}
              title={title}
              description={description}
            />
          )
        )}
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default ProjectsPages;
