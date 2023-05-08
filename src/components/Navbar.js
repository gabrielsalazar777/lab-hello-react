import Image from "./Image";
import Logo from "../images/ironhack-logo-xs.png";
import Menu from "../images/menu-top-xs.png";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Image source={Logo} specificClass="nav"/>
        <Image source={Menu} specificClass="nav"/>
      </nav>
    </div>
  );
};

export default Navbar;
