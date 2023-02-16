window.addEventListener('load', () => {
   const form = document.querySelector("#adding-task-form");
   const input = document.querySelector("#adding-task-input");
   const list_el = document.querySelector(".todo-list");

   form.addEventListener("submit", (e) => {
       e.preventDefault();

       const task = input.value;
       if(!task){
           alert("Please write a task!");
           return;
       }
       const task_el = document.createElement("div");
       task_el.classList.add("task");

       const task_text_el = document.createElement("input");
       task_text_el.classList.add("text");
       task_text_el.type = "text";
       task_text_el.value = task;
       const task_check_el = document.createElement("input");
       task_check_el.type = "checkbox";
       const task_delete_el = document.createElement("button");
       task_delete_el.classList.add("delete-item");
       task_delete_el.innerHTML = "<img src=\"../../images/delete.png\" style=\"width:16px\">";

       task_el.appendChild(task_check_el);
       task_el.appendChild(task_text_el);
       task_el.appendChild(task_delete_el);
       input.value = "";


       task_check_el.addEventListener('change', ()=>{
           if(task_check_el.checked){
               task_text_el.classList.add("lineThrough");
           }else{
               task_text_el.classList.remove("lineThrough");
           }
       });
       task_delete_el.addEventListener('click', ()=>{
           list_el.removeChild(task_el);
       });
       list_el.appendChild(task_el);

   });
});