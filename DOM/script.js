let todoInput=document.querySelector(".todo-input")
let addTodoButton= document.querySelector(".add-todo");
 
addTodoButton.addEventListener('click', function(){
    addTodo();
});
todoInput.addEventListener('keypress',function(event){
     if(event.key=='Enter'){
         addTodo();
     }
});

function addTodo(){
    let todo= todoInput.value;
    if(todo){

        let liItem=document.createElement("li");
        liItem.classList.add("todo-item");

        let pTag=document.createElement("p");
        pTag.classList.add("todo");
        pTag.innerHTML=todo;

        let button=document.createElement("button");
        button.classList.add("delete-button");
        button.innerHTML="Delete";

        button.addEventListener('click',function(event){
            console.log(event);
            console.log("delete todo clicked");
            event.target.parentNode.remove();
        })

        liItem.append(pTag);
        liItem.append(button);

        let ul=document.querySelector(".todo-list");
        ul.append(liItem);
        console.log(liItem);

 
    }
    todoInput.value="";
}


