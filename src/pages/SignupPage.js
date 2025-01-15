import Logo from "../images/pandaface.svg";
import PWOff from "../images/pwVisibilityOff.svg";
import PWOn from "../images/pwVisibilityOn.svg";
import GoogleIco from "../images/google_ico.svg";
import KakaoIco from "../images/kakaotalk_ico.svg";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  checkEmail,
  checkNickname,
  checkPWCheck,
  signup,
  togglePWCheckVisibility,
} from "../components/functions";

export default function Signup() {
  return (
    <>
      <Header />
      <main>
        <div className="sign-box">
          <div className="sign-box-head">
            <img className="sign-box-logo" src={Logo} alt="" />
            <span className="sign-box-shopname">판다마켓</span>
          </div>
          <form action="" method="post" onSubmit={(event) => signup(event)}>
            <label htmlFor="signup-email">이메일</label>
            <input
              type="email"
              name="signup-email"
              id="signup-email"
              placeholder="이메일을 입력해주세요"
              minLength="8"
              maxLength="50"
              required
              className="sign-email"
              onBlur={checkEmail}
            />
            <p className="sign-email-error"></p>

            <label htmlFor="signup-nickname">닉네임</label>
            <input
              type="text"
              name="signup-nickname"
              id="signup-nickname"
              placeholder="닉네임을 입력해주세요"
              minLength="3"
              maxLength="20"
              required
              className="sign-nickname"
              onBlur={checkNickname}
            />
            <p className="sign-nickname-error"></p>

            <label htmlFor="signup-pw">비밀번호</label>
            <div className="pw-input-box">
              <input
                type="password"
                name="signup-pw"
                id="signup-pw"
                placeholder="비밀번호를 입력해주세요"
                minLength="8"
                required
                className="sign-pw"
                onBlur={checkPWCheck}
              />
              <img
                src={PWOff}
                className="pw-eye-icon-off"
                onClick={() => togglePWCheckVisibility("off1")}
                alt=""
              />
              <img
                src={PWOn}
                className="pw-eye-icon-on"
                onClick={() => togglePWCheckVisibility("on1")}
                alt=""
              />
            </div>
            <p className="sign-pw-error"></p>

            <label htmlFor="signup-pwcheck">비밀번호</label>
            <div className="pw-input-box">
              <input
                type="password"
                name="signup-pwcheck"
                id="signup-pwcheck"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                minLength="8"
                required
                className="sign-pwcheck"
                onBlur={checkPWCheck}
              />
              <img
                src={PWOff}
                className="pw-eye-icon-off"
                onClick={() => togglePWCheckVisibility("off2")}
                alt=""
              />
              <img
                src={PWOn}
                className="pw-eye-icon-on"
                onClick={() => togglePWCheckVisibility("on2")}
                alt=""
              />
            </div>
            <p className="sign-pwcheck-error"></p>

            <button className="sign-box-submit" type="submit" disabled>
              회원가입
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
            이미 회원이신가요?&nbsp;
            <a className="sign-box-bottom-link" href="/login">
              로그인
            </a>
          </span>
        </div>
        <Footer />
      </main>
    </>
  );
}
