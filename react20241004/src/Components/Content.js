import { useState } from 'react';

const Content = ({foodList}) => {

    const [count, setCount] = useState(Object.values(foodList).flat().map(() => 0))
    return (
        <div>
            { Object.keys(foodList).map((type, typeIndex) => 
                <div className="blogContent">
                    <div className="contentTitle">{type}</div>
                    <ul className="content">
                    {foodList[type].map((food, foodIndex) => 
                            {
                                const listIndex =  Object.values(foodList).flat().indexOf(food);
                                return (
                                <li key={foodIndex}>
                                {food}
                                <sapn onClick={() => {
                                    const newCount = [...count]
                                    newCount[listIndex]++
                                    setCount(newCount)
                                }}>👍</sapn>
                                <span>추천 {count[listIndex]}</span>
                                <sapn onClick={() => {
                                    const newCount = [...count]
                                    newCount[listIndex]--
                                    setCount(newCount)
                                }}>👎</sapn>
                            </li>)
                            }
                    )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Content;
