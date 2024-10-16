import "./App.css";
import Title from "./Components/Title";
import Content from "./Components/Content";
import { Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Components/Modal";
import { Login } from "./Components/Login";
import { Mypage } from "./Components/Mypage";
import { Join } from "./Components/Join";
import CartList1 from "./Components/CartList1";

function App() {
  const [korList, setKorList] = useState([]);
  const [chaList, setChaList] = useState([]);
  const [jpaList, setJpaList] = useState([]);

  const getKorList = async () => {
    axios
      .get("http://localhost:8080/foodListKor")
      .then((res) => {
        setKorList(res.data);
        console.log("응답 완료 : ", res.data);
      })
      .catch((error) => {
        alert("검색 에러: " + error.message);
      });
  };
  const getChaList = async () => {
    axios
      .get("http://localhost:8080/foodListCha")
      .then((res) => {
        setChaList(res.data);
        console.log("응답 완료 : ", res.data);
      })
      .catch((error) => {
        alert("검색 에러: " + error.message);
      });
  };
  const getJpaList = async () => {
    axios
      .get("http://localhost:8080/foodListJpa")
      .then((res) => {
        setJpaList(res.data);
        console.log("응답 완료 : ", res.data);
      })
      .catch((error) => {
        alert("검색 에러: " + error.message);
      });
  };

  useEffect(() => {
    getKorList(); // getList 함수 호출
    getChaList();
    getJpaList();
  }, []);

  const [foodList, setFoodList] = useState({
    한식: ["김밥", "불고기"],
    중식: ["짜장", "짬뽕"],
    일식: ["규동", "스시"],
  });

  const formDataRef = useRef({ id: "", name: "", password: "" });

  const [openModal, setOpenModal] = useState(false);
  const [add, setAdd] = useState(true);
  const [reg, setReg] = useState(false);
  const [edit, setEdit] = useState(false);
  const [foodIs, setFoodIs] = useState("");
  const [recomend, setRecomend] = useState(0);

  return (
    <div className="App">
      <Title
        setOpenModal={setOpenModal}
        setReg={setReg}
        add={add}
        setAdd={setAdd}
      />
      <Routes>
        <Route
          path="/foodList"
          element={
            <CartList1 korList={korList} chaList={chaList} jpaList={jpaList} />
          }
        ></Route>

        <Route
          path="/home"
          element={
            <Content
              foodList={foodList}
              setFoodList={setFoodList}
              setOpenModal={setOpenModal}
              setEdit={setEdit}
              setFoodIs={setFoodIs}
              recomend={recomend}
              setRecomend={setRecomend}
            />
          }
        ></Route>
        <Route
          path="/mypage"
          element={<Mypage formDataRef={formDataRef} />}
        ></Route>
        <Route path="/login" element={<Login formDataRef={formDataRef} />} />
        <Route path="/join" element={<Join formDataRef={formDataRef} />} />
      </Routes>

      {openModal && (
        <Modal
          foodList={foodList}
          setOpenModal={setOpenModal}
          setFoodList={setFoodList}
          reg={reg}
          edit={edit}
          setReg={setReg}
          setEdit={setEdit}
          foodIs={foodIs}
          setFoodIs={setFoodIs}
          setRecomend={setRecomend}
        />
      )}
    </div>
  );
}

export default App;
