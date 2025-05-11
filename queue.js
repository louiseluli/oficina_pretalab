class Queue {
  elements;
  constructor() {
    this.elements = [];
  }
  // Implementar aqui
  /*
  Calcula o tamanho da fila.
  @returns {number} O número de itens na fila.
  */
  size() {
    return this.elements.length;
  }

  /*
  Adiciona um item ao final da fila.
  @param {*} item - O item a ser adicionado.
  */
  add(item) {
    this.elements.push(item);
  }

  /**
  Retorna o primeiro item da fila sem removê-lo.
  @returns {*} O primeiro item da fila, ou undefined se a fila estiver vazia.
  */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements[0];
  }

  /**
   * Remove e retorna o primeiro item da fila.
   * @returns {*} O primeiro item da fila, ou undefined se a fila estiver vazia.
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements.shift();
  }

  /**
  Verifica se a fila está vazia.
  @returns {boolean} True se a fila estiver vazia, false caso contrário.
  */
  isEmpty() {
    return this.elements.length === 0;
  }
}

module.exports = Queue;
