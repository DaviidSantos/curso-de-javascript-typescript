const input = document.querySelector(".input-nova-tarefa");
const tarefas = document.querySelector(".tarefas");
const btnAddTarefa = document.querySelector(".add-tarefa");

const carregarTarefas = () => {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);

  for (const tarefa of listaDeTarefas) {
    criarTarefa(tarefa);
  }
};

const criarTarefa = (tarefa) => {
  const itemTarefa = criarItemTarefa();
  const span = document.createElement("span");
  span.innerText = tarefa;
  itemTarefa.append(span);
  const botaoApagar = criaBotaoApagar();
  itemTarefa.append(botaoApagar);
  tarefas.append(itemTarefa);
  limparInput();
  salvarTarefa();
};

const criarItemTarefa = () => {
  const itemTarefa = document.createElement("li");
  return itemTarefa;
};

const criaBotaoApagar = () => {
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.classList.add("apagar");
  return botaoApagar;
};

const salvarTarefa = () => {
  const itensTarefas = document.querySelectorAll("span");
  const listaTarefas = [];
  for (const tarefa of itensTarefas) {
    listaTarefas.push(tarefa.innerText);
  }

  const tarefasJson = JSON.stringify(listaTarefas);
  localStorage.setItem("tarefas", tarefasJson);
};

const apagarTarefa = (e) => {
  e.target.parentElement.remove();
  salvarTarefa();
};

const limparInput = () => {
  input.value = "";
  input.focus();
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-tarefa")) {
    const tarefa = input.value;
    if (tarefa.length > 0) {
      criarTarefa(tarefa);
    }
  } else if (e.target.classList.contains("apagar")) {
    apagarTarefa(e);
  }
});

carregarTarefas();
