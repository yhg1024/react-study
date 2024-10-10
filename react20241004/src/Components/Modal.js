import { useState, useRef } from 'react';

export const Modal = ({setOpenModal, setFoodList, reg, setReg, edit, setEdit, foodIs, setFoodIs}) => {
    const [newType, setNewType] = useState(null);
    const [newFood, setNewFood] = useState(null);

    // const newTypeRef = useRef();
    // const newFoodRef = useRef();

    const onclickHandler = (type, e) => {
        if (type === 'reg'){
            // const type = newTypeRef.current.value;
            // const food = newFoodRef.current.value;

            setFoodList((prevFood) => ({
                ...prevFood,
                [newType]: [...(prevFood[newType] || []), newFood],
            }))
        } else if (type === 'edit'){
            setFoodList((prevFood) => ({
                ...prevFood,
                [foodIs.type]: prevFood[foodIs.type].map(item => item === foodIs.food ? newFood : item),
            }));
        }
        setOpenModal(false)
        setEdit(false)
        setReg(false)
        setFoodIs('')
    }

    return (
        <div className="modal">
            <div className="modal_popup">
                <div>
                    음식타입 : <input type="text" onChange={e => setNewType(e.target.value, foodIs.type)} value={newType} defaultValue={foodIs.type}></input>
                </div>
                <div>
                    음식 : <input type="text" onChange={e => setNewFood(e.target.value)} value={newFood} defaultValue={foodIs.food}></input>
                </div>
                {edit && <button onClick={() => onclickHandler("edit")}>수정</button>}
                {reg && <button onClick={() => onclickHandler("reg")}>등록</button>}
                <button onClick={() => onclickHandler("can")}>취소</button>
            </div>
        </div>
    )
}