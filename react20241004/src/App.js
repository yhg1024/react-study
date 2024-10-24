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
import { OrderList } from "./Components/OrderList";
import { Admin } from "./Components/Admin";
import { FoodModal } from "./Components/FoodModal";

function App() {
  const [foodList, setFoodList] = useState([]);

  const getFoodList = async () => {
    axios
      .get("http://localhost:8080/foodList")
      .then((res) => {
        setFoodList(res.data);
        console.log("응답 완료 : ", res.data);
      })
      .catch((error) => {
        alert("검색 에러: " + error.message);
      });
  };

  const [foodData, setFoodData] = useState({
    code: "",
    price: "",
    description: "",
    id: "",
    good: "",
    food: "",
  });

  const insertFood = async () => {
    if (foodData.code == "한식" || foodData.code == "kor") {
      setFoodData((foodData.code = "kor"));
    } else if (foodData.code == "중식" || foodData.code == "cha") {
      setFoodData((foodData.code = "cha"));
    } else if (foodData.code == "일식" || foodData.code == "jpa") {
      setFoodData((foodData.code = "jpa"));
    } else {
      alert("음식 종류를 바르게 입력해주세요.");
    }
    axios
      .post("http://localhost:8080/insertFood", foodData)
      .then((res) => {
        alert(foodData.code);
        getFoodList();
      })
      .catch((error) => {
        alert("error는 " + error);
      });
  };

  const updateFood = async () => {
    axios
      .post("http://localhost:8080/updateFood")
      .then((res) => {
        alert("성공");
        getFoodList();
      })
      .catch((error) => {
        alert("error는 " + error);
      });
  };

  const deleteFood = async (param) => {
    console.log(param);
    axios
      .post("http://localhost:8080/deleteFood", param)
      .then((res) => {
        alert("성공");
        getFoodList();
      })
      .catch((error) => {
        alert("error는 " + error);
      });
  };

  useEffect(() => {
    getFoodList();
  }, []);

  // const [foodList, setFoodList] = useState({
  //   한식: ["김밥", "불고기"],
  //   중식: ["짜장", "짬뽕"],
  //   일식: ["규동", "스시"],
  // });

  const formDataRef = useRef({ id: "", name: "", password: "" });

  const [openModal, setOpenModal] = useState(false);
  const isLoginRef = useRef(false);
  const [add, setAdd] = useState(true);
  const [reg, setReg] = useState(false);
  const [edit, setEdit] = useState(false);
  const [foodIs, setFoodIs] = useState("");
  const [recomend, setRecomend] = useState(0);
  const [shoppingList, setShoppingList] = useState([]);
  const [count, setCount] = useState([]); // 초기화 시 빈 배열
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="App">
      <Title
        setOpenModal={setOpenModal}
        setReg={setReg}
        add={add}
        setAdd={setAdd}
        isLoginRef={isLoginRef}
      />
      <Routes>
        <Route
          path="/foodList"
          element={
            <CartList1
              shoppingList={shoppingList}
              setShoppingList={setShoppingList}
              count={count}
              setCount={setCount}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              foodList={foodList}
            />
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
        <Route
          path="/login"
          element={<Login formDataRef={formDataRef} isLoginRef={isLoginRef} />}
        />
        <Route path="/join" element={<Join formDataRef={formDataRef} />} />
        <Route
          path="/order"
          element={
            <OrderList
              shoppingList={shoppingList}
              setShoppingList={setShoppingList}
              count={count}
              setCount={setCount}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              isLoginRef={isLoginRef}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <Admin
              foodList={foodList}
              setOpenModal={setOpenModal}
              reg={reg}
              edit={edit}
              setReg={setReg}
              setEdit={setEdit}
              setFoodData={setFoodData}
              deleteFood={deleteFood}
            />
          }
        />
      </Routes>

      {openModal && (
        <FoodModal
          setOpenModal={setOpenModal}
          edit={edit}
          setEdit={setEdit}
          reg={reg}
          setReg={setReg}
          insertFood={insertFood}
          updateFood={updateFood}
          foodData={foodData}
          setFoodData={setFoodData}
        />
        // <Modal
        //   foodList={foodList}
        //   setOpenModal={setOpenModal}
        //   setFoodList={setFoodList}
        //   reg={reg}
        //   edit={edit}
        //   setReg={setReg}
        //   setEdit={setEdit}
        //   foodIs={foodIs}
        //   setFoodIs={setFoodIs}
        //   setRecomend={setRecomend}
        // />
      )}
    </div>
  );
}

export default App;
