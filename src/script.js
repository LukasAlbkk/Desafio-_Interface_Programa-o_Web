document.addEventListener("DOMContentLoaded", function() {
    const modoClaroCheckbox = document.getElementById("modo_claro_checkbox");
    const body = document.body;
    const modoLabel = document.getElementById("modo_label");

    // Verifica se o modo claro está ativado no armazenamento local
    if (localStorage.getItem("modoClaro") === "true") {
        modoClaroCheckbox.checked = true;
        body.classList.add("modo-claro");
        modoLabel.textContent = "Modo Claro";
    } else {
        modoLabel.textContent = "Modo Escuro";
    }

    // Alterna entre os modos claro e escuro ao clicar no botão
    modoClaroCheckbox.addEventListener("change", function() {
        if (modoClaroCheckbox.checked) {
            body.classList.add("modo-claro");
            localStorage.setItem("modoClaro", "true");
            modoLabel.textContent = "Modo Claro";
        } else {
            body.classList.remove("modo-claro");
            localStorage.setItem("modoClaro", "false");
            modoLabel.textContent = "Modo Escuro";
        }
    });
});