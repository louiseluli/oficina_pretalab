const Calculadora = require("./calculadora");

describe("Calculadora", () => {
  it("Deverá retornar a soma de dois números", () => {
    //Seu código aqui
    const calculadora = new Calculadora();

    expect(calculadora.soma(2, 5)).toBe(7);
  });

  it("Deverá retornar a subtração de dois números", () => {
    //Seu código aqui
    const calculadora = new Calculadora();

    expect(calculadora.subtracao(10, 5)).toBe(5);
  });

  it("Deverá retornar a multiplicação entre dois números", () => {
    //Seu código aqui
    const calculadora = new Calculadora();

    expect(calculadora.multiplicacao(2, 6)).toBe(12);
  });

  it("Deverá retornar a divisao entre dois números", () => {
    //Seu código aqui
    const calculadora = new Calculadora();

    expect(calculadora.divisao(18, 2)).toBe(9);
  });
});
