export const Admin = ({
  korList,
  chaList,
  jpaList,
  setOpenModal,
  edit,
  setEdit,
}) => {
  return (
    <div>
      <div className="menuList">
        <div className="menu">
          <h1>한식</h1>
          {korList.map((item, i) => {
            return (
              <div className="item" key={i}>
                <h2
                  onClick={() => {
                    setOpenModal(true);
                    setEdit(true);
                  }}
                >
                  {item.food}
                  <span>{item.good}❤️</span>
                </h2>
                <p>{item.price}원</p>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
