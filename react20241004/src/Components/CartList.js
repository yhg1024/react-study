import { useState } from "react";
export function CartList({ list }) {
  const [count, setCount] = useState([0, 0, 0]);
  const [totalPrice, setTotalPrice] = useState(null);
  return (
    <div className="menu">
      <div className="cartlist">
        {list.map((item, i) => {
          const price = item.price * (count[i] > 0 ? count[i] : 0);
          return (
            <div className="food-item" key={item.id}>
              <h3>{item.food}</h3>
              <p className="price">가격: {item.price}원</p>
              <p>설명: {item.description}</p>
              <p className="count">
                <span
                  onClick={() => {
                    const newCount = [...count];
                    newCount[i]++;
                    setCount(newCount);
                  }}
                >
                  ➕
                </span>
                {count[i] > 0 ? count[i] : 0}
                <span
                  onClick={() => {
                    const newCount = [...count];
                    newCount[i]--;
                    setCount(newCount);
                  }}
                >
                  ➖
                </span>
              </p>
            </div>
          );
        })}
      </div>
      <div className="cartprice">
        <div>총 금액 {totalPrice}</div>
      </div>
    </div>
  );
}
