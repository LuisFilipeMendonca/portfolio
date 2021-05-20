import React, { useState } from "react";

import { ProjectsSection, ProjectsContent } from "./styled";

import { projects } from "../../constants";

import Project from "../../components/Project";
import Modal from "../../components/Modal";

import Video from "../../assets/video/video.mp4";

const ProjectsPages = () => {
  const [videoRef, setVideoRef] = useState("");

  const setVideoRefHandler = (id) => {
    setVideoRef(id);
  };

  const closeModalHandler = () => setVideoRef("");

  return (
    <ProjectsSection>
      <Modal show={!!videoRef} closeHandler={closeModalHandler}>
        <video controls>
          <source src={Video} type="video/mp4" />
        </video>
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
