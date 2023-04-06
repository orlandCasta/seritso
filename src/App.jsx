import styles from "./style";
import {
  Navbar,
  Hero,
  Benefits,
  Services,
  Contact,
  Partners,
  Footer,
} from "./components";

export const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Benefits />
        <Services />
        <h2
          id="contact"
          className={styles.heading2}
          style={{ textAlign: "center" }}
        >
          Contactanos
        </h2>
        <Contact />
        <Partners />
        <Footer />
      </div>
    </div>
  </div>
);
