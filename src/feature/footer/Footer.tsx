import "./footer.css";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

interface Props {
  darkMode: boolean;
}

const Footer = ({ darkMode }: Props) => {
  return (
    <div className={darkMode ? "footer footer-dark" : "footer footer-light"} >
      <div>
        <SocialIcon className="footer-social-icon" url="https://soundcloud.com/leburc" />
        <SocialIcon className="footer-social-icon" url="https://www.instagram.com/_leburc/" />
        <SocialIcon className="footer-social-icon" url="https://open.spotify.com/user/crrubel" />
      </div>
      <br />
      <div>
        <Link className={darkMode ? "footer-link-dark" : "footer-link-light"} to="/about">About</Link>
        <Link className={darkMode ? "footer-link-dark" : "footer-link-light"} to="/contact">Contact</Link>
      </div>
      <br />
      <div className="footer-modify">
        Last modified on: 2/19/2023
      </div>
    </div >
  );
};

export default Footer;
