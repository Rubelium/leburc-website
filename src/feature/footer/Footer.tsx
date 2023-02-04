import "./footer.css";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import Logo from "../../images/png/logoF2t4BlackWhiteCircleFilled.png";

interface Props {
  darkMode: boolean;
}

const Footer = ({ darkMode }: Props) => {
  return (
    <div className={darkMode ? "footer-dark" : "footer-light"} >
      <div>
        <SocialIcon className="footer-social-icon" url="https://soundcloud.com/f2t4" />
        <SocialIcon className="footer-social-icon" url="https://www.youtube.com/F2t4TV" />
        <SocialIcon className="footer-social-icon" url="https://open.spotify.com/user/f2t4" />
        <SocialIcon className="footer-social-icon" url="https://www.instagram.com/f2t4/" />
        <SocialIcon className="footer-social-icon" url="https://twitter.com/_F2t4" />
      </div>
      <br />
      <div>
        <Link className={darkMode ? "footer-link-dark" : "footer-link-light"} to="/about">About Us</Link>
        <Link className={darkMode ? "footer-link-dark" : "footer-link-light"} to="/contact">Contact Us</Link>
      </div>
      <br />
      <div className="footer-copyright">
        <img src={Logo} alt="F2T4 Logo" width="20" height="20" />
        {" "} Copyright © 2023 - F2T4
        <br />
        All rights reserved.
      </div>
    </div >
  );
};

export default Footer;
