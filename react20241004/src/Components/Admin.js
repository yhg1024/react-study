import { useState } from "react";

export const Admin = ({
  foodList,
  setOpenModal,
  setEdit,
  setFoodData,
  deleteFood,
}) => {
  const [checkItems, setCheckItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);

  const checkItemHandler = (id, isChecked) => {
    const newCheckItems = new Set(checkItems);
    if (isChecked) {
      newCheckItems.add(id);
    } else {
      newCheckItems.delete(id);
    }
    setCheckItems(newCheckItems);
  };

  const allCheckedHandler = ({ target }) => {
    if (target.checked) {
      // 전체 체크
      const allIds = foodList.map((item) => item.id);
      setCheckItems(new Set(allIds));
      setIsAllChecked(true);
    } else {
      // 전체 체크 해제
      setCheckItems(new Set());
      setIsAllChecked(false);
    }
  };

  const deleteAll = () => {
    // 체크된 아이템 정보를 배열로 변환
    const itemsToDelete = foodList.filter((item) => checkItems.has(item.id));

    // deleteFood 함수에 체크된 아이템 정보 전달
    itemsToDelete.forEach((item) => {
      deleteFood(item);
    });

    // 체크 상태 초기화
    setCheckItems(new Set());
    setIsAllChecked(false);
  };

  return (
    <div className="contentCenter">
      <div className="menuList">
        <div className="menu">
          <input
            type="checkbox"
            checked={isAllChecked}
            id="selectAll"
            className="selectAll"
            onChange={allCheckedHandler}
          />{" "}
          <label htmlFor="selectAll">
            <b>전체</b> <button onClick={deleteAll}>삭제</button>
          </label>
          <div className="listWrap">
            {foodList.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <div>
                    <input
                      id={item.id}
                      type="checkbox"
                      checked={checkItems.has(item.id)} // 상태에 따라 체크 여부 결정
                      className="select"
                      onChange={(e) =>
                        checkItemHandler(item.id, e.target.checked)
                      }
                    />
                    <h2>
                      {item.food}
                      <span>{item.good}❤️</span>
                    </h2>
                    <p>{item.price}원</p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setFoodData(item);
                        setOpenModal(true);
                        setEdit(true);
                      }}
                    >
                      수정
                    </button>
                    <button
                      onClick={() => {
                        deleteFood(item);
                      }}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
