import { useRef, useState, useEffect } from "react";

const CartList1 = ({ korList, chaList, jpaList }) => {
  const [shoppingList, setShoppingList] = useState([]);
  const [count, setCount] = useState([]); // 초기화 시 빈 배열
  const [totalPrice, setTotalPrice] = useState(0);

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
      console.log(`${item.food}가 장바구니에 추가되었습니다.`);
    }
  };

  const handleDecreaseCount = (index) => {
    const newCount = [...count];
    if (newCount[index] > 1) {
      newCount[index]--;
      setCount(newCount);
    } else if (newCount[index] === 1) {
      // 수량이 0이 되는 경우 장바구니에서 해당 아이템 삭제
      setShoppingList((prevList) => {
        const newList = [...prevList];
        // array.splice(start, deleteCount, item1, item2, ...)
        newList.splice(index, 1); // 해당 아이템 삭제
        return newList;
      });
      setCount((prevCount) => {
        const newCountArray = [...prevCount];
        newCountArray.splice(index, 1); // 카운트 배열에서 해당 아이템 삭제
        return newCountArray;
      });
    }
  };

  useEffect(() => {
    // 총 금액 계산
    // array.reduce((누적 값. 이전의 함수 호출 결과가 여기에 저장됩니다, 현재 처리 중인 배열 요소, 현재 요소의 인덱스 (선택적), reduce를 호출한 배열 (선택적)) => {
    //     // 작업 수행
    //   }, 누적 값의 초기값);
    const newTotalPrice = shoppingList.reduce((total, item, index) => {
      return total + item.price * count[index];
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [shoppingList, count]); //  shoppingList나 count가 변경될 때마다 실행

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
                  <span>❤️{item.good}</span>
                </h2>
                <p>가격 {item.price}</p>
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
                  <span>❤️{item.good}</span>
                </h2>
                <p>가격 {item.price}</p>
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
                  <span>❤️{item.good}</span>
                </h2>
                <p>가격 {item.price}</p>
                <button onClick={() => handleAddToCart(item)}>🛒</button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="price">
        <h1>총 금액 : {totalPrice}원</h1>
      </div>

      {/* 장바구니 리스트 */}
      <div className="cart">
        <h1>장바구니</h1>
        <div className="tableH">
          <h2>상품</h2>
          <p>가격</p>
          <p className="count">수량</p>
          <p>총 금액</p>
        </div>
        {shoppingList.length === 0 ? (
          <p>장바구니에 아이템이 없습니다.</p>
        ) : (
          shoppingList.map((item, i) => {
            const price = item.price * count[i];
            return (
              <div key={i} className="cartItem">
                <h2>{item.food}</h2>
                <p>{item.price}</p>
                <p className="count">
                  <span
                    onClick={() => {
                      const newCount = [...count]; // 기존 배열을 복사하여 새로운 배열 생성
                      newCount[i]++; // 복사한 배열의 특정 인덱스 값 증가
                      setCount(newCount); // 새로운 배열로 상태 업데이트
                    }}
                  >
                    ➕
                  </span>
                  {count[i]}
                  <span
                    onClick={() => handleDecreaseCount(i)} // 수량 감소 함수 호출
                  >
                    ➖
                  </span>
                </p>
                <p>{price}원</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CartList1;
