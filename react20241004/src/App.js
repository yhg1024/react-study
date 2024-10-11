import "./App.css";
import Title from "./Components/Title";
import Content from "./Components/Content";
import { useState } from "react";
import { Modal } from "./Components/Modal";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Mypage } from "./Components/Mypage";

function App() {
  const [foodList, setFoodList] = useState({
    한식: ["김밥", "불고기"],
    중식: ["짜장", "짬뽕"],
    일식: ["규동", "스시"],
  });

  const [openModal, setOpenModal] = useState(false);
  const [reg, setReg] = useState(false);
  const [edit, setEdit] = useState(false);
  const [foodIs, setFoodIs] = useState("");
  const [recomend, setRecomend] = useState(0);

  return (
    <div className="App">
      <Title setOpenModal={setOpenModal} setReg={setReg} />

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
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/login" element={<Login />}></Route>
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
