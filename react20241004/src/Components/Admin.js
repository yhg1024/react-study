export const Admin = ({
  korList,
  chaList,
  jpaList,
  setOpenModal,
  edit,
  setEdit,
  setFoodData,
  deleteFood,
}) => {
  return (
    <div>
      <div className="menuList">
        <div className="menu">
          <h1>한식</h1>
          {korList.map((item, i) => {
            return (
              <div className="item" key={i}>
                <div>
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
        <div className="menu">
          <h1>중식</h1>
          {chaList.map((item, i) => {
            return (
              <div className="item" key={i}>
                <div>
                  <h2>
                    {item.food}
                    <span>{item.good}❤️</span>
                  </h2>
                  <p>{item.price}원</p>
                </div>
                <div>
                  <button
                    onClick={() => {
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
        <div className="menu">
          <h1>일식</h1>
          {jpaList.map((item, i) => {
            return (
              <div className="item" key={i}>
                <div>
                  <h2>
                    {item.food}
                    <span>{item.good}❤️</span>
                  </h2>
                  <p>{item.price}원</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setOpenModal(true);
                      setEdit(true);
                    }}
                  >
                    수정
                  </button>
                  <button
                    onClick={() => {
                      deleteFood(item.id);
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
  );
};
