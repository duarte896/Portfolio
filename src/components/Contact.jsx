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
              <h2>Location:</h2>
              <h2>Email:</h2>
              <h2>Linkedin:</h2>
              <h2>Whatsapp:</h2>
              <h2>GitHub:</h2>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
