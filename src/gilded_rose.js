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
    const items = this.items.map(({ name, sellIn, quality }) => {
      let newSellIn = sellIn;
      let newQuality = quality;

      if (name === "Sulfuras") return {
        name,
        sellIn,
        quality
      };

      newSellIn = newSellIn - 1

      if (newQuality > 0 && newQuality < 50) {
        if(!isSpecialItem(name)) {
          newQuality = newQuality - 1;
          if (newSellIn < 0) {
            newQuality = newQuality - 1
          }
        } else {
          newQuality = newQuality + 1;
        }
      }

      if (name === "Backstage Passes") {
        if (newSellIn <= 10 && newQuality < 50) {
          newQuality = newQuality + 1;
        }
        if (newSellIn <= 5 && newQuality < 50) {
          newQuality = newQuality + 1;
        }
        if (newSellIn < 0) {
          newQuality = newQuality - newQuality;
        }
      }
      
      return {
        sellIn: newSellIn,
        name,
        quality: newQuality
      }
    })

    this.items = items;

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
