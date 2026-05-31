import { useState } from "react";
import "./styles/Registro.css";

function Registro() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    edad: "",
    password: "",
    genero: "",
    terminos: false,
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormulario({
      ...formulario,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  function validarNombre(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(nombre.trim());
  }

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validarEdad(edad) {
    return parseInt(edad) >= 18;
  }

  function validarPassword(password) {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10}$/;

    return regex.test(password);
  }

  function validarFormulario() {
    const nuevosErrores = {};

    if (!validarNombre(formulario.nombre)) {
      nuevosErrores.nombre =
        "El nombre solo puede contener letras";
    }

    if (!validarEmail(formulario.email)) {
      nuevosErrores.email =
        "Ingrese un correo válido";
    }

    if (!validarEdad(formulario.edad)) {
      nuevosErrores.edad =
        "Debe ser mayor de 18 años";
    }

    if (!validarPassword(formulario.password)) {
      nuevosErrores.password =
        "Debe tener exactamente 10 caracteres, incluyendo letras, números y un símbolo";
    }

    if (!formulario.genero) {
      nuevosErrores.genero =
        "Seleccione un género";
    }

    if (!formulario.terminos) {
      nuevosErrores.terminos =
        "Debe aceptar los términos y condiciones";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      setEnviado(true);
    }
  };

  if (enviado) {
    return (
      <div className="contenedor">
        <article className="card">
          <h2>Registro exitoso 🎉</h2>
          <p>Los datos fueron enviados correctamente.</p>
        </article>
      </div>
    );
  }

  return (
    <main>
      <section id="registro" className="contenedor">
        <article className="card">
          <h2>Crear Cuenta</h2>

          <form onSubmit={handleSubmit}>
            <div className="campo">
              <label>Nombre</label>

              <input
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
              />

              {errores.nombre && (
                <small className="error">
                  {errores.nombre}
                </small>
              )}
            </div>

            <div className="campo">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formulario.email}
                onChange={handleChange}
              />

              {errores.email && (
                <small className="error">
                  {errores.email}
                </small>
              )}
            </div>

            <div className="campo">
              <label>Edad</label>

              <input
                type="number"
                name="edad"
                value={formulario.edad}
                onChange={handleChange}
              />

              {errores.edad && (
                <small className="error">
                  {errores.edad}
                </small>
              )}
            </div>

            <div className="campo">
              <label>Contraseña</label>

              <input
                type="password"
                name="password"
                maxLength="10"
                value={formulario.password}
                onChange={handleChange}
              />

              {errores.password && (
                <small className="error">
                  {errores.password}
                </small>
              )}
            </div>

            <div className="campo">
              <label>Género</label>

              <div className="opciones">
                <label className="opcion">
                  <input
                    type="radio"
                    name="genero"
                    value="masculino"
                    onChange={handleChange}
                  />
                  Masculino
                </label>

                <label className="opcion">
                  <input
                    type="radio"
                    name="genero"
                    value="femenino"
                    onChange={handleChange}
                  />
                  Femenino
                </label>
              </div>

              {errores.genero && (
                <small className="error">
                  {errores.genero}
                </small>
              )}
            </div>

            <div className="campo">
              <label className="opcion">
                <input
                  type="checkbox"
                  name="terminos"
                  checked={formulario.terminos}
                  onChange={handleChange}
                />

                Acepto términos y condiciones
              </label>

              {errores.terminos && (
                <small className="error">
                  {errores.terminos}
                </small>
              )}
            </div>

            <button type="submit">
              Registrarse
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}

export default Registro;