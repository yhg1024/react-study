import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Login({ formData }) {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [password, setpassword] = useState();
  const login = () => {
    if (formData.id === id && formData.password === password) {
      navigate("/home");
    } else {
      alert("아이디와 비밀번호를 확인하세요.");
    }
  };
  return (
    <div className="contentCenter">
      {formData.id}
      {formData.password}
      <h2 className="subTitle">로그인</h2>
      <div>
        <div className="form">
          <label for="id">아이디 : </label>
          <input id="id" type="text" onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="form">
          <label for="password">비밀번호 : </label>
          <input
            id="password"
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button onClick={login}>로그인</button>
      </div>
    </div>
  );
}
