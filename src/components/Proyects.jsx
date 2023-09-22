import styles from "./Proyects.module.css";
function Proyects() {
  return (
    <div className="container mt-5">
      <div>
        <h2 className={styles.section_title}>GALLERY</h2>
        <p className={styles.main_title}>PROYECTS</p>
      </div>
      <div className={styles.skill_box}></div>
    </div>
  );
}
export default Proyects;
