const list = document.getElementById("todos-list");
const addBtn = document.getElementById("todo-add-btn");
const addInput = document.getElementById("todo-input");

function createTodo() {

  let text = addInput.value;

  if(text ===""){
    return;
  }

  let li = document.createElement("li")
  let checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";

  let paragraph = document.createElement("p")
  paragraph.classList.add("paragraph");
  paragraph.textContent=text;

  let remove = document.createElement("span")
  remove.classList.add("remove");
  remove.innerHTML = "&cross;"

  li.appendChild(checkbox)
  li.appendChild(paragraph)
  li.appendChild(remove)
  list.appendChild (li)
  addInput.value=""
}

function showEditInput(paragraphElement){

  let editInput = document.getElementsByName("editInput")[0]
  if(editInput){
    editInput.remove();
  }

  let input = document.createElement("input")
  input.type="text"
  input.name = "editInput"
  input.value=paragraphElement.textContent;
  input.classList.add("editInput")
  
  let modi = document.createElement("span")
  modi.classList.add("modi");
  modi.innerHTML = "&#9658;"

  paragraphElement.parentElement.appendChild(input)
  paragraphElement.parentElement.append(modi)
  input.focus();
}

function removeTodo(removeElement){

  removeElement.parentElement.remove()
}

function toggleComplete(inputElement){
  
  if(inputElement.checked===false){
    inputElement.parentElement.classList.remove("complete")
  }else{
    inputElement.parentElement.classList.add("complete")
  }
}

function updateTodo(){

  let editInput = document.getElementsByName("editInput")[0];
  let modi =document.getElementsByClassName("modi")[0]
  if(!editInput){
    return
  }
  
  const newText = editInput.value

  if(newText !==""){

    let paragraph = editInput.parentElement.querySelector(".paragraph");
    paragraph.textContent = newText
  }
  editInput.remove()
  modi.remove()
}

// addEventListener
list.addEventListener("click", (e)=>{

  e.stopPropagation()

  switch (e.target.className){
    case "paragraph":
        showEditInput(e.target);
        break;
    case "remove": 
        removeTodo(e.target);
        break;
    case "modi": 
        updateTodo();
        break;
  }
})

list.addEventListener("change", (e)=>(e.target.tagName==="INPUT" && e.target.type ==="checkbox")&&toggleComplete(e.target))

list.addEventListener("keypress",  (e)=>(e.target.tagName==="INPUT" && e.target.type ==="text"&&e.key==="Enter")&&updateTodo(e.target)  )

document.addEventListener("click", updateTodo)

addBtn.addEventListener("click", (e)=>{
  e.stopPropagation()
  createTodo();
} )

addInput.addEventListener("keypress",(e)=>e.key==="Enter"&&createTodo())