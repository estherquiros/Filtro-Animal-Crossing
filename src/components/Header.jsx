// Importamos el logo
import logo from "../images/logo.png";

function Header() {
  return (
    <header className="header">
      {/* Imagen del logo */}
      <img className="header__logo" src={logo} alt="Logo de la aplicación" />
    </header>
  );
}

// Exportamos el componente
export default Header;
