import styles from "./Home.module.css";

function Home() {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col d-flex flex-column justify-content-center">
          <h1>Full Stack Developer</h1>
          <h3>The best way to predict the future is to invent it</h3>
        </div>
        <div className="col d-flex justify-content-end">
          <div className={styles.animation}>
            <object
              aria-label="rocket animation"
              type="image/svg+xml"
              data="https://cdn.svgator.com/images/2021/12/rocket-animation-interactive-tutorial.svg"
              alt="rocket animation interactive"
              img=""
              width="100%"
            ></object>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

// Frases:
// I have not failed. I've just found 10,000 ways that won't work
