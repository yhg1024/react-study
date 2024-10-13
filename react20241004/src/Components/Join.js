import { useNavigate } from "react-router-dom";
export function Join({ formData, setFormData }) {
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const { id, name, password, confirmPassword } = formData;
  const handleSubmit = (e) => {
    validateId();
    validatePassword();
    navigate("/login");
  };

  // 아이디 유효성
  const validateId = () => {
    const regex = /^[a-zA-Z0-9]{4,}$/;
    if (formData.id === "test") {
      alert("이미 있는 아이디입니다.");
      formData.id = "";
    } else if (!regex.test(formData.id)) {
      alert(
        "ID는 영문 또는 숫자로만 구성되어야 하며, 최소 4자 이상이어야 합니다."
      );
      formData.id = "";
    } else {
      alert("사용 가능한 아이디입니다.");
    }
  };

  const isSame = formData.password === formData.confirmPassword;
  // 비밀번호 유효성
  const validatePassword = () => {
    if (!isSame) {
      alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
      // 일치하지 않는 경우 초기화
      formData.password = "";
      formData.confirmPassword = "";
    }
  };

  // 비밀번호와 비밀번호 확인 같은지 체크하기

  return (
    <div className="contentCenter">
      <h2 className="subTitle">회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label for="id">아이디 : </label>
          <input
            id="id"
            name="id"
            type="text"
            value={id}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label for="name">이름 : </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label for="password">비밀번호 : </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label for="confirmPassword">비밀번호 확인 : </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
