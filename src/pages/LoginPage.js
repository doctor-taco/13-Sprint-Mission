import "../styles/LoginSignupPage.css";
import Logo from "../images/pandaface.svg";
import PWOff from "../images/pwVisibilityOff.svg";
import PWOn from "../images/pwVisibilityOn.svg";
import GoogleIco from "../images/google_ico.svg";
import KakaoIco from "../images/kakaotalk_ico.svg";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  checkEmail,
  checkPW,
  login,
  togglePWVisibility,
} from "../components/functions";

export default function Login() {
  return (
    <>
      <Header />
      <main>
        <div className="sign-box">
          <div className="sign-box-head">
            <img className="sign-box-logo" src={Logo} alt="" />
            <span className="sign-box-shopname">판다마켓</span>
          </div>
          <form action="" method="post" onSubmit={(event) => login(event)}>
            <label htmlFor="login-email">이메일</label>
            <input
              type="email"
              name="login-email"
              id="login-email"
              placeholder="이메일을 입력해주세요"
              minLength="8"
              maxLength="50"
              required
              className="sign-email"
              onBlur={checkEmail}
            />
            <p className="sign-email-error"></p>

            <label htmlFor="login-pw">비밀번호</label>
            <div className="pw-input-box">
              <input
                type="password"
                name="login-pw"
                id="login-pw"
                placeholder="비밀번호를 입력해주세요"
                minLength="8"
                required
                className="sign-pw"
                onBlur={checkPW}
              />
              <img
                src={PWOff}
                className="pw-eye-icon-off"
                onClick={() => togglePWVisibility("off")}
                alt=""
              />
              <img
                src={PWOn}
                className="pw-eye-icon-on"
                onClick={() => togglePWVisibility("on")}
                alt=""
              />
            </div>
            <p className="sign-pw-error"></p>

            <button className="sign-box-submit" type="submit" disabled>
              로그인
            </button>
          </form>
          <div className="oauth-bar">
            <h2 className="oauth-bar-title">간편 로그인하기</h2>
            <div className="oauth-icons">
              <a href="https://www.google.com" target="_blank" rel="noreferrer">
                <img src={GoogleIco} alt="" />
              </a>
              <a
                href="https://www.kakaocorp.com/page"
                target="_blank"
                rel="noreferrer"
              >
                <img src={KakaoIco} alt="" />
              </a>
            </div>
          </div>
          <span className="sign-box-bottom">
            판다마켓이 처음이신가요?&nbsp;
            <a className="sign-box-bottom-link" href="/signup">
              회원가입
            </a>
          </span>
        </div>
        <Footer />
      </main>
    </>
  );
}
