import styled from "styled-components";
import { Section } from "../../style";
import { Link } from "react-router-dom";

export const ProjectsSection = styled(Section)`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `calc(${theme.dimensions.navbar} + 1rem)`} 1rem;
`;

export const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export const ProjectContainer = styled.article`
  border: 1px solid #ccc;
  padding: 2rem 1rem;
  background-color: rgba(56, 56, 55, 0.1);
  border-radius: 3px;
  color: #383837;
  border: 1px solid #fc6b3f;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const ProjectPreview = styled.div`
  display: flex;
  justify-content: space-around;
  height: 13rem;
  position: relative;
`;

export const ProjectInformation = styled.div`
  margin-top: 1rem;

  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const ProjectTitle = styled.h2`
  text-align: center;
  color: #fc6b3f;
`;

export const ProjectDescriptionContainer = styled.div``;

export const ProjectDescription = styled.p`
  text-align: justify;
  text-indent: 2rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ProjectCTA = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProjectLink = styled(Link)`
  display: flex;
  align-items: center;
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
  position: absolute;
  transform: translate(-10rem, 2rem);
  z-index: 1;

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
`;

export const MobileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const DesktopContainer = styled.div`
  width: 12rem;
  height: 9rem;
  background-color: #383837;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 10px 4px 12px;
  position: absolute;
  transform: translate(-2rem, 0);

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
    width: 110%;
    height: 6px;
    background-color: #383837;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 1px;
  }
`;

export const TabletContainer = styled.div`
  width: 11rem;
  height: 8rem;
  background-color: #383837;
  border-radius: 4px;
  padding: 10px 4px 12px;
  position: absolute;
  transform: translate(7rem, 4rem);

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
`;
