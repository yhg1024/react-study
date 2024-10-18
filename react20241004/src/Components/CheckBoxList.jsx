// CheckBoxList
import React, { useState } from "react";
import CheckBox from "./CheckBox";
export default function App() {
  const [checkItems, setCheckItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);
  const checkList = [
    ...Array(5)
      .fill("체크")
      .map((v, i) => v + i),
  ];
  const checkItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkItems.add(id);
      setCheckItems(checkItems);
      console.log(checkItems);
    } else if (!isChecked) {
      checkItems.delete(id);
      setCheckItems(checkItems);
    }
    const allCheckedHandler = ({target}) => {
        if (target.checked) {
          setCheckItems(new Set(checkList.map((checkbox, index) => `id`+index)))
          setIsAllChecked(true)
        } else {
          checkItems.clear();
          setCheckItems(checkItems);
          setIsAllChecked(false)
        }
      }
  };

  return (
    <>
      <header>
        <label>
          <input type="checkbox" onChange={(e) => allCheckedHandler(e)} />
          전체선택
        </label>
      </header>
      <div>
        {checkList.map((issue, index) => (
          <CheckBox key={index} id={`id` + index} checkItemHandler={checkItemHandler} // props로 함수전달 />
        ))}
      </div>
    </>
  );
}
