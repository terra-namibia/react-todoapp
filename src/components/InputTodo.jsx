import { memo } from "react";

const styleInputArea = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const InputTodo = memo((props) => {
  console.log("InputTodoをレンダリング");
  console.log(props);

  const { todoText, disabled, onChange, onClick } = props;
  return (
    <div style={styleInputArea}>
      <input
        disabled={disabled}
        id="add-text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} id="add-button" onClick={onClick}>
        追加
      </button>
    </div>
  );
});
