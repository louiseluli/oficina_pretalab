const soma = require("./soma");

describe("Soma", () => {
  it("deverá somar dois números inteiros", () => {
    //seu código aqui
    expect(soma(2, 3)).toBe(5);
  });
});
