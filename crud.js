const abirModal = () => document.getElementById("modal")
.classList.add("active");

const fecharModal = () => document.getElementById("modal")
.classList.remove("active");

const btn_cadastrar = document.getElementById("cadastrarCliente");

btn_cadastrar.addEventListener("click", () => {
    abirModal();
});

btn_cancelar.addEventListener("click", () => {
    fecharModal();
});

//  FUNCIONALIDADES CRUD

//CRIAR

const clienteTemp = {
    nome: "Clélio David",
    email:"cleliodavid3@gmail.com",
    telefone:"+244 923 420 231",
    cidade:"Sequele"
}

const criarCliente = (client) => {
    localStorage.setItem("db_cliente", JSON.stringify(client));
}








