class ListBuilder {
  constructor(list) {
    this.list = list || [];
  }

  createList(total) {
    const createListLoop = (KeyPrefix) => {
      for (let i = 1; i <= total; i += 1) {
        this.list.push({
          id: i,
          key: `${KeyPrefix}-${i}`,
          name: `Carta ${i}`,
          isActive: false,
          hasMatch: false,
        });
      }
    };

    createListLoop(1);
    createListLoop(2);

    return this;
  }

  //algoritimo para embaralhar a lista
  shuffle() {
    const newList = this.list.slice();

    for (let i = newList.length - 1; i > 0; i -= 1) {
      //recebe numero randomico entre 0 e variavel i
      const j = Math.floor(Math.random() * (i + 1));
      //troca entre valores do indice i e j
      [newList[i], newList[j]] = [newList[j], newList[i]];
    }
    this.list = newList;
    return this;
  }

  build() {
    return this.list;
  }
}

export default ListBuilder;
