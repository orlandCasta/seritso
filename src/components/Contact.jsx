import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Button } from "./Button";
import styles from "../style";

export const Contact = () => {
  const form = useRef();
  const {
    VITE_EMAILJS_PUBLIC_KEY,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_SERVICE_ID,
  } = import.meta.env;

  return (
    <>
      <section
        id="contact-section"
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow contact-section`}
      >
        <div className="flex-1 flex flex-col contact-first-container">
          <h2 className={styles.heading2}>Cuéntanos como podemos ayudarte</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Nos pondremos en contacto contigo tan pronto nos sea posible,
            agradecemos tu confianza.
          </p>
        </div>
        <div className={`${styles.flexCenter} mt-10 contact-second-container`}>
          <Formik
            initialValues={{
              message: "",
              user_name: "",
              lastName: "",
              user_email: "",
              company: "",
              country: "",
            }}
            validate={(valores) => {
              let errores = {};

              if (!valores.message) {
                errores.message = "Este mensaje es obligatorio.";
              }

              if (!valores.user_name) {
                errores.user_name = "El nombre es obligatorio.";
              }

              if (!valores.lastName) {
                errores.lastName = "El apellido es obligatorio.";
              }

              if (!valores.user_email) {
                errores.user_email = "El correo es obligatorio.";
              } else if (
                !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(valores.user_email)
              ) {
                errores.user_email = "Campo inválido. Verifique estructura.";
              }

              if (!valores.company) {
                errores.company = "El nombre de la compañia es obligatorio.";
              }

              if (!valores.country) {
                errores.country = "El pais es obligatorio.";
              }

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              emailjs
                .sendForm(
                  VITE_EMAILJS_SERVICE_ID,
                  VITE_EMAILJS_TEMPLATE_ID,
                  form.current,
                  VITE_EMAILJS_PUBLIC_KEY
                )
                .then(
                  (result) => {
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Correo enviado correctamente.",
                      showConfirmButton: false,
                      timer: 3000,
                    });
                    resetForm();
                  },
                  (error) => {
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "hubo un error al enviar el correo, por favor intentelo más tarde.",
                      showConfirmButton: false,
                      timer: 5000,
                    });
                    resetForm();
                  }
                );
            }}
          >
            {({ handleSubmit, errors }) => (
              <>
                <Form
                  ref={form}
                  className="main-contact-form"
                  onSubmit={handleSubmit}
                >
                  <ul className="contact-form_list">
                    <li>
                      <label for="reason">
                        Tu reto/objetivo <span style={{ color: "red" }}>*</span>
                      </label>
                      <Field type="text" id="message" name="message"></Field>
                      <ErrorMessage
                        name="message"
                        component={() => (
                          <p className="form-text-error">{errors.message}</p>
                        )}
                      />
                    </li>
                    <li>
                      <div className="dual-input-container">
                        <div className="dual-input dual-input-1">
                          <label for="name">
                            Nombre <span style={{ color: "red" }}>*</span>
                          </label>
                          <Field
                            type="text"
                            id="user_name"
                            name="user_name"
                          ></Field>
                          <ErrorMessage
                            name="user_name"
                            component={() => (
                              <p className="form-text-error">
                                {errors.user_name}
                              </p>
                            )}
                          />
                        </div>
                        <div className="dual-input dual-input-2">
                          <label for="lastName">
                            Apellido <span style={{ color: "red" }}>*</span>
                          </label>
                          <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                          ></Field>
                          <ErrorMessage
                            name="lastName"
                            component={() => (
                              <p className="form-text-error">
                                {errors.lastName}
                              </p>
                            )}
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dual-input-container">
                        <div className="dual-input dual-input-1">
                          <label for="email">
                            Correo electronico{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <Field
                            type="email"
                            id="user_email"
                            name="user_email"
                          ></Field>
                          <ErrorMessage
                            name="user_email"
                            component={() => (
                              <p className="form-text-error">
                                {errors.user_email}
                              </p>
                            )}
                          />
                        </div>
                        <div className="dual-input dual-input-2">
                          <label for="company">Compañia</label>
                          <Field
                            type="text"
                            id="company"
                            name="company"
                          ></Field>
                          <ErrorMessage
                            name="company"
                            component={() => (
                              <p className="form-text-error">
                                {errors.company}
                              </p>
                            )}
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <label for="country">Pais</label>
                      <Field type="text" id="country" name="country"></Field>
                      <ErrorMessage
                        name="country"
                        component={() => (
                          <p className="form-text-error">{errors.country}</p>
                        )}
                      />
                    </li>
                  </ul>
                  <Button
                    text="Get Started"
                    type="submit"
                    className="bg-primary-2 hover:bg-primary-1"
                  />
                </Form>
              </>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};
