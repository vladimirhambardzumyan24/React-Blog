export function ToDoSave(blocks) {
    localStorage.setItem("blocks", JSON.stringify(blocks));
  }
  
  export function getToDo() {
    return JSON.parse(localStorage.getItem("blocks"));
  }