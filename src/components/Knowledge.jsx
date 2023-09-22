import styles from "./Knowledge.module.css";
import JavaScriptLogo from "../img/js-logo.png";
import ReactLogo from "../img/React-logo.png";
import NodeLogo from "../img/Node-logo.png";
import TypeScriptLogo from "../img/TypeScript-logo.png";
import BackEndLogo from "../img/backend-logo.png";
import BootstrapLogo from "../img/bootstrap-logo.png";
import TailwindLogo from "../img/Tailwind-logo.png";
import ExpressLogo from "../img/express-logo.png";
import FrontEndLogo from "../img/frontend-logo.png";
import GitLogo from "../img/git-logo.png";
import HTMLLogo from "../img/html-logo.png";
import MongoDBLogo from "../img/mongodb-logo.png";
import MySQLLogo from "../img/mysql-logo.png";
import ResponsiveLogo from "../img/responsive-design-logo.png";
import { useState } from "react";

function Knowledge() {
  return (
    <div className="container">
      <div>
        <h2 className={styles.section_title}>SKILLS & HABILITIES</h2>
        <p className={styles.main_title}>KNOWLEDGE</p>
      </div>
      <div className={styles.skill_box}>
        <div className="row mt-5">
          <div className="col-lg-3 col-md-4 mb-4">
            <div className={styles.box + " p-2 d-flex align-items-center"}>
              <img
                className={styles.tec_images}
                src={FrontEndLogo}
                alt="frontend Logo"
              />
              <p className="fw-bold m-0">FrontEnd</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-4">
            <div className={styles.box + " p-2 d-flex align-items-center"}>
              <img
                className={styles.tec_images}
                src={BackEndLogo}
                alt="backend Logo"
              />
              <p className="fw-bold m-0">BackEnd</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-4">
            <div className={styles.box + " p-2 d-flex align-items-center"}>
              <img
                className={styles.tec_images}
                src={HTMLLogo}
                alt="html Logo"
              />
              <p className="fw-bold m-0">HTML</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-4">
            <div className={styles.box + " p-2 d-flex align-items-center"}>
              <img
                className={styles.tec_images}
                src={JavaScriptLogo}
                alt="JavaScript Logo"
              />
              <p className="fw-bold m-0">JavaScript</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-4">
            <div className={styles.box + " p-2 d-flex align-items-center"}>
              <img
                className={styles.tec_images}
                src={TypeScriptLogo}
                alt="TypeScript Logo"
              />
              <p className="fw-bold m-0">TypeScript</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-4">
            <div className={styles.box + " p-2 d-flex align-items-center"}>
              <img
                className={styles.tec_images}
                src={BootstrapLogo}
                alt="bootstrap Logo"
              />
              <p className="fw-bold m-0">Bootstrap</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-4">
            <div className={styles.box + " p-2 d-flex align-items-center"}>
              <img
                className={styles.tec_images}
                src={ReactLogo}
                alt="React Logo"
              />
              <p className="fw-bold m-0">React Js</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-4">
            <div className={styles.box + " p-2 d-flex align-items-center"}>
              <img
                className={styles.tec_images}
                src={NodeLogo}
                alt="node Logo"
              />
              <p className="fw-bold m-0">Node Js</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-4">
            <div className={styles.box + " p-2 d-flex align-items-center"}>
              <img
                className={styles.tec_images}
                src={MongoDBLogo}
                alt="mongodb Logo"
              />
              <p className="fw-bold m-0">Mongo DB</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-4">
            <div className={styles.box + " p-2 d-flex align-items-center"}>
              <img
                className={styles.tec_images}
                src={MySQLLogo}
                alt="mysql Logo"
              />
              <p className="fw-bold m-0">MySQL</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-4">
            <div className={styles.box + " p-2 d-flex align-items-center"}>
              <img
                className={styles.tec_images}
                src={ResponsiveLogo}
                alt="responsive Logo"
              />
              <p className="fw-bold m-0">Web Design Responsive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;

/*<div className="col-lg-3 text-center mb-5 border">
          <img className={styles.tec_images} src={GitLogo} alt="git Logo" />
          <h4>Git</h4>
  </div>
  
  <div className="row mt-5 ">
        <div
          className={
            styles.tec_container +
            " col-lg-3 col-md-4 text-center mb-5 me-1 border"
           className="bg-danger"}
        >
          <img
            className={styles.tec_images}
            src={FrontEndLogo}
            alt="
      frontend Logo"
          />
          <p className="fw-bold m-0">FrontEnd</p>
        </div>

        <div
          className={
            styles.tec_container +
            " col-lg-3 col-md-4 text-center mb-5 me-1 border"
          }
        >
          <img
            className={styles.tec_images}
            src={BackEndLogo}
            alt="backend Logo"
          />
          <p className="fw-bold m-0">BackEnd</p>
        </div>
        <div
          className={
            styles.tec_container +
            " col-lg-3 col-md-4 text-center mb-5 me-1 border"
          }
        >
          <img className={styles.tec_images} src={HTMLLogo} alt="html Logo" />
          <p className="fw-bold m-0">HTML</p>
        </div>
        <div
          className={
            styles.tec_container +
            " col-lg-3 col-md-4 text-center mb-5 me-1 border"
          }
        >
          <img
            className={styles.tec_images}
            src={JavaScriptLogo}
            alt="JavaScript Logo"
          />
          <p className="fw-bold m-0">JavaScript</p>
        </div>
        <div
          className={
            styles.tec_container +
            " col-lg-3 col-md-4 text-center mb-5 me-1 border"
          }
        >
          <img
            className={styles.tec_images}
            src={TypeScriptLogo}
            alt="TypeScript Logo"
          />
          <p className="fw-bold m-0">TypeScript</p>
        </div>
        <div
          className={
            styles.tec_container +
            " col-lg-3 col-md-4 text-center mb-5 me-1 border"
          }
        >
          <img
            className={styles.tec_images}
            src={BootstrapLogo}
            alt="bootstrap Logo"
          />
          <p className="fw-bold m-0">Bootstrap</p>
        </div>
        <div
          className={
            styles.tec_container +
            " col-lg-3 col-md-4 text-center mb-5 me-1 border"
          }
        >
          <img className={styles.tec_images} src={ReactLogo} alt="React Logo" />
          <p className="fw-bold m-0">React Js</p>
        </div>
        <div
          className={
            styles.tec_container +
            " col-lg-3 col-md-4 text-center mb-5 me-1 border"
          }
        >
          <img className={styles.tec_images} src={NodeLogo} alt="node Logo" />
          <p className="fw-bold m-0">Node Js</p>
        </div>
        <div
          className={
            styles.tec_container +
            " col-lg-3 col-md-4 text-center mb-5 me-1 border"
          }
        >
          <img
            className={styles.tec_images}
            src={MongoDBLogo}
            alt="mongodb Logo"
          />
          <p className="fw-bold m-0">Mongo DB</p>
        </div>
        <div
          className={
            styles.tec_container +
            " col-lg-3 col-md-4 text-center mb-5 me-1 border"
          }
        >
          <img className={styles.tec_images} src={MySQLLogo} alt="mysql Logo" />
          <p className="fw-bold m-0">MySQL</p>
        </div>
        <div
          className={
            styles.tec_container +
            " col-lg-3 col-md-4 text-center mb-5 me-1 border"
          }
        >
          <img
            className={styles.tec_images}
            src={ResponsiveLogo}
            alt="responsive Logo"
          />
          <p className="fw-bold m-0">Web Design Responsive</p>
        </div>
      </div>*/
