import "./Navbar.scss";
import logo from "../../helpers/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="log" src={logo} alt="" width="100px" />
      </div>

      <div className="links">
        <a href="#about me">About</a>
        <a href="#fotos">Fotos</a>
        <a href="#design">Design</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
