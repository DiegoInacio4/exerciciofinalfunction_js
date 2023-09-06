const vagas = [];

function listarVaga() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");
  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe um nome para a vaga: ");
  const descricao = prompt("Informe uma descrição para a vaga: ");
  const dataLimite = prompt(
    "Informe uma data limite (dd/mm/aaaa) para a vaga:"
  );
  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas confirmações?\n" +
      "\nNome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada com sucesso!");
  }
}

function exibirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir: ");
  const vaga = vagas[indice + 1];

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");

  alert(
    "Vaga n° " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  const candidato = prompt("Escreva o nome do(a) candidato(a): ");
  const indice = prompt(
    "Informe o índice que o(a) candidato(a) deseja se inscrever: "
  );
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada com sucesso");
  }
}

function excluirVaga() {
  const indice = prompt("Informe o nome da vaga que deseja excluir: ");
  const vaga = vagas[indice];
  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída com sucesso!");
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de vagas de emprego" +
      "Escolha uma opção:\n\n" +
      "1. Listar vagas disponíveis\n" +
      "2. Criar uma nova vaga\n" +
      "3. Vizualizar uma nova vaga\n" +
      "4. Inscrever um candidato em uma vaga\n" +
      "5. Excluir uma vaga\n" +
      "6. Sair"
  );

  return opcao;
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVaga();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== "6");
}

executar();
