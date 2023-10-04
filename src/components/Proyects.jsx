import kSurf from "../img/k-surf.png";
import styles from "./Proyects.module.css";
import { gsap } from "gsap";

function Proyects() {
  function prueba() {
    gsap.to(".box", { rotation: 27, x: 100, duration: 5 });
    gsap.to(".green", { rotation: 360, x: 100, duration: 5 });
    gsap.from(".purple", { rotation: -360, x: -100, duration: 5 });
    gsap.fromTo(".blue", { x: -100 }, { rotation: 360, x: 100, duration: 5 });
  }

  return (
    <div className="container mt-5">
      <div>
        <h2 className={styles.section_title}>GALLERY</h2>
        <p className={styles.main_title}>PROYECTS</p>
      </div>
      <div className={styles.proyect_box}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4">
              <img className={styles.image} src={kSurf} alt="" />
            </div>
            <div className="col-lg-4">
              <img className={styles.image} src={kSurf} alt="" />
            </div>
            <div className="col-lg-4">
              <img className={styles.image} src={kSurf} alt="" />
            </div>
            <div className="col-lg-4">
              <div className={styles.flip_card}>
                <div className={styles.flip_card_inner}>
                  <div className={styles.flip_card_front}></div>
                </div>
              </div>
            </div>
            <div className={styles.bodyBox + " col-lg-4"}>
              <div
                className={styles.box + styles.green + " h-25 w-25 bg-black"}
              ></div>
              <div
                className={styles.box + styles.purple + " h-25 w-25 bg-black"}
              ></div>
              <div
                className={styles.box + styles.blue + " h-25 w-25 bg-black"}
              ></div>
              <button onClick={prueba()}>run</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Proyects;
