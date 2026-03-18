const abirModal = () =>
  document.getElementById("modal").classList.add("active");

const fecharModal = () =>
  document.getElementById("modal").classList.remove("active");

const btn_cadastrar = document.getElementById("cadastrarCliente");

const btn_canelar = document.getElementById("btn_cancelar");

btn_cadastrar.addEventListener("click", () => {
  abirModal();
});

btn_canelar.addEventListener("click", () => {
  fecharModal();
});

//  FUNCIONALIDADES CRUD

//CRIAR

const clienteTemp = [
  "Clélio David",
  "cleliodavid3@gmail.com",
  "+244 923 420 231",
  "Sequele",
];

const criarCliente = (client) => {
  localStorage.setItem("db_cliente", JSON.stringify(client));
  clienteTemp.push(client);
};

const clienteNome = document.getElementById("client_name");

clienteNome.innerHTML = clienteTemp[0];






const apagarClient = () => {};

const editClient = () => {};
