import { useState } from 'react';

const FoodList = ({food}) => {

    const [recomend, setRecomend] = useState(0);

    const ThumbsUp = (count) => {
        setRecomend((prev) => prev === 0 && count <0 ? 0 : prev + count)
    }

    return (
        <li>
            {food}
            <sapn onClick={() => ThumbsUp(1)}>👍</sapn>
            <span>추천 {recomend}</span>
            <sapn onClick={() => ThumbsUp(-1)}>👎</sapn>
        </li>
    )
}

const Content = ({foodList}) => {

    return (
        <div>
            { Object.keys(foodList).map((type) => 
                <div className="blogContent">
                    <div className="contentTitle">{type}</div>
                    <ul className="content">
                    {foodList[type].map((food) => 
                            <FoodList food={food}/>
                    )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Content;
