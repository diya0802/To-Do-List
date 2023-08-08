window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    const listContainer = document.getElementById("list-container");
    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("add your task");
            return;
        } 
        
        let li = document.createElement("li")
        li.innerHTML = task;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        let cnt = document.getElementsByClassName('list-container');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        input.value="";
        saveData();
    });


    listContainer.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();

        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    },false);
    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML);

    }
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showTask();
});

