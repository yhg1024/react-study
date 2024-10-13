import { Link, useLocation } from "react-router-dom";
const Title = ({ setOpenModal, setReg }) => {
  const location = useLocation();
  return (
    <div className="title">
      <div>
        <Link to={"/home"}>
          <h1>
            식단표
            {location.pathname === "/home" && (
              <button
                onClick={() => {
                  setOpenModal(true);
                  setReg(true);
                }}
              >
                추가
              </button>
            )}
          </h1>
        </Link>
        <div className="sideMenu">
          <Link to={"/mypage"}>
            <label>마이페이지</label>
          </Link>
          <Link to={"/login"}>
            <label>로그인</label>
          </Link>
          <Link to={"/join"}>
            <label>회원가입</label>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Title;
