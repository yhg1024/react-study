import { useState, useEffect } from "react";
import { OrderList } from "./OrderList";
import { Link } from "react-router-dom";

const CartList1 = ({
  korList,
  chaList,
  jpaList,
  shoppingList,
  setShoppingList,
  count,
  setCount,
  totalPrice,
  setTotalPrice,
}) => {
  const handleAddToCart = (item) => {
    // 장바구니 추가를 누른 아이템이 장바구니에 있는 것이랑 findIndex로 찾아서 동일한지 확인
    const existingItemIndex = shoppingList.findIndex(
      (cartItem) => cartItem.food === item.food
    );

    if (existingItemIndex !== -1) {
      // 이미 장바구니에 있는 경우 수량 증가
      const newCount = [...count];
      newCount[existingItemIndex]++;
      setCount(newCount);
      console.log(`${item.food}의 수량이 증가했습니다.`);
    } else {
      // 장바구니에 아이템 추가
      setShoppingList((prevList) => [...prevList, item]);
      setCount((prevCount) => [...prevCount, 1]); // 새로운 아이템의 카운트를 1로 설정
      alert(`${item.food}가 장바구니에 추가되었습니다.`);
    }
  };

  return (
    <div className="cartLIst">
      <div className="menuList">
        <div className="menu">
          <h1>한식</h1>
          {korList.map((item, i) => {
            return (
              <div className="item" key={i}>
                <h2>
                  {item.food}
                  <span>{item.good}❤️</span>
                </h2>
                <p>{item.price}원</p>
                <button onClick={() => handleAddToCart(item)}>🛒</button>
              </div>
            );
          })}
        </div>
        <div className="menu">
          <h1>중식</h1>
          {chaList.map((item, i) => {
            return (
              <div className="item" key={i}>
                <h2>
                  {item.food}
                  <span>{item.good}❤️</span>
                </h2>
                <p>{item.price}원</p>
                <button onClick={() => handleAddToCart(item)}>🛒</button>
              </div>
            );
          })}
        </div>
        <div className="menu">
          <h1>일식</h1>
          {jpaList.map((item, i) => {
            return (
              <div className="item" key={i}>
                <h2>
                  {item.food}
                  <span>{item.good}❤️</span>
                </h2>
                <p>{item.price}원</p>
                <button onClick={() => handleAddToCart(item)}>🛒</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartList1;
