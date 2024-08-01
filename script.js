const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todolist = document.getElementById('todolist');

let editTodo =null;


// Function to add to do 
const addToDo = ()=>{
    const inputText = inputBox.value.trim();
    if(inputText.length <=0){
        alert("you must write something in your to do");
        return false;
    }
    if(addBtn.value ==="Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        editLocalTodos(inputText);
        addBtn.value = "Add"
        inputBox.value ="";
    }
    else{

    // Creating p tag

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML= inputText;
    li.appendChild(p);


    // Creating Edit btn

    const editBtn =document.createElement("button");
    editBtn.classList.add("btn" ,"editBtn");
    editBtn.innerText = "Edit";
    li.appendChild(editBtn);

     // Creating Delete btn

     const deleteBtn =document.createElement("button");
     deleteBtn.innerText = "Remove";
     deleteBtn.classList.add("btn" , "deleteBtn");
     li.appendChild(deleteBtn);
    

    todolist.appendChild(li);
    inputBox.value ="";

    saveLocalTodos(inputText);
    }

}

// Function to update : (Edit/Delete) to do 
const updateTodo = (e)=>{
    // console.log(e.target.innerHTML);
    if(e.target.innerHTML ==="Remove"){
        todolist.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    }

    if(e.target.innerHTML ==="Edit"){
        inputBox.value =e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value ="Edit";
        editTodo =e;
    }

}

// Function to Save Local  todo 
const saveLocalTodos = (todo)=>{
    let todos ;
    if(localStorage.getItem("todos")===null){
        todos =[];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos" ,JSON.stringify(todos));

}

// Function to Get Local  todo 
const getLocalTodos = ()=> {
    let todos ;
    if(localStorage.getItem("todos")===null){
        todos =[];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {
            
     // Creating p tag

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML= todo;
    li.appendChild(p);


    // Creating Edit btn

    const editBtn =document.createElement("button");
    editBtn.classList.add("btn" ,"editBtn");
    editBtn.innerText = "Edit";
    li.appendChild(editBtn);

     // Creating Delete btn

     const deleteBtn =document.createElement("button");
     deleteBtn.innerText = "Remove";
     deleteBtn.classList.add("btn" , "deleteBtn");
     li.appendChild(deleteBtn);
    

    todolist.appendChild(li);
            
        });
    }
}

// Function to Delete Local  todo 
const deleteLocalTodos = () => {

    let todos ;
    if(localStorage.getItem("todos")===null){
        todos =[];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    let todoText = todos.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", (todos));
    // Array function : slice / splice
    console.log(todoIndex);

}

const editLocalTodos = (todo) => {
    let todos =json.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] =inputBox.value;
    localStorage.setItem("todos", JSON.stringify(todos));

}
document,addEventListener('DOMContentLoaded',getLocalTodos);
addBtn.addEventListener('click' , addToDo);

todolist.addEventListener('click' , updateTodo);