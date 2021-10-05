// import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  addToIncompleteList(inputText);
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const removeFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

const removeFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
}

const addToCompleteList = (target) => {
  document.getElementById("complete-list").appendChild(target);
}

const addToIncompleteList = (text) => {
  const p = document.createElement("p");
  p.innerText = text;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了"
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除"

  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    removeFromIncompleteList(deleteTarget);
  })

  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.closest("li");
    removeFromIncompleteList(completeTarget);

    const backButton = document.createElement("button");
    backButton.innerText = "戻る"
    completeTarget.firstElementChild.textContent = null;
    completeTarget.firstElementChild.appendChild(p)
    completeTarget.firstElementChild.appendChild(backButton)

    addToCompleteList(completeTarget);

    backButton.addEventListener("click", () => {
      const backTarget = backButton.closest("li");
      removeFromCompleteList(backTarget);

      addToIncompleteList(text);

    })
  
  })

  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
}
