class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
    this.specialItens = [
      "Sulfuras",
      "Aged Brie",
      "Backstage Passes",
      "Conjured",
    ];
  }

  isSpecialItem(name) {
    return this.specialItens.includes(name);
  }

  updateQuality() {
    const items = this.items.map(({ name, sellIn, quality }) => {
      if (name === "Sulfuras")
        return {
          name,
          sellIn,
          quality,
        };

      let newSellIn = sellIn;
      let newQuality = quality;

      newSellIn = newSellIn - 1;

      const sellInAndName = {
        sellIn: newSellIn,
        name,
      };

      if (newQuality > 0 && newQuality < 50) {
        if (!this.isSpecialItem(name)) {
          newQuality = newQuality - 1;

          if (newSellIn < 0 && newQuality > 0) {
            newQuality = newQuality - 1;
          }

          return {
            quality: newQuality,
            ...sellInAndName,
          };
        }

        newQuality = newQuality + 1;
      }

      if (name === "Backstage Passes") {
        if (newSellIn < 0) {
          return {
            quality: newQuality - newQuality,
            ...sellInAndName,
          };
        }

        if (newSellIn <= 10 && newQuality < 50) {
          newQuality = newQuality + 1;
        }

        if (newSellIn <= 5 && newQuality < 50) {
          newQuality = newQuality + 1;
        }
      }

      return {
        quality: newQuality,
        ...sellInAndName,
      };
    });

    this.items = items;

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
