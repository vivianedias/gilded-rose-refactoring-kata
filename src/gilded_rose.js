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
      const { name, quality } = this.items[i];

      if (isSpecialItem(name) && quality > 0) {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (name == "Backstage Passes") {
            if (this.items[i].sellIn < 11) {
              this.items[i].quality = this.items[i].quality + 1;
            }
            if (this.items[i].sellIn < 6) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
      } else {
        this.items[i].quality = this.items[i].quality - 1;
      }

      if (name !== "Sulfuras") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      if (this.items[i].sellIn < 0) {
        if (name === "Aged Brie") {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        } else {
          if (name === "Backstage Passes") {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          } else {
            if (name != "Sulfuras") {
              if (this.items[i].quality > 0) {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          }
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
