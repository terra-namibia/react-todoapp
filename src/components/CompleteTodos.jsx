import { memo } from "react";

export const CompleteTodos = memo((props) => {
  console.log("CompleteTodosをレンダリング");
  const {todos, onClick} = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul id="complete-list">
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClick(index)}>戻す</button>
              </div>
            </li>  
          );
        })}
      </ul>
    </div>
  );
});