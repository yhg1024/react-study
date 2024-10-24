import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Login({ formDataRef, isLoginRef }) {
  const navigate = useNavigate();
  const formData = formDataRef.current;

  const idRef = useRef();
  const passwordRef = useRef();

  const login = () => {
    const id = idRef.current.value;
    const password = passwordRef.current.value;
    console.log(sessionStorage.getItem(id));
    console.log(sessionStorage.getItem(password));

    if (
      id !== "" &&
      password !== "" &&
      id === sessionStorage.getItem(id) &&
      password === sessionStorage.getItem(password)
    ) {
      sessionStorage.setItem(isLoginRef, true);
      console.log(sessionStorage.getItem(isLoginRef));
      navigate("/foodList");
    } else {
      alert("아이디와 비밀번호를 확인하세요.");
    }
  };

  return (
    <div className="contentCenter">
      <h2 className="subTitle">로그인</h2>
      <div>
        <div className="form">
          <label htmlFor="id">아이디 : </label>
          <input id="id" type="text" ref={idRef} />
        </div>
        <div className="form">
          <label htmlFor="password">비밀번호 : </label>
          <input id="password" type="password" ref={passwordRef} />
        </div>
        <button
          className="button"
          onClick={login}
          style={{ marginRight: "10px" }}
        >
          로그인
        </button>
        <button
          className="button"
          onClick={() => {
            navigate("/join");
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
