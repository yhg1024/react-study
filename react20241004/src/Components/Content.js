import { useState } from 'react';

const Food = ({food, type, setOpenModal, setEdit, setFoodIs, setFoodList}) => {

    const [recomend, setRecomend] = useState(0);

    const ThumbsUp = (count) => {
        setRecomend((prev) => prev === 0 && count <0 ? 0 : prev + count)
    }

    const FoodIs = (food, type) => {
        setFoodIs (() => ({
            type : type,
            food : food
        }))
    }

    const Delete = (type, food) => {
        setFoodList((prevFood) => ({
            ...prevFood,
            [type]: prevFood[type].filter(item => item !== food),
        }));
    }

    return (
        <li>
            <span onClick={() => {setOpenModal(true); setEdit(true); FoodIs(food, type);}}>{food}</span>
            <sapn onClick={() => ThumbsUp(1)}>👍</sapn>
            <span>추천 {recomend}</span>
            <sapn onClick={() => ThumbsUp(-1)}>👎</sapn>
            <button onClick={() => Delete(type, food)}>삭제</button>
        </li>
    )
}

const Content = ({foodList, setFoodList, setFoodIs, setOpenModal, setEdit}) => {

    return (
        <div>
            { Object.keys(foodList).map((type) => 
                <div className="blogContent">
                    <div className="contentTitle">{type}</div>
                    <ul className="content">
                    {foodList[type].map((food) => 
                            <Food food={food} type={type} setOpenModal={setOpenModal} setEdit={setEdit} setFoodIs={setFoodIs} setFoodList={setFoodList}/>
                    )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Content;