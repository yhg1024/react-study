import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export const OrderList = ({
  shoppingList,
  setShoppingList,
  count,
  setCount,
  totalPrice,
  setTotalPrice,
  isLogin,
}) => {
  const navigate = useNavigate();
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

  const order = () => {
    console.log("order" + sessionStorage.getItem(isLogin));
    if (sessionStorage.getItem(isLogin) !== true) {
      alert("로그인 하세요.");
      navigate("/login");
    } else {
      alert("주문이 완료되었습니다.");
      setShoppingList([]);
      navigate("/foodList");
    }
  };
  return (
    <div>
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
                <p>{item.price}원</p>
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
      <div className="price">
        <h1>총 금액 : {shoppingList.length > 0 ? totalPrice : 0}원</h1>
      </div>
      {shoppingList.length > 0 && (
        <div className="order">
          <button className="button" onClick={order}>
            주문하기
          </button>
        </div>
      )}
    </div>
  );
};
