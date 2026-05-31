import "./styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">CodeAcademy</h1>

      <nav>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#caracteristicas">Características</a></li>
          <li><a href="#registro">Registro</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;