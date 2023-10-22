const inputBox = document.getElementById("input-box");
const todolist = document.getElementById("todo-list");

function addTask(){
    if (inputBox.value === ''){
        alert("Please write a task");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        todolist.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u2297";
        li.append(span);

    }
    inputBox.value="";
}

todolist.addEventListener("click",function(e){
    if (e.target.tagName ==="LI"){
        e.target.classList.toggle("selected");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
});
