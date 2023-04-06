import styles from "../style";
import { GetStarted } from "./GetStarted";

export const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Soporte tecnico <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Rapido y confiable</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          A un Clic de Distancia.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Deje que nosotros nos encarguemos de ofrecerle nuestros servicios
          tecnicos e informaticos. Nosotros nos encargaremos de todo lo
          relacionado con la informatica para que Usted se dedique en exclusiva
          a su línea de negocio.
        </p>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};
