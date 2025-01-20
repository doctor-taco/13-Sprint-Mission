import { useLocation } from "react-router-dom";
import Logo from "../images/pandaface.svg";

export default function Header() {
  const location = useLocation();
  const atItems = location.pathname === "/items";
  const atFreeBoard = location.pathname === "/freeboard";

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
              <a
                href="../freeboard"
                className="itemsNavLinks"
                style={{
                  color: atFreeBoard ? "var(--blue)" : "var(--grey600)",
                }}
              >
                자유게시판
              </a>
            </li>
            <li>
              <a
                href="../items"
                className="itemsNavLinks"
                style={{
                  color: atItems ? "var(--blue)" : "var(--grey600)",
                }}
              >
                중고마켓
              </a>
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
