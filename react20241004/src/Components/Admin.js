export const Admin = ({
  foodList,
  setOpenModal,
  edit,
  setEdit,
  setFoodData,
  deleteFood,
}) => {
  return (
    <div className="contentCenter">
      <div className="menuList">
        <div className="menu">
          <input type="checkbox" value="selectAll" className="selectAll" />{" "}
          <label for="selectAll">
            <b>전체</b> <button>삭제</button>
          </label>
          <div className="listWrap">
            {foodList.map((item, i) => {
              return (
                <div className="item" key={i}>
                  <div>
                    <input type="checkbox" value="select" className="select" />
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
