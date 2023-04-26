import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import ProjectPreview from "./project-preview";

import * as styles from "./project-preview-grid.module.css";

const HomeTitle = styled.h3` 
  font-size: 1rem;
  /* text-transform: uppercase; */
  letter-spacing: 0.5px;
  margin: 2rem 0;
`


function ProjectPreviewGrid(props) {
  return (
    <div className={styles.root}>
      {props.title && <HomeTitle>{props.title}</HomeTitle>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <small>
            <Link to={props.browseMoreHref}>Browse more</Link>
          </small>
        </div>
      )}
    </div>
  );
}

ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default ProjectPreviewGrid;
