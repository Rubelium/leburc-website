import Logo from "../../images/png/logoF2t4BlackWhiteCircleFilled.png";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="app-footer">
      <div>
        <SocialIcon className="footer-social-icon" url="https://soundcloud.com/f2t4" />
        <SocialIcon className="footer-social-icon" url="https://www.youtube.com/F2t4TV" />
        <SocialIcon className="footer-social-icon" url="https://open.spotify.com/user/f2t4" />
        <SocialIcon className="footer-social-icon" url="https://www.instagram.com/f2t4/" />
        <SocialIcon className="footer-social-icon" url="https://twitter.com/_F2t4" />
      </div>
      <br />
      <div>
        <Link className="footer-link" to="/about">About Us</Link>
        <Link className="footer-link" to="/contact">Contact Us</Link>
      </div>
      <br />
      <div className="footer-copyright">
        <img src={Logo} alt="F2T4 Logo" width="20" height="20" />
        {" "} Copyright © 2023 - F2T4
        <br />
        All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
