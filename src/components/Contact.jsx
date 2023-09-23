import styles from "./Contact.module.css";
function Contact() {
  return (
    <div className="container mt-5">
      <div>
        <h2 className={styles.section_title}>CONTACT</h2>
        <p className={styles.main_title}>CONTACT ME</p>
      </div>
      <div className={styles.contact_box}></div>
    </div>
  );
}
export default Contact;
