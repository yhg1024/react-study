import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Join({ formDataRef }) {
  const navigate = useNavigate();

  const idRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = idRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (validateId(id) && validatePassword(password, confirmPassword)) {
      formDataRef.current = { id, name, password }; // formData 업데이트
      sessionStorage.setItem(id, formDataRef.current.id);
      sessionStorage.setItem(password, formDataRef.current.password);
      navigate("/login");
    }
  };

  // 아이디 유효성 검사
  const validateId = (id) => {
    const regex = /^[a-zA-Z0-9]{4,}$/;
    if (id === "test") {
      alert("이미 있는 아이디입니다.");
      idRef.current.value = ""; // 초기화
      return false;
    } else if (!regex.test(id)) {
      alert(
        "ID는 영문 또는 숫자로만 구성되어야 하며, 최소 4자 이상이어야 합니다."
      );
      idRef.current.value = ""; // 초기화
      return false;
    } else {
      alert("사용 가능한 아이디입니다.");
      return true;
    }
  };

  // 비밀번호 유효성 검사
  const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
      passwordRef.current.value = ""; // 초기화
      confirmPasswordRef.current.value = ""; // 초기화
      return false;
    }
    return true;
  };

  return (
    <div className="contentCenter">
      <h2 className="subTitle">회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="id">아이디 : </label>
          <input id="id" name="id" type="text" ref={idRef} />
        </div>
        <div className="form">
          <label htmlFor="name">이름 : </label>
          <input id="name" name="name" type="text" ref={nameRef} />
        </div>
        <div className="form">
          <label htmlFor="password">비밀번호 : </label>
          <input
            id="password"
            name="password"
            type="password"
            ref={passwordRef}
          />
        </div>
        <div className="form">
          <label htmlFor="confirmPassword">비밀번호 확인 : </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            ref={confirmPasswordRef}
          />
        </div>
        <button className="button" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
}
