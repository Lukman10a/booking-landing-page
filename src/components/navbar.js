import nav_img from "../assets/images/nav_image.png";
import flags from "../assets/icons/flags.svg";
import profile from "../assets/icons/profile.svg";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <img src={nav_img} alt="" />

      <ul className="ul">
        <li>Hotels</li>
        <li>Brand</li>
        <li>About Us</li>
        <li>How It Works</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
      <div className="nav-icons">
        <img src={flags} alt="" />
        <img src={profile} alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
