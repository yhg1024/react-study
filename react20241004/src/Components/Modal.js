import { useState, useRef } from 'react';

export const Modal = ({setOpenModal, setFoodList}) => {
    const [newType, setNewType] = useState(null);
    const [newFood, setNewFood] = useState(null);

    // const newTypeRef = useRef();
    // const newFoodRef = useRef();

    const onclickHandler = (type) => {
        if (type === 'reg'){
            // const type = newTypeRef.current.value;
            // const food = newFoodRef.current.value;

            setFoodList((prevFood) => ({
                ...prevFood,
                [newType]: [...(prevFood[newType] || []), newFood],
            }))
        }
        setOpenModal(false)
    }

    return (
        <div className="modal">
            <div className="modal_popup">
                <div>
                    음식타입 : <input type="text" onChange={e => setNewType(e.target.value)} value={newType}></input>
                </div>
                <div>
                    음식 : <input type="text" onChange={e => setNewFood(e.target.value)} value={newFood}></input>
                </div>
                <button onClick={() => onclickHandler("reg")}>등록</button>
                <button onClick={() => onclickHandler("can")}>취소</button>
            </div>
        </div>
    )
}