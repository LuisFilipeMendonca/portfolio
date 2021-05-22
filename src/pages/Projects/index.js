import React, { useState, useRef } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

import { ProjectsSection, ProjectsContent } from "./styled";

import { projects } from "../../constants";

import Project from "../../components/Project";
import Modal from "../../components/Modal";

import Video from "../../assets/video/video.mp4";

const ProjectsPages = () => {
  const [selectedVideo, setSelectedVideo] = useState("");
  const [isVideoPaused, setIsVideoPaused] = useState(true);
  const videoRef = useRef();

  const setVideoRefHandler = (id) => {
    setSelectedVideo(id);
  };

  const closeModalHandler = () => setSelectedVideo("");

  const toggleVideoHandler = () => setIsVideoPaused((prev) => !prev);

  const startPauseVideoHandler = () => {
    if (isVideoPaused) videoRef.current.play();
    else videoRef.current.pause();
    toggleVideoHandler();
  };

  return (
    <ProjectsSection>
      <Modal show={!!selectedVideo} closeHandler={closeModalHandler}>
        <div>
          <video ref={videoRef} onEnded={toggleVideoHandler}>
            <source src={Video} type="video/mp4" />
          </video>
          <button onClick={startPauseVideoHandler}>
            {isVideoPaused ? <FaPlayCircle /> : <FaPauseCircle />}
          </button>
        </div>
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
