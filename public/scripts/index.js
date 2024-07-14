const form = document.querySelector("#Todo-form");
const taskTitleinput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list-ul");


form.addEventListener('submit', (submit)=> {
  submit.preventDefault() // Evita o comportamento padrão de recarregar a pagina ao submeter o form

 const taskTitle = taskTitleinput.value

 if (taskTitle.length < 3){
  alert('Sua tarefa precisa ter pelo menos 3 caracteres.')
  return;


 }

})
