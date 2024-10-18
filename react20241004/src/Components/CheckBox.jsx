// CheckBox
export default function CheckBox() {
  const [checked, setChecked] = useState(false); // 체크 여부 판단

  const checkHandled = ({ target }) => {
    setChecked(!checked);
    checkItemHandler(target.id, target.checked);
  };
  return (
    <label>
      <input
        id={id}
        type="checkbox"
        checked={bChecked}
        onChange={(e) => checkHandled(e)}
      />
      {text}
    </label>
  );
}
