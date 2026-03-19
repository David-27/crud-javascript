const abirModal = () =>
  document.getElementById("modal").classList.add("active");

const fecharModal = () =>
  document.getElementById("modal").classList.remove("active");

const btn_cadastrar = document.getElementById("cadastrarCliente");

const btn_canelar = document.getElementById("btn_cancelar");

const btn_salvar = document.getElementById("btn_salvar")

btn_cadastrar.addEventListener("click", () => {
  abirModal();
});

btn_canelar.addEventListener("click", () => {
  fecharModal();
});

//  FUNCIONALIDADES CRUD

//CRIAR OU ADICIONAR CLIENTE 

btn_salvar.addEventListener("click", () =>{
    const tableCliente = document.getElementById("tableCliente").getElementsByTagName("tbody")[0];

    const nameClient = document.getElementById("new_client").value;
    const emailClient = document.getElementById("new_email").value;
    const telefoneClient = document.getElementById("new_telefone").value;
    const cidadeClient = document.getElementById("new_cidade").value;

    const novaLinha = tableCliente.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);
    const celulaTelefone = novaLinha.insertCell(2);
    const celulaCidade = novaLinha.insertCell(3);

    celulaNome.innerHTML = nameClient;
    celulaEmail.innerHTML = emailClient;
    celulaTelefone.innerHTML = telefoneClient;
    celulaCidade.innerHTML = cidadeClient;

    const clientArray = [nameClient, emailClient, telefoneClient, cidadeClient];

    const addLocalstorage = (client) => {
        localStorage.setItem("db_client", JSON.stringify(client));
        clientArray.push(client);
    }



    addLocalstorage(clientArray);
    fecharModal();

});



const apagarClient = () => {
    
};

const editClient = () => {};
