import { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

import twitter from "assets/images/twitter@2x.png";
import medium from "assets/images/medium@2x.png";
import linkedin from "assets/images/linkedin@2x.png";
import standardLogo from "assets/images/standard-logo.png";

const useStyles = createUseStyles((Themes) => {
  return {
    footer: {
      color: "#fff",
    },
    logo: {
      marginBottom: "25px",
      width: "200px",
    },
    footer_sub_title: {
      fontWeight: 600,
      fontSize: "16px",
    },
  };
});

function Footer(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <div
      className={classNames("container", classes.footer)}
      style={{ paddingTop: "24px" }}
    >
      <div className="row text-left">
        <div className="col-xs-12 col-md-3 footer-main-section">
          <img className={classes.logo} src={standardLogo} alt="logo" />
          <p>
            The Standard for
            <br />
            Digital Assets
          </p>
        </div>

        <div className="col-xs-12 col-md-2 col-md-offset-1 desktop-collapse-section">
          <p
            className={classNames("footer-sub-title", classes.footer_sub_title)}
          >
            Documentations
          </p>
          <a
            className="footer-link"
            href="https://whitepaper.standard.tech/"
            target="_blank"
            rel="noopener noreferrer"
            alt="white-paper"
          >
            White Paper
          </a>
          <a
            className="footer-link"
            href="https://github.com/w3f/Open-Grants-Program/pull/244"
            target="_blank"
            rel="noopener noreferrer"
            alt="grant-application"
          >
            Grant Application
          </a>
        </div>

        <div className="col-xs-12 col-md-2 desktop-collapse-section">
          <p
            className={classNames("footer-sub-title", classes.footer_sub_title)}
          >
            Links
          </p>
          <a
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/digitalnativeinc/standard-substrate"
            alt="github"
          >
            GitHub
          </a>
          <a
            className="footer-link"
            href="https://docs.standard.tech"
            target="_blank"
            rel="noopener noreferrer"
            alt="documentation"
          >
            Documentation
          </a>
          <a className="footer-link" href="#" alt="#">
            Blog
          </a>
        </div>

        <div className="col-xs-12 mobile-collapse-section">
          <div id="papers">
            <a
              href="https://whitepaper.standard.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              alt="white-paper"
            >
              White Paper
            </a>
            <a
              className="footer-link"
              alt="grant-application"
              href="https://github.com/w3f/Open-Grants-Program/pull/244"
              target="_blank"
              rel="noopener noreferrer"
            >
              Grant Application
            </a>
          </div>
        </div>

        <div className="col-xs-12 mobile-collapse-section">
          <div id="link">
            <a
              className="footer-link"
              href="https://github.com/digitalnativeinc/standard-substrate"
              alt="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="footer-link"
              href="https://docs.standard.tech"
              alt="documentation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
            <a className="footer-link" href="#" alt="#">
              Blog
            </a>
          </div>
        </div>

        <div className="col-xs-12 col-md-4 social-section">
          <p
            className={classNames("footer-sub-title", classes.footer_sub_title)}
          >
            Socials
          </p>
          <div>
            <a href="#" target="_blank">
              <img className="social-icon" src={twitter} alt="twitter" />
            </a>
            <a href="#" target="_blank">
              <img className="social-icon" src={medium} alt="medium" />
            </a>
            <a href="#" target="_blank">
              <img className="social-icon" src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="row text-left mid-padding-y">
        <div className="col-md-12">© 2021 Standard</div>
      </div>
    </div>
  );
}

export default Footer;
