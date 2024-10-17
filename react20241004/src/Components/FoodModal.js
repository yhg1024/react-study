import { useState } from "react";

export const FoodModal = ({
  setOpenModal,
  reg,
  setReg,
  edit,
  setEdit,
  insertFood,
  setFoodData,
  foodData,
}) => {
  const onclickHandler = (type) => {
    if (type === "reg") {
      insertFood();
    } else if (type === "edit") {
    }
    setOpenModal(false);
    setEdit(false);
    setReg(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({
      ...foodData,
      [name]: value,
    });
  };

  const activeEnter = (e) => {
    if (e.key === "Enter" && reg) {
      onclickHandler("reg");
    } else if (e.key === "Enter" && edit) {
      onclickHandler("edit");
    }
  };

  return (
    <div className="modal">
      <div className="modal_popup">
        <div>
          <label htmlFor="code">코드:</label>
          <input
            type="text"
            id="code"
            name="code"
            value={foodData.code}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">가격:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={foodData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">설명:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={foodData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="good">좋아요 수:</label>
          <input
            type="number"
            id="good"
            name="good"
            value={foodData.good}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="food">음식 이름:</label>
          <input
            type="text"
            id="food"
            name="food"
            value={foodData.food}
            onChange={handleChange}
            required
          />
        </div>
        {edit && <button onClick={() => onclickHandler("edit")}>수정</button>}
        {reg && <button onClick={() => onclickHandler("reg")}>등록</button>}
        <button onClick={() => onclickHandler("can")}>취소</button>
      </div>
    </div>
  );
};
