import React from "react"
import Form from "./style"

export default function ContactForm({ ...rest }) {
  return (
    <Form {...rest}>
      <h3 className="form-title">Escríbenos</h3>
      <p className="form-whatsapp">Whatsapp: 55 6213 3210</p>
      <div className="contact-form">
        <form
          action="https://getform.io/f/391e18c8-105e-4cd7-8024-63c6d7f6c5b5"
          method="POST"
        >
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="form-floating">
                <input
                  className="form-control"
                  placeholder="Your Website"
                  id="floatinginput3"
                  name="nombre"
                  type="text"
                />
                <label htmlFor="floatinginput3">Nombre</label>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="form-floating">
                <input
                  className="form-control"
                  placeholder=""
                  id="floatinginput"
                  name="email"
                  type="email"
                />
                <label htmlFor="floatinginput">Correo Electrónico*</label>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="form-floating">
                <input
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatinginput2"
                  name="telefono"
                  type="number"
                />
                <label htmlFor="floatinginput2">Teléfono</label>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ height: 100 }}
                  defaultValue={""}
                  name="mensaje"
                  type="text"
                />
                <label htmlFor="floatingTextarea">
                  ¿Tienes alguna pregunta?{" "}
                </label>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row align-items-center mt-3 flex-column">
                <div className="col-md-8 col-lg-7 col-md-6 col-xl-8 pt-3">
                  <div className="form-check d-flex align-items-center justify-content-center">
                    <input
                      className="form-check-input bg-white float-none mt-0"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                      name="Terminos"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Estoy de acuerdo con los términos y condiciones.
                    </label>
                  </div>
                </div>
                <div className="col-md-4 col-lg-5 col-xl-4 text-center   pt-3">
                  <button
                    type="submit"
                    className="btn btn--lg-2 shadow--torch-red-3 rounded-55 boton-enviar"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Form>
  )
}
