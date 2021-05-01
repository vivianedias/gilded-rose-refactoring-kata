class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const specialItens = ["Sulfuras", "Aged Brie", "Backstage Passes"];

const isSpecialItem = (name) => specialItens.includes(name);

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const { name } = this.items[i];

      // * O item "Sulfuras" (`Sulfuras`), por ser um item lendário, não precisa ter uma data de venda (`SellIn`) e sua qualidade (`quality`) não precisa ser diminuida.
      if (name === "Sulfuras") break;

      this.items[i].sellIn = this.items[i].sellIn - 1;

      // * A qualidade (`quality`) do item não pode ser negativa
      // * A qualidade (`quality`) de um item não pode ser maior que 50.
      if (this.items[i].quality > 0 && this.items[i].quality < 50) {
        if (!isSpecialItem(name)) {
          this.items[i].quality = this.items[i].quality - 1;
          if (this.items[i].sellIn < 0) {
            // * Quando a data de venda do item tiver passado, a qualidade (`quality`) do item diminui duas vezes mais rapido.
            this.items[i].quality = this.items[i].quality - 1;
          }
        } else {
          // * O "Queijo Brie envelhecido" (`Aged Brie`), aumenta sua qualidade (`quality`) em `1` unidade a medida que envelhece.
          // * O item "Entrada para os Bastidores" (`Backstage Passes`), assim como o "Queijo Brie envelhecido", aumenta sua qualidade (`quality`) a medida que o dia da venda (`SellIn`) se aproxima;
          this.items[i].quality = this.items[i].quality + 1;
        }
      }

      if (name === "Backstage Passes") {
        // * A qualidade (`quality`) aumenta em `2` unidades quando a data de venda (`SellIn`) é igual ou menor que `10`.
        if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }
        // * A qualidade (`quality`) aumenta em `3` unidades quando a data de venda (`SellIn`) é igual ou menor que `5`.
        if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }
        // * A qualidade (`quality`) do item vai direto à `0` quando a data de venda (`SellIn`) tiver passado.
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = this.items[i].quality - this.items[i].quality;
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
