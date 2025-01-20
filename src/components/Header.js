import { Link, useLocation } from "react-router-dom";
import Logo from "../images/pandaface.svg";
import Items from "../pages/ItemsPage";

export default function Header() {
  const location = useLocation();
  const atItems = location.pathname === "/items";

  return (
    <header>
      <nav className="header-nav">
        <div className="header-left">
          <a className="header-logo-shopname" href="/">
            <img className="header-logo" src={Logo} alt="Logo" />
            <span className="header-shopname">판다마켓</span>
          </a>
          <ul
            className="itemsNav"
            style={{
              display: atItems ? "inline-block" : "none",
            }}
          >
            <li>
              <Link to={Items}>자유게시판</Link>
            </li>
            <li
              style={{
                color: atItems ? "var(--blue)" : "var(--grey600)",
              }}
            >
              <Link to={Items}>중고마켓</Link>
            </li>
          </ul>
        </div>
        <a
          href="/login"
          style={{
            display: atItems ? "none" : "inline-block",
          }}
        >
          <button className="header-btn">로그인</button>
        </a>
        <div
          className="profileBtn"
          style={{ display: atItems ? "block" : "none" }}
        ></div>
      </nav>
    </header>
  );
}
