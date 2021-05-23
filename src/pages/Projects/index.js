import React, { useState } from "react";

import { ProjectsSection, ProjectsContent } from "./styled";

import { projects } from "../../constants";

import Project from "../../components/Project";
import Modal from "../../components/Modal";

const ProjectsPages = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState("");

  const setVideoRefHandler = (video) => {
    setSelectedVideoIndex(video);
  };

  const closeModalHandler = () => setSelectedVideoIndex("");

  return (
    <ProjectsSection>
      <Modal show={!!selectedVideoIndex} closeHandler={closeModalHandler}>
        <div>
          <video controls>
            <source src={selectedVideoIndex} type="video/mp4" />
          </video>
        </div>
      </Modal>
      <ProjectsContent>
        {projects.map(
          ({
            id,
            mobileImg,
            desktopImg,
            tabletImg,
            title,
            description,
            video,
          }) => (
            <Project
              id={id}
              key={id}
              mobileImg={mobileImg}
              desktopImg={desktopImg}
              tabletImg={tabletImg}
              title={title}
              description={description}
              setVideoHandler={() => setVideoRefHandler(video)}
            />
          )
        )}
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default ProjectsPages;
