import React from "react";
import Header from "./header";

import * as styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, navLogo }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} navLogo={navLogo} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
        © Slower Motions {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
