const Queue = require("./queue");

describe("Queue - Fila de Filmes de Comédia", () => {
  let comedyMoviesQueue;
  const longListOfComedyMovies = [
    "Se Beber, Não Case!",
    "Superbad: É Hoje",
    "O Âncora: A Lenda de Ron Burgundy",
    "Quase Irmãos",
    "Missão Madrinha de Casamento",
    "Debi & Lóide: Dois Idiotas em Apuros",
    "Isto é Spinal Tap",
    "Apertem os Cintos... O Piloto Sumiu!",
    "Monty Python em Busca do Cálice Sagrado",
    "Como Enlouquecer Seu Chefe",
    "Todo Mundo Quase Morto",
    "Chumbo Grosso",
    "Borat: O Segundo Melhor Repórter do Glorioso País Cazaquistão Viaja à América",
    "Trovão Tropical",
    "Dias Incríveis",
    "Zoolander",
    "Corra que a Polícia Vem Aí!",
    "Curtindo a Vida Adoidado",
    "Feitiço do Tempo",
    "Um Príncipe em Nova York",
    "As Branquelas",
    "Vovó... Zona",
    "O Máskara",
  ];

  beforeEach(() => {
    comedyMoviesQueue = new Queue();
  });
  it("Deve criar uma fila vazia de filmes", () => {
    expect(comedyMoviesQueue).toEqual({ elements: [] });
    expect(comedyMoviesQueue.isEmpty()).toBe(true);
  });

  it("Deve ser capaz de calcular o tamanho da fila", () => {
    expect(comedyMoviesQueue.size()).toBe(0);
    comedyMoviesQueue.add("Entrando Numa Fria");
    expect(comedyMoviesQueue.size()).toBe(1);
    comedyMoviesQueue.add("Quem Vai Ficar com Mary?");
    expect(comedyMoviesQueue.size()).toBe(2);

    // Adicionando uma lista maior
    longListOfComedyMovies.forEach(movie => comedyMoviesQueue.add(movie));
    expect(comedyMoviesQueue.size()).toBe(2 + longListOfComedyMovies.length);
  });

  it("Deve ser capaz de adicionar um item na fila", () => {
    comedyMoviesQueue.add("O Virgem de 40 Anos");
    expect(comedyMoviesQueue.elements).toEqual(["O Virgem de 40 Anos"]);
    expect(comedyMoviesQueue.peek()).toBe("O Virgem de 40 Anos");
    expect(comedyMoviesQueue.size()).toBe(1);

    comedyMoviesQueue.add("American Pie: A Primeira Vez é Inesquecível");
    expect(comedyMoviesQueue.elements).toEqual([
      "O Virgem de 40 Anos",
      "American Pie: A Primeira Vez é Inesquecível",
    ]);
    expect(comedyMoviesQueue.peek()).toBe("O Virgem de 40 Anos"); // O primeiro ainda é o mesmo
    expect(comedyMoviesQueue.size()).toBe(2);
  });

  it("Deve escolher o primeiro item da fila", () => {
    expect(comedyMoviesQueue.peek()).toBeUndefined(); // Fila vazia

    comedyMoviesQueue.add(longListOfComedyMovies[0]); // "Se Beber, Não Case!"
    expect(comedyMoviesQueue.peek()).toBe(longListOfComedyMovies[0]);
    expect(comedyMoviesQueue.size()).toBe(1); // Tamanho não deve mudar com peek

    comedyMoviesQueue.add(longListOfComedyMovies[1]); // "Superbad: É Hoje"
    expect(comedyMoviesQueue.peek()).toBe(longListOfComedyMovies[0]); // Ainda o primeiro
    expect(comedyMoviesQueue.size()).toBe(2);
  });

  it("Deve remover o primeiro item da fila", () => {
    expect(comedyMoviesQueue.dequeue()).toBeUndefined(); // Fila vazia

    // Adicionando alguns filmes da lista longa
    const movie1 = longListOfComedyMovies[0]; // "Se Beber, Não Case!"
    const movie2 = longListOfComedyMovies[1]; // "Superbad: É Hoje"
    const movie3 = longListOfComedyMovies[2]; // "O Âncora: A Lenda de Ron Burgundy"

    comedyMoviesQueue.add(movie1);
    comedyMoviesQueue.add(movie2);
    comedyMoviesQueue.add(movie3);

    expect(comedyMoviesQueue.size()).toBe(3);

    // Primeiro filme a sair
    expect(comedyMoviesQueue.dequeue()).toBe(movie1);
    expect(comedyMoviesQueue.size()).toBe(2);
    expect(comedyMoviesQueue.peek()).toBe(movie2);

    // Segundo filme a sair
    expect(comedyMoviesQueue.dequeue()).toBe(movie2);
    expect(comedyMoviesQueue.size()).toBe(1);
    expect(comedyMoviesQueue.peek()).toBe(movie3);

    // Terceiro filme a sair
    expect(comedyMoviesQueue.dequeue()).toBe(movie3);
    expect(comedyMoviesQueue.size()).toBe(0);
    expect(comedyMoviesQueue.peek()).toBeUndefined();
    expect(comedyMoviesQueue.isEmpty()).toBe(true);

    // Tentar remover de uma fila já vazia
    expect(comedyMoviesQueue.dequeue()).toBeUndefined();
  });
  it("Deve adicionar e remover múltiplos filmes em ordem (FIFO)", () => {
    // Adiciona os 5 primeiros filmes da lista
    for (let i = 0; i < 5; i++) {
      comedyMoviesQueue.add(longListOfComedyMovies[i]);
    }
    expect(comedyMoviesQueue.size()).toBe(5);
    expect(comedyMoviesQueue.peek()).toBe(longListOfComedyMovies[0]);

    // Remove os 5 filmes e verifica a ordem
    for (let i = 0; i < 5; i++) {
      expect(comedyMoviesQueue.dequeue()).toBe(longListOfComedyMovies[i]);
    }
    expect(comedyMoviesQueue.size()).toBe(0);
    expect(comedyMoviesQueue.isEmpty()).toBe(true);
  });
});
