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

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get("http://localhost:8080/foodList");
        setList(res.data); // axios는 응답 데이터가 res.data에 포함됨
      } catch (error) {
        alert("검색 에러: " + error.message);
      }
    };

    getList(); // getList 함수 호출
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
      {list}
      <Title
        setOpenModal={setOpenModal}
        setReg={setReg}
        add={add}
        setAdd={setAdd}
      />

      <Routes>
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
