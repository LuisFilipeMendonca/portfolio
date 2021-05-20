import React, { useState } from "react";

import { ProjectsSection, ProjectsContent } from "./styled";

import { projects } from "../../constants";

import Project from "../../components/Project";
import Modal from "../../components/Modal";

const ProjectsPages = () => {
  const [videoRef, setVideoRef] = useState("");

  const setVideoRefHandler = (id) => {
    setVideoRef(id);
  };

  const closeModalHandler = () => setVideoRef("");

  return (
    <ProjectsSection>
      <Modal show={!!videoRef} closeHandler={closeModalHandler}>
        <div>Ola</div>
      </Modal>
      <ProjectsContent>
        {projects.map(
          ({ id, mobileImg, desktopImg, tabletImg, title, description }) => (
            <Project
              id={id}
              key={id}
              mobileImg={mobileImg}
              desktopImg={desktopImg}
              tabletImg={tabletImg}
              title={title}
              description={description}
              setVideoHandler={setVideoRefHandler}
            />
          )
        )}
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default ProjectsPages;
