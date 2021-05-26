import styled from "styled-components";

export const ProjectContainer = styled.article`
  padding: 2rem 1rem;
  background: rgba(61, 61, 61, 0.5);
  border-radius: 3px;
  color: #f5f5f5;
  border: 1px solid #fd8b68;
  width: 100%;
  max-width: 45rem;
  opacity: 0;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
`;

export const ProjectPreview = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const ProjectInformation = styled.div``;

export const ProjectTitle = styled.h2`
  text-align: center;
  color: #fd8b68;
  margin-bottom: 1.5rem;
`;

export const ProjectDescriptionContainer = styled.div`
  margin-bottom: 3rem;
`;

export const ProjectDescription = styled.p`
  text-indent: 2rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ProjectLinkDescription = styled.span`
  margin-left: 0.5rem;
`;

export const MobileContainer = styled.div`
  width: 5.5rem;
  height: 10rem;
  background-color: #383837;
  border-radius: 8px;
  padding: 10px 4px 12px;
  position: relative;
  border: 1px solid #f5f5f5;

  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #383837;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    -moz-box-shadow: inset 0 0 10px #ccc;
    -webkit-box-shadow: inset 0 0 10px #ccc;
    box-shadow: inset 0 0 1px #ccc;
  }

  &:after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #383837;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
    -moz-box-shadow: inset 0 0 10px #ccc;
    -webkit-box-shadow: inset 0 0 10px #ccc;
    box-shadow: inset 0 0 1px #ccc;
  }

  @media screen and (min-width: 768px) {
    width: 6.5rem;
    height: 12rem;
  }
`;

export const DeviceImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const DesktopContainer = styled.div`
  width: 14rem;
  height: 10rem;
  background-color: #383837;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 10px 4px 12px;
  position: relative;
  border: 1px solid #f5f5f5;

  &:after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #383837;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    -moz-box-shadow: inset 0 0 10px #ccc;
    -webkit-box-shadow: inset 0 0 10px #ccc;
    box-shadow: inset 0 0 1px #ccc;
  }

  &:before {
    position: absolute;
    content: "";
    width: 120%;
    height: 6px;
    background-color: #383837;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 1px;
    border: 1px solid #f5f5f5;
  }

  @media screen and (min-width: 768px) {
    width: 16rem;
    height: 11rem;
  }
`;

export const TabletContainer = styled.div`
  width: 12rem;
  height: 9rem;
  background-color: #383837;
  border-radius: 4px;
  padding: 10px 4px 12px;
  position: relative;
  display: none;
  border: 1px solid #f5f5f5;

  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #383837;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: inset 0 0 1px #ccc;
  }

  &:after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #383837;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: inset 0 0 1px #ccc;
  }

  @media screen and (min-width: 576px) {
    display: block;
  }

  @media screen and (min-width: 768px) {
    width: 14rem;
    height: 10rem;
  }
`;

export const ProjectCTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > *:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const ProjectGithubContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

export const ProjectGithubLink = styled.a`
  color: #f5f5f5;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;
