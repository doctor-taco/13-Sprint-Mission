function checkEmail() {
  const emailInput = document.getElementsByClassName("sign-email")[0];
  const emailError = document.getElementsByClassName("sign-email-error")[0];

  emailInput.classList.remove("error");

  if (!emailInput.value) {
    emailInput.style.border = "1px solid red";
    emailError.textContent = "이메일을 입력해주세요.";
  } else if (!emailInput.checkValidity()) {
    emailInput.style.border = "1px solid red";
    emailError.textContent = "잘못된 이메일 형식입니다.";
  } else {
    emailInput.style.border = "";
    emailError.textContent = "";
  }
  toggleLoginBtn();
  toggleSignupBtn();
}

function checkNickname() {
  const nicknameInput = document.getElementsByClassName("sign-nickname")[0];
  const nicknameError = document.getElementsByClassName(
    "sign-nickname-error"
  )[0];

  nicknameInput.classList.remove("error");

  if (!nicknameInput.value) {
    nicknameInput.style.border = "1px solid red";
    nicknameError.textContent = "닉네임을 입력해주세요.";
  } else if (nicknameInput.value.length < 3) {
    nicknameInput.style.border = "1px solid red";
    nicknameError.textContent = "닉네임을 3자 이상 입력해주세요.";
  } else {
    nicknameInput.style.border = "";
    nicknameError.textContent = "";
  }
  toggleLoginBtn();
  toggleSignupBtn();
}

function checkPW() {
  const pwInput = document.getElementsByClassName("sign-pw")[0];
  const pwError = document.getElementsByClassName("sign-pw-error")[0];

  pwInput.classList.remove("error");

  if (!pwInput.value) {
    pwInput.style.border = "1px solid red";
    pwError.textContent = "비밀번호를 입력해주세요.";
  } else if (pwInput.value.length < 8) {
    pwInput.style.border = "1px solid red";
    pwError.textContent = "비밀번호를 8자 이상 입력해주세요.";
  } else {
    pwInput.style.border = "";
    pwError.textContent = "";
  }
  toggleLoginBtn();
}

function checkPWCheck() {
  const pwInput = document.getElementsByClassName("sign-pw")[0];
  const pwError = document.getElementsByClassName("sign-pw-error")[0];

  pwInput.classList.remove("error");

  if (!pwInput.value) {
    pwInput.style.border = "1px solid red";
    pwError.textContent = "비밀번호를 입력해주세요.";
  } else if (pwInput.value.length < 8) {
    pwInput.style.border = "1px solid red";
    pwError.textContent = "비밀번호를 8자 이상 입력해주세요.";
  } else {
    pwInput.style.border = "";
    pwError.textContent = "";
  }

  const pwcheckInput = document.getElementsByClassName("sign-pwcheck")[0];
  const pwcheckError = document.getElementsByClassName("sign-pwcheck-error")[0];

  pwcheckInput.classList.remove("error");

  if (!pwcheckInput.value) {
    pwcheckInput.style.border = "1px solid red";
    pwcheckError.textContent = "비밀번호를 입력해주세요.";
  } else if (pwcheckInput.value.length < 8) {
    pwcheckInput.style.border = "1px solid red";
    pwcheckError.textContent = "비밀번호를 8자 이상 입력해주세요.";
  } else if (pwcheckInput.value !== pwInput.value) {
    pwcheckInput.style.border = "1px solid red";
    pwcheckError.textContent = "비밀번호가 일치하지 않습니다.";
  } else {
    pwcheckInput.style.border = "";
    pwcheckError.textContent = "";
  }

  toggleLoginBtn();
  toggleSignupBtn();
}

function toggleLoginBtn() {
  const emailInput = document.getElementById("login-email");
  const pwInput = document.getElementById("login-pw");
  const submitBtn = document.getElementsByClassName("sign-box-submit")[0];

  if (
    emailInput.value &&
    pwInput.value.length >= 8 &&
    emailInput.checkValidity()
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function toggleSignupBtn() {
  const emailInput = document.getElementById("signup-email");
  const nicknameInput = document.getElementById("signup-nickname");
  const pwInput = document.getElementById("signup-pw");
  const pwcheckInput = document.getElementById("signup-pwcheck");
  const submitBtn = document.getElementsByClassName("sign-box-submit")[0];

  if (
    emailInput.checkValidity() &&
    nicknameInput.value.length >= 3 &&
    pwInput.value.length >= 8 &&
    pwcheckInput.value === pwInput.value
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function login(event) {
  event.preventDefault();
  window.location.href = "/items";
}

function signup(event) {
  event.preventDefault();
  window.location.href = "/login";
}

function togglePWVisibility(status) {
  let pw = document.getElementsByClassName("sign-pw")[0];
  const off = document.getElementsByClassName("pw-eye-icon-off")[0];
  const on = document.getElementsByClassName("pw-eye-icon-on")[0];

  if (status === "off") {
    pw.type = "text";
    off.style.display = "none";
    on.style.display = "block";
  } else {
    pw.type = "password";
    off.style.display = "block";
    on.style.display = "none";
  }
}

function togglePWCheckVisibility(status) {
  let pw1 = document.getElementById("signup-pw");
  let pw2 = document.getElementById("signup-pwcheck");
  const imgOff1 = document.getElementsByClassName("pw-eye-icon-off")[0];
  const imgOff2 = document.getElementsByClassName("pw-eye-icon-off")[1];
  const imgOn1 = document.getElementsByClassName("pw-eye-icon-on")[0];
  const imgOn2 = document.getElementsByClassName("pw-eye-icon-on")[1];

  switch (status) {
    case "off1":
      pw1.type = "text";
      imgOff1.style.display = "none";
      imgOn1.style.display = "block";
      break;
    case "off2":
      pw2.type = "text";
      imgOff2.style.display = "none";
      imgOn2.style.display = "block";
      break;
    case "on1":
      pw1.type = "password";
      imgOff1.style.display = "block";
      imgOn1.style.display = "none";
      break;
    case "on2":
      pw2.type = "password";
      imgOff2.style.display = "block";
      imgOn2.style.display = "none";
      break;
  }
}
