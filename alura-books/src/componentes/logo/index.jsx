import logo from "../../image/logo.svg";
import "../estilo.css";

function Logo() {
  return (
    <a href="/" className="logo-link">
      <img src={logo} className="logo" alt="Alura Books Logo" />
    </a>
  );
}

export default Logo;
