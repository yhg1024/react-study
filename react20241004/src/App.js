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


  return (
    <div className="App">
      <Title setOpenModal={setOpenModal}/>
      <Content foodList={foodList}/>  
      {openModal && <Modal setOpenModal={setOpenModal} setFoodList={setFoodList}/>}  
    </div>
  );
}

export default App;
