import { useLocation } from "react-router-dom";
import Logo from "../images/pandaface.svg";

export default function Header() {
  const location = useLocation();
  const atItems = location.pathname === "/items";

  return (
    <header>
      <nav className="header-nav">
        <a className="header-left" href="/">
          <img className="header-logo" src={Logo} alt="Logo" />
          <span className="header-shopname">판다마켓</span>
          <ul
            className="itemsNav"
            style={{
              display: atItems ? "inline-block" : "none",
            }}
          >
            <li>자유게시판</li>
            <li
              style={{
                color: atItems ? "var(--blue)" : "var(--grey600)",
              }}
            >
              중고마켓
            </li>
          </ul>
        </a>
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
