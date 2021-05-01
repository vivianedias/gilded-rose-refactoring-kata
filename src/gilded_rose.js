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

  isDefaultItem(name) {
    return !this.specialItens.includes(name);
  }

  getDefaultItemQuality(sellIn, quality) {
    let newQuality = quality;

    newQuality -= 1;

    if (sellIn < 0 && newQuality > 0) {
      newQuality -= 1;
    }

    return newQuality;
  }

  getSpecialItemQuality({ sellIn, quality, name }) {
    if (name === "Conjured") {
      return quality >= 2 ? quality - 2 : 0;
    }

    let newQuality = quality < 50 ? quality + 1 : quality;

    if (name === "Backstage Passes") {
      if (sellIn < 0) return 0

      if (sellIn <= 10 && newQuality < 50) {
        newQuality += 1;
      }

      if (sellIn <= 5 && newQuality < 50) {
        newQuality += 1;
      }
    }

    return newQuality
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
      let specialItemQuality;
      let defaultItemQuality;

      newSellIn -= 1;

      const sellInAndName = {
        sellIn: newSellIn,
        name,
      };

      if (this.isDefaultItem(name) && quality > 0) {
        defaultItemQuality = this.getDefaultItemQuality(
          newSellIn,
          quality
        );
          
        return {
          quality: defaultItemQuality,
          ...sellInAndName,
        };
      }

      specialItemQuality = this.getSpecialItemQuality({
        sellIn: newSellIn,
        quality,
        name
      })

      return {
        quality: specialItemQuality,
        ...sellInAndName
      }
    });

    this.items = items;

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
