import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import image from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <div className="vtNavBar">
        <a href="/" aria-label="name" target="_blank">
          <img className="logo" src={image} alt="intrud3r" />
        </a>

        <div className="navBottom">
          <a
            href="https://www.instagram.com/pccoe_owasp/"
            aria-label="name"
            target="_blank">
            <Instagram size={38} className="hover" />
          </a>

          <a
            href="https://discord.gg/krkFDWHp"
            aria-label="name"
            target="_blank">
            <Youtube size={38} className="hover" />
          </a>

          <a
            href="https://twitter.com/pccoe_owasp"
            aria-label="name"
            target="_blank">
            <Mail size={38} className="hover" />
          </a>

          <a
            href="https://www.linkedin.com/in/pccoe-owasp/"
            aria-label="name"
            target="_blank">
            <Linkedin size={38} className="hover" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
