import { useState } from "react";

const Food = ({
  food,
  type,
  setOpenModal,
  setEdit,
  setFoodIs,
  setFoodList,
  recomend,
  setRecomend,
}) => {
  const ThumbsUp = (count, type, food) => {
    setRecomend((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [food]:
          (prev[type]?.[food] || 0) === 0 && count < 0
            ? 0
            : (prev[type]?.[food] || 0) + count,
      },
    }));
  };

  const FoodIs = (food, type) => {
    setFoodIs(() => ({
      type: type,
      food: food,
    }));
  };

  const Delete = (type, food) => {
    setFoodList((prevFood) => ({
      ...prevFood,
      [type]: prevFood[type].filter((item) => item !== food),
    }));
  };

  return (
    <li>
      <span
        onClick={() => {
          setOpenModal(true);
          setEdit(true);
          FoodIs(food, type);
        }}
      >
        {food}
      </span>
      <sapn onClick={() => ThumbsUp(1, type, food)}>👍</sapn>
      <span>
        추천 {recomend[type] && recomend[type][food] ? recomend[type][food] : 0}
      </span>
      <sapn onClick={() => ThumbsUp(-1, type, food)}>👎</sapn>
      <button onClick={() => Delete(type, food)}>삭제</button>
    </li>
  );
};

const Content = ({
  foodList,
  setFoodList,
  setFoodIs,
  setOpenModal,
  setEdit,
  recomend,
  setRecomend,
}) => {
  return (
    <div>
      {Object.keys(foodList).map((type) => (
        <div className="blogContent">
          <div className="contentTitle">{type}</div>
          <ul className="content">
            {foodList[type].map((food) => (
              <Food
                food={food}
                type={type}
                setOpenModal={setOpenModal}
                setEdit={setEdit}
                setFoodIs={setFoodIs}
                setFoodList={setFoodList}
                recomend={recomend}
                setRecomend={setRecomend}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Content;
