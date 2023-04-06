import { features } from "../constants";
import styles, { layout } from "../style";
import { Button } from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

export const Benefits = () => (
  <section id="benefits" className={layout.section}>
    <div className="absolute z-[0] w-[60%] h-[80%] -left-[50%] rounded-full blue__gradient bottom-40 flip-horizontal-top" />
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Administra tu negocio, <br className="sm:block hidden" /> Nosotros tu
        seguridad.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        "Descubre las ventajas de elegirnos como tu aliado en soporte técnico.
        Nos distinguimos por nuestra rapidez, eficacia y atención personalizada.
        Nuestro equipo de expertos altamente capacitados está listo para
        resolver tus problemas tecnológicos, ya sean de hardware o software, en
        tiempo récord. No importa si eres un usuario particular o una empresa,
        nosotros nos adaptamos a tus necesidades, ofreciendo tarifas
        competitivas y garantía de satisfacción.
      </p>
      <Button styles={`mt-10`} />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);
