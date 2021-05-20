import React, { useState, useRef } from "react";

import { ProjectsSection, ProjectsContent } from "./styled";

import { projects } from "../../constants";

import Project from "../../components/Project";
import Modal from "../../components/Modal";

import Video from "../../assets/video/video.mp4";

const ProjectsPages = () => {
  const [selectedVideo, setSelectedVideo] = useState("");
  const videoRef = useRef();

  const setVideoRefHandler = (id) => {
    setSelectedVideo(id);
  };

  const closeModalHandler = () => setSelectedVideo("");

  return (
    <ProjectsSection>
      <Modal show={!!selectedVideo} closeHandler={closeModalHandler}>
        <video
          controls
          ref={videoRef}
          onLoadStart={() => console.log("started")}
          onLoadedData={() => console.log("data loaded")}
        >
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
