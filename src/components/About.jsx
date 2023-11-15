import styles from "./About.module.css";
function About() {
  return (
    <div className="container mt-5">
      <div>
        <h2 className={styles.section_title}>ABOUT</h2>
        <p className={styles.main_title}>ABOUT ME</p>
        <p>
          Im 21 Full Stack Software Developer hows extremly motivated to keep
          learning{" "}
        </p>
      </div>
    </div>
  );
}
export default About;
