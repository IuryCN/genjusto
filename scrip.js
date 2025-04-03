document.addEventListener("DOMContentLoaded", function () {
  alert("🤔 Com que personagem de Naruto você mais se parece?");
  alert("Sasuke?");
  alert("Itachi?");
  alert("E se for Madara? 👀");
  alert("💭 Pense bem e responda sinceramente! 😄");

  window.jogar = function () {
    let idade;
    let tentativa = 0;

    while (tentativa < 3) {
      idade = Number(prompt("📅 Antes de mais nada, qual é a sua idade?"));

      if (!isNaN(idade) && idade >= 18 && idade <= 100) {
        break;
      }

      tentativa++;

      if (tentativa === 1) {
        alert("Fala sério... Já começou mentindo?! 🙄");
      } else if (tentativa === 2) {
        alert("Última chance, BAKA! 😠");
      } else {
        alert("Você falhou no Jutso... Agora ficou preso no Tsukuyomi Infinito do Itachi! 😵");
        alert("Encerrado!");
        return;
      }
    }

    const personagens = {
      Naruto: 0,
      Sasuke: 0,
      Kakashi: 0,
      Itachi: 0,
      Sakura: 0,
      Hinata: 0,
      Madara: 0,
    };

    const perguntas = [
      {
        pergunta: "Como você lida com desafios?",
        opcoes: [
          { texto: "1. Encaro de frente, não importa o quê!", pontos: { Naruto: 3, Kakashi: 1 } },
          { texto: "2. Analiso primeiro e ajo depois, se for necessário", pontos: { Itachi: 3, Sasuke: 1 } },
          { texto: "3. Depende da situação", pontos: { Kakashi: 2, Sakura: 1 } },
          { texto: "4. Quase sempre evito conflitos", pontos: { Hinata: 2, Itachi: 1 } },
          { texto: "5. Passo por cima de quem for para conseguir o que quero", pontos: { Madara: 3, Itachi: 1 } },
        ],
      },
      {
        pergunta: "Qual é sua maior motivação?",
        opcoes: [
          { texto: "1. Proteger a família e todos que amo", pontos: { Naruto: 3, Kakashi: 1 } },
          { texto: "2. Me tornar forte a qualquer custo", pontos: { Itachi: 1, Sasuke: 3 } },
          { texto: "3. Ajudar a todos, independente de quem seja", pontos: { Kakashi: 2, Sakura: 1 } },
          { texto: "4. Cumprir com meu dever e propósitos", pontos: { Hinata: 1, Itachi: 2 } },
          { texto: "5. Evoluir, Adaptar e Dominar!", pontos: { Sasuke: 1, Madara: 4 } },
        ],
      },
    ];

    function fazerPergunta(perguntaObj) {
      let resposta;
      do {
        resposta = prompt(`${perguntaObj.pergunta}\n\n${perguntaObj.opcoes.map(o => o.texto).join("\n")}\n\nDigite o número da sua resposta:`);
      } while (!["1", "2", "3", "4", "5"].includes(resposta));

      return perguntaObj.opcoes[Number(resposta) - 1];
    }

    const respostasJogador = perguntas.map(fazerPergunta);

    respostasJogador.forEach((resposta) => {
      for (const personagem in resposta.pontos) {
        personagens[personagem] += resposta.pontos[personagem];
      }
    });

    let resultadoFinal = Object.entries(personagens).sort((a, b) => b[1] - a[1])[0][0];

    alert(`Seu personagem é: ${resultadoFinal}! 😱`);
  };
});

