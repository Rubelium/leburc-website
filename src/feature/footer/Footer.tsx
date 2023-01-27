import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="app-footer">
      © 2023 - F2T4
      <br />
      ALL RIGHTS RESERVED.
      <br />
      <br />
      <div >
        <SocialIcon url="https://soundcloud.com/f2t4" />{" "}
        <SocialIcon url="https://www.youtube.com/F2t4TV" />{" "}
        <SocialIcon url="https://www.instagram.com/f2t4/" />{" "}
        <SocialIcon url="https://twitter.com/_F2t4" />
      </div>
    </div>
  );
};

export default Footer;
