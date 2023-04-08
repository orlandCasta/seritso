import styles from "../style";
import { FeedbackCard } from "./FeedbackCard";

export const Services = () => (
  <section
    id="services"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[80%] -right-[80%] rounded-full blue__gradient bottom-40 flip-horizontal-top" />
    <div className="services-section-info w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2} style={{ textAlign: "center" }}>
        Nuestros servicios
      </h2>
    </div>
    <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
      <FeedbackCard />
    </div>
  </section>
);
