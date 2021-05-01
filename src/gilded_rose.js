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
    this.specialItens = /^(sulfuras|aged brie|backstage passes|conjured)/gi;
  }

  padronizeName(name) {
    const specialItensNameMatch = name.match(this.specialItens);
    const firstMatchSpecialItemName =
      specialItensNameMatch && specialItensNameMatch[0];
    return (firstMatchSpecialItemName || name).toLowerCase();
  }

  isDefaultItem(name) {
    return !name.match(this.specialItens);
  }

  getDefaultItemQuality(sellIn, quality) {
    let newQuality = quality;

    newQuality -= 1;

    if (sellIn < 0 && newQuality > 0) {
      newQuality -= 1;
    }

    return newQuality;
  }

  getBackstagePassesQuality(sellIn, quality) {
    if (sellIn < 0) return 0;

    let newQuality = quality;

    if (sellIn <= 10 && newQuality < 50) {
      newQuality += 1;
    }

    if (sellIn <= 5 && newQuality < 50) {
      newQuality += 1;
    }

    return newQuality;
  }

  getSpecialItemQuality(sellIn, quality) {
    let newQuality = quality < 50 ? quality + 1 : quality;

    return {
      conjured: quality >= 2 ? quality - 2 : 0,
      "aged brie": newQuality,
      "backstage passes": this.getBackstagePassesQuality(sellIn, newQuality),
      sulfuras: quality,
    };
  }

  getNewItemQualityAndSellIn({ name, sellIn, quality }) {
    const padronizedName = this.padronizeName(name);

    let newQuality;

    if (this.isDefaultItem(padronizedName) && quality > 0) {
      newQuality = this.getDefaultItemQuality(sellIn - 1, quality);
    } else {
      newQuality = this.getSpecialItemQuality(sellIn - 1, quality)[
        padronizedName
      ];
    }

    return {
      quality: newQuality,
      sellIn: padronizedName === "sulfuras" ? sellIn : sellIn - 1,
      name,
    };
  }

  updateQuality() {
    const items = this.items.map((item) =>
      this.getNewItemQualityAndSellIn(item)
    );

    this.items = items;

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
