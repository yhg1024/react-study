import { Link, useLocation } from "react-router-dom";
const Title = ({ setOpenModal, setReg, isLoginRef }) => {
  const location = useLocation();
  console.log(isLoginRef);
  return (
    <div className="header">
      <div>
        <div className="title">
          <Link to={"/foodList"}>
            <h1>메뉴판</h1>
          </Link>
          {location.pathname === "/admin" && (
            <button
              onClick={() => {
                setOpenModal(true);
                setReg(true);
              }}
            >
              추가
            </button>
          )}
        </div>
        <div className="sideMenu">
          {isLoginRef === true && (
            <Link to={"/mypage"}>
              <label>마이페이지</label>
            </Link>
          )}
          {isLoginRef === false && (
            <Link to={"/login"}>
              <label>로그인</label>
            </Link>
          )}
          {isLoginRef === false && (
            <Link to={"/join"}>
              <label>회원가입</label>
            </Link>
          )}
          <Link to={"/order"}>
            <label>장바구니</label>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Title;
