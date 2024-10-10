import './App.css';
import Title from './Components/Title';
import Content from './Components/Content';
import { useState } from "react";
import { Modal } from './Components/Modal';

function App() {
  
  const [foodList, setFoodList] = useState(
    {
      한식 : ["김밥", "불고기"], 
      중식 : ["짜장", "짬뽕"],  
      일식 : ["규동", "스시"]
    }
  );

  const [openModal, setOpenModal] = useState(false);
  const [reg, setReg] = useState(false);
  const [edit, setEdit] = useState(false);
  const [foodIs, setFoodIs] = useState('');

  return (
    <div className="App">
      <Title setOpenModal={setOpenModal} setReg={setReg}/>
      <Content foodList={foodList} setFoodList={setFoodList} setOpenModal={setOpenModal} setEdit={setEdit} setFoodIs={setFoodIs}/>  
      {openModal && <Modal foodList={foodList} setOpenModal={setOpenModal} setFoodList={setFoodList} reg={reg} edit={edit} setReg={setReg} setEdit={setEdit} foodIs={foodIs} setFoodIs={setFoodIs} />}  
    </div>
  );
}

export default App;
