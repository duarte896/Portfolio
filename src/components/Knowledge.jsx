import styles from "./Knowledge.module.css";
import JavaScriptLogo from "../img/JavaScript-logo.png";
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

function Knowledge() {
  return (
    <div className="container">
      <div>
        <h2 className={styles.section_title}>SKILLS & HABILITIES</h2>
        <p className={styles.main_title}>KNOWLEDGE</p>
      </div>
      <div className="row mt-5 ">
        <div className="col-lg-3 text-center mb-5">
          <img
            className={styles.tec_images}
            src={FrontEndLogo}
            alt="
          frontend Logo"
          />
        </div>
        <div className="col-lg-3 text-center mb-5">
          <img
            className={styles.tec_images}
            src={BackEndLogo}
            alt="backend Logo"
          />
        </div>
        <div className="col-lg-3 text-center mb-5">
          <img className={styles.tec_images} src={HTMLLogo} alt="html Logo" />
        </div>
        <div className="col-lg-3 text-center mb-5">
          <img
            className={styles.tec_images}
            src={JavaScriptLogo}
            alt="JavaScript Logo"
          />
        </div>
        <div className="col-lg-3 text-center mb-5">
          <img
            className={styles.tec_images}
            src={TypeScriptLogo}
            alt="TypeScript Logo"
          />
        </div>
        <div className="col-lg-3 text-center mb-5">
          <img
            className={styles.tec_images}
            src={BootstrapLogo}
            alt="bootstrap Logo"
          />
        </div>
        <div className="col-lg-3 text-center mb-5">
          <img
            className={styles.tec_images}
            src={TailwindLogo}
            alt="Tailwind Logo"
          />
        </div>
        <div className="col-lg-3 text-center mb-5">
          <img className={styles.tec_images} src={ReactLogo} alt="React Logo" />
        </div>
        <div className="col-lg-3 text-center mb-5">
          <img className={styles.tec_images} src={NodeLogo} alt="node Logo" />
        </div>
        <div className="col-lg-3 text-center mb-5">
          <img
            className={styles.tec_images}
            src={MongoDBLogo}
            alt="mongodb Logo"
          />
        </div>
        <div className="col-lg-3 text-center mb-5">
          <img className={styles.tec_images} src={MySQLLogo} alt="mysql Logo" />
        </div>
        <div className="col-lg-3 text-center mb-5">
          <img
            className={styles.tec_images}
            src={ResponsiveLogo}
            alt="responsive Logo"
          />
        </div>
        <div className="col-lg-3 text-center mb-5">
          <img className={styles.tec_images} src={GitLogo} alt="git Logo" />
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
