import FBico from "../images/ic_facebook.svg";
import Xico from "../images/ic_twitter.svg";
import YTico from "../images/ic_youtube.svg";
import IGico from "../images/ic_instagram.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <p className="copyright">©codeit - 2024</p>
        <div className="footer-nav">
          <a className="footer-nav-a" href="/privacy">
            Privacy Policy
          </a>
          <a className="footer-nav-a" href="/faq">
            FAQ
          </a>
        </div>
        <ul className="footer-sns">
          <li className="footer-sns-li">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img className="footer-sns-ico" src={FBico} alt="Facebook Icon" />
            </a>
          </li>
          <li className="footer-sns-li">
            <a href="https://www.x.com" target="_blank" rel="noreferrer">
              <img className="footer-sns-ico" src={Xico} alt="X Icon" />
            </a>
          </li>
          <li className="footer-sns-li">
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <img className="footer-sns-ico" src={YTico} alt="Youtube Icon" />
            </a>
          </li>
          <li className="footer-sns-li">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer-sns-ico"
                src={IGico}
                alt="Instagram Icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
