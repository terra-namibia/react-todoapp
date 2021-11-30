import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { InCompleteTodos } from "./components/InCompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import { ChildArea } from "./components/ChildArea";
import "./styles.css";

// ReactDom.render(<App />, document.getElementById("root"));
export const App = () => {
  console.log("Appをレンダリング");

  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "bbbb"])
  const [completeTodos, setCompleteTodos] = useState(["cccc", "dddd"])
  const [todoText, setTodoText] = useState("")

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }
  const [open, setOpen] = useState(false);
  const onClickOpen = () => {
    setOpen(!open);
  }

  return (
    <>
      <InputTodo todoText={todoText} disabled={incompleteTodos.length >= 5} onChange={onChangeTodoText} onClick={onClickAdd}/>
      {incompleteTodos.length >= 5 && (
        <p style={{color: "red"}} >登録できるtodoは5個まで</p>
      )}
      <InCompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>
      <CompleteTodos todos={completeTodos} onClick={onClickBack}/>
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </>
  );
}
