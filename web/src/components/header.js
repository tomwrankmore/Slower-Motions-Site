import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import {device} from '../styles/mediaQueries'

import * as styles from "./header.module.css";

const Branding = styled.div` 
  font-weight: 600;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mediaMinSmall} {
    flex: inherit;
  }

  & a {
    display: inline-block;
    padding: 0.5em;
    color: inherit;
    text-decoration: none;
  }
`

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, navLogo }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <Branding>
        <Link to="/">
          {navLogo ? <img className={styles.logo} src={navLogo.asset.gatsbyImageData.images.fallback.src} alt="logo" /> : <h3>{siteTitle}</h3>}
        </Link>
      </Branding>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
