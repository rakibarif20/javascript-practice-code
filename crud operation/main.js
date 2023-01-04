// selector

let inputElement = document.getElementById("inputField");
let submitButton = document.getElementById("inputSubmit");
let formElement = document.getElementById("formElement");
let ulElement = document.getElementById("ulElement");
// variables name

let todoList = [];
let iditableItem = [];
let editMode = false;
let editableValue = null;
let urlAPI = "http://localhost:3000/posts";

const getTodos = () => {
  fetch(urlAPI)
    .then((respon) => respon.json())
    .then((data) => {
      todoList = data;
      ulElement.replaceChildren();
      for (let i = 0; i < todoList.length; i++) {
        showElement(todoList[i]);
      }
    });
};

let showElement = (e) => {
  // li create
  let liElement = document.createElement("li");
  liElement.setAttribute("class", "liElement");
  liElement.innerHTML = e.title;
  // div create
  let divElement = document.createElement("div");

  //edit button create
  let editButton = document.createElement("button");
  editButton.setAttribute("class", "editButton");
  editButton.innerHTML = "Edit";

  editButton.addEventListener("click", () => {
    editItem(e);
  });
  divElement.appendChild(editButton);

  // delete button Create
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "deleteButton");
  deleteButton.innerHTML = "Delete";

  //delete function call
  deleteButton.addEventListener("click", () => {
    deleteTodo(e);
  });
  divElement.appendChild(deleteButton);

  liElement.appendChild(divElement);

  ulElement.appendChild(liElement);
};

// create todo item
const createTodoItem = (e) => {
  if (inputElement.value !== "") {
    e.preventDefault();
    const newTodoElement = {
      id: Date.now() + "",
      title: inputElement.value,
      author: false,
    };

    fetch(urlAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoElement),
    }).then((res) => {
      getTodos();
      inputElement.value = "";
    });
  }
};
// delete todo item
const deleteTodo = (e) => {
  fetch(`${urlAPI}/${e.id}`, {
    method: "DELETE",
  }).then(() => {
    getTodos();
  });

  // console.log('delete called');
};
// create new todo
formElement.addEventListener("submit", (e) => {
  editMode ? updateTodo(e) : createTodoItem(e);
});

//edit and update
const editItem = (todo) => {
  iditableItem = todo;
  inputElement.value = todo.title;
  editMode = true;

  console.log("editItem called");
};

const updateTodo = (e) => {
  if (inputElement.value !== "") {
    e.preventDefault();
    const updatedTodo = {
      id: iditableItem.id,
      title: inputElement.value,
      author: iditableItem.author,
    };
    fetch(`${urlAPI}/${iditableItem.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    }).then(() => {
      getTodos();
      editMode = false;
      iditableItem = "";
      inputElement.value = "";
    });
  }

  console.log("updated called");
};

//load windows
window.addEventListener("load", getTodos);
