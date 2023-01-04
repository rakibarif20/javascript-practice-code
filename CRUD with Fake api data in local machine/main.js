// selector area

const formElement = document.getElementById("formTag");
let inputElement = document.getElementById("inputElement");
const submitButton = document.getElementById("submitButton");
const ulElement = document.getElementById("ulId");
const apiUrl = "http://localhost:3000/posts";

let editableTodo = null; // null data type object er meaning hosse kisu e na .
let editMode = false;
let changeStyle = null;
let todoList = [];

const getTodos = () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      todoList = data;
      ulElement.replaceChildren();
      inputElement.value = "";
      // console.log(todoList);
      for (let i = 0; i < todoList.length; i++) {
        udpateTodos(todoList[i]);
      }
    });
};

// console.log(todoList); ai line e data na aser karon holo call stack .

let udpateTodos = (todo) => {
  let liClick = false;
  let li = document.createElement("li");
  li.setAttribute("class", "todo_list");
  li.setAttribute("id", todo.id);
  li.innerHTML = todo.title;
  li.addEventListener('click', ()=>{
    changeStyleElement(todo)
  });
  todo.author ? li.classList.add('update-style') : null
  ulElement.appendChild(li);

  // create div element
  let divElement = document.createElement("div");

  // edit button
  let editButton = document.createElement("button");
  editButton.setAttribute("class", "todo_button");
  editButton.innerHTML = "Edit";
  divElement.appendChild(editButton);

  // edit button click and edit todo
  editButton.addEventListener("click", (e) => {
    e.stopPropagation();
    editTodo(todo);
  });

  // Delete button
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete-button");
  deleteButton.innerHTML = "Delete";
  divElement.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    removeTodo(todo);
    
    console.log("delete button click");
  });
  li.appendChild(divElement);

  // listner
  // li.addEventListener("click", () => {
  //   console.log("li click insede of function");
  //   console.log(liClick, "inside");
  //   li.classList.add(liClick ? "bg-firebrick" : "bg-darkblue");
  //   if (liClick) {
  //     li.classList.remove("bg-darkblue");
  //   } else {
  //     li.classList.remove("bg-firebrick");
  //   }
  //   return (liClick = !liClick);
  // });

  // if (li.className == "todo_list") {
  //   li.classList.add("bg-firebrick");
  // }
};

// create new todos

const createNewTodo = (e) => {
  // e.preventDefault();
  // falsy value er hisabe condition dawa hoise jamon '' falsy value 0 NaN and more total 6 ta .
  if (inputElement.value) {
    e.preventDefault();
    const newTodo = {
      id: Date.now() + "",
      title: inputElement.value,
      author: false,
    };

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then((res) => {
      // console.log(res);
      getTodos();
    });
  } else {
    alert("please input valid title");
  }
};
// detee todo
const removeTodo = (todo) => {
  fetch(`${apiUrl}/${todo.id}`, {
    method: "DELETE",
  }).then(() => {
    getTodos();
  });
};

//edit todo
const editTodo = (todo) => {
  editableTodo = todo;
  inputElement.value = editableTodo.title;
  editMode = true;
};

// change style depending true falase value;
const changeStyleElement = (e)=>{
changeStyle = e;
const newChangeStyle ={
  id:changeStyle.id,
  title:changeStyle.title,
  author: !changeStyle.author
};
fetch(`${apiUrl}/${e.id}`,{
  method : 'PATCH',
  headers : {
    "Content-Type":"application/json",
  },
  body : JSON.stringify(newChangeStyle)
}).then(()=>{
  getTodos();
  changeStyle = null
})
}
// updated todo function
const updatedTodo = (e) => {
  if (inputElement.value !== "") {
    e.preventDefault()
    const updatedTodoItem = {
      id: editableTodo.id,
      title: inputElement.value,
      author: inputElement.author,
    };
    fetch(`${apiUrl}/${editableTodo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodoItem),
    }).then(() => {
      getTodos();
      editMode = false;
      inputElement.value = "";
    });
  } else {
    alert("input value title name.");
  }
};
// submit form
formElement.addEventListener("submit", function (e) {
  if (editMode) {
    updatedTodo(e);
  } else {
    createNewTodo(e);
    // console.log("submit form");
  }
});

// getTodos()
window.addEventListener("load", getTodos);
