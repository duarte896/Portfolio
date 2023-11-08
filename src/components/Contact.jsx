import image from "../img/pinkFloyd.png";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className="container mt-5">
      <div>
        <h2 className={styles.section_title}>CONTACT</h2>
        <p className={styles.main_title}>CONTACT ME</p>
      </div>
      <div className={styles.contact_box}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <h2>Location:</h2>
                <p>El Pinar ,Uruguay</p>
              </div>
              <div>
                <h2>Email:</h2>
                <p>duarte.manuel10@gmail.com</p>
              </div>
              <div>
                <h2>Linkedin:</h2>
                <a
                  href="https://www.linkedin.com/in/manuelduartebotti/"
                  target="_blank"
                >
                  Manuel Duarte
                </a>
              </div>
              <div>
                <h2>Whatsapp:</h2>
                <p>+598 92 553 210</p>
              </div>
              <div>
                <h2>GitHub:</h2>
                <a href="https://github.com/duarte896" target="_blank">
                  {" "}
                  Code
                </a>
              </div>
            </div>
            <div className={styles.ipod_box + " col-lg-6"}>
              <div>
                <p>My Music For Coding</p>
              </div>
              <div className={styles.main_box}>
                <div className={styles.display}>
                  <img className={styles.image} src={image} alt="" />
                </div>
                <div className={styles.main_circle}>
                  <p className={styles.menu}>Menu</p>
                  <p className={styles.foward}>{">>|"}</p>
                  <p className={styles.play}>▶︎</p>
                  <p className={styles.back}>{"|<<"}</p>
                  <div className={styles.second_circle}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
