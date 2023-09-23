import kSurf from "../img/k-surf.png";
import styles from "./Proyects.module.css";

function Proyects() {
  return (
    <div className="container mt-5">
      <div>
        <h2 className={styles.section_title}>GALLERY</h2>
        <p className={styles.main_title}>PROYECTS</p>
      </div>
      <div className={styles.skill_box}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img className={styles.image} src={kSurf} alt="" />
            </div>
            <div className="col-lg-4">
              <img className={styles.image} src={kSurf} alt="" />
            </div>
            <div className="col-lg-4">
              <img className={styles.image} src={kSurf} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Proyects;
