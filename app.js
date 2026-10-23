
const pesquisa = document.getElementById("pesquisa");
const servicos = document.querySelectorAll(".servico");
const mensagem = document.getElementById("mensagem");

// Pesquisar serviços pelo nome.
pesquisa.addEventListener("input", function () {
    const texto = pesquisa.value
        .trim()
        .toLocaleLowerCase("pt");

    let encontrados = 0;

    servicos.forEach(function (servico) {
        const nome = servico.dataset.nome;
        const corresponde = nome.includes(texto);

        servico.hidden = !corresponde;

        if (corresponde) {
            encontrados++;
        }
    });

    mensagem.textContent = encontrados > 0
        ? "Encontrámos " + encontrados + " serviço(s)."
        : "Não encontrámos esse serviço.";
});


servicos.forEach(function (servico) {
    servico.addEventListener("click", function () {
        if (servico.dataset.nome === "emprego") {
            window.location.href = "/src/emprego.html";
        } else if (servico.dataset.nome === "educação") {
            window.location.href = "/src/educacao.html";
        } else {
            mensagem.textContent =
                "Selecionaste: " + servico.dataset.nome +
                ". Em breve, vamos desenvolver esta área.";
        }
    });
});



if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./service-worker.js")
      .then(function () {
        console.log("Modo offline preparado!");
      })
      .catch(function (erro) {
        console.error("Erro ao ativar o modo offline:", erro);
      });
  });
}