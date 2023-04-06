export const Button = ({ styles, type = "text" }) => {
  return (
    <>
      {type === "submit" ? (
        <button
          type={type}
          style={{ color: "#fff" }}
          className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none button-hover ${styles}`}
        >
          Enviar
        </button>
      ) : (
        <a href="#contact">
          <button
            type={type}
            style={{ color: "#fff" }}
            className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none button-hover ${styles}`}
          >
            Comienza ahora
          </button>
        </a>
      )}
    </>
  );
};
