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