import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";

import * as styles from "./project-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

const ArticleLink = styled(Link)` 
display: block;
  color: inherit;
  text-decoration: none;
  background-color: var(--color-light-blue);
  margin-bottom: 0.5rem;
  padding: 0.25rem;
  width: fit-content;
  color: var(--color-white);
  &:hover {
    /* background-color: var(--color-yellow); */
    text-decoration: underline;
  }
`

function ProjectPreview(props) {
  return (
    <ArticleLink to={`/interview/${props.slug.current}`}>
      {/* <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div> */}
      {/* <h5 className={cn(responsiveTitle3, styles.title)}>{props.title}</h5> */}
      <small>{props.title}</small>
      {/* {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockContent blocks={props._rawExcerpt} />
        </div>
      )} */}
    </ArticleLink>
  );
}

export default ProjectPreview;
