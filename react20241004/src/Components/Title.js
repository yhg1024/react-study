import { Link } from "react-router-dom";
const Title = ({ setOpenModal, setReg }) => {
  return (
    <div className="title">
      <div>
        <Link to={"/home"}>
          <div>
            식단표
            <button
              onClick={() => {
                setOpenModal(true);
                setReg(true);
              }}
            >
              추가
            </button>
          </div>
        </Link>
        <div className="sideMenu">
          <Link to={"/mypage"}>
            <label>마이페이지</label>
          </Link>
          <Link to={"/login"}>
            <label>로그인</label>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Title;
