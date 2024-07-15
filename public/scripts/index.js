const form = document.querySelector("#Todo-form");
const taskTitleinput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list-ul");

let tasks = [];

form.addEventListener("submit", (submit) => {
  submit.preventDefault(); // Evita o comportamento padrão de recarregar a pagina ao submeter o form

  const taskTitle = taskTitleinput.value;

  if (taskTitle.length < 3) {
    alert("Sua tarefa precisa ter pelo menos 3 caracteres.");
    return;
  }

  // Adicionando a nova tarefa no Array de tasks
  tasks.push({
    title: taskTitle,
    done: false,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Adicionando a nova tarefa no HTML
  const li = document.createElement("li");

  // Criando um input vazio
  const input = document.createElement("input");

  // Adicionando uma propriedade ao input
  input.setAttribute("type", "checkbox");

  input.addEventListener("change", (event) => {
    liToToggle = event.target.parentElement;

    const spanToToggle = liToToggle.querySelector("span");

    const done = event.target.checked;
    if (done) {
      spanToToggle.style.textDecoration = "line-through";
    } else {
      spanToToggle.style.textDecoration = "none";
    }

    // Alterando Array
    tasks = tasks.map((t) => {
      if (t.title === spanToToggle.textContent) {
        return {
          title: t.title,
          done: !t.done,
        };
      }
      return t;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  // Adicionando um Span vazio
  const span = document.createElement("span");
  // Adicionando uma propriedade do Span (TaskTitle)
  span.textContent = taskTitle;

  // Adicionando um botão
  const button = document.createElement("button");
  
  // Adicionando um texto ao botão
  button.textContent = "Remover";
  button.addEventListener("click", (event) => {
    const liToRemove = event.target.parentElement;

    // Selecionando o span dentro da LI
    const titleToRemove = liToRemove.querySelector("span").textContent;

    tasks.filter((t) => t.title !== titleToRemove);

    todoListUl.removeChild(liToRemove);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  todoListUl.appendChild(li);

  taskTitleinput.value = "";
});
