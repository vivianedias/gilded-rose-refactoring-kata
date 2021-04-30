const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  describe("Default goods", () => {
    let gildedRose;
    beforeAll(() => {
      // name, sellIn, quality
      const item = new Item("Elixir of the Mongoose", 5, 7)
      gildedRose = new Shop([item]);
    })
    describe("Sell date hasn't passed", () => {
      let updatedItem;
      beforeAll(() => {
        gildedRose.updateQuality() // 6
        gildedRose.updateQuality() // 5
        updatedItem = gildedRose.updateQuality() // 4
      })
      it("should degrade quality by three", () => {
        expect(updatedItem[0].quality).toBe(4)
      })
      it("should subtract sellIn by three", () => {
        expect(updatedItem[0].sellIn).toBe(2)
      })
      describe("The quality is never negative", () => {
        it("should be greater or equal to 0", () => {
          expect(updatedItem[0].quality).toBeGreaterThanOrEqual(0)
        })
      })
    })
    describe("Sell date has passed", () => {
      let updatedItem;
      beforeAll(() => {
        gildedRose.updateQuality() // 3
        gildedRose.updateQuality() // 2
        updatedItem = gildedRose.updateQuality() // 0
      })
      it("should degrade quality twice as fast", () => {
        expect(updatedItem[0].quality).toBe(0)
      })
      describe("The quality is never negative", () => {
        it("should be greater or equal to 0", () => {
          expect(updatedItem[0].quality).toBeGreaterThanOrEqual(0)
        })
      })
    })
  })

  describe("Aged Brie", () => {
    // aged brie
      // quando está na validade
        // sua qualidade aumenta cada dia que passa
        // sua qualidade não pode ser maior que zero
      // quando nao esta na validade
        // a qualidade não muda
    let gildedRose;
    beforeAll(() => {
      // name, sellIn, quality
      const item = new Item("Aged Brie", 52, 49);
      gildedRose = new Shop([item])
    })
    describe("When it's within the expiration date", () => {
      let updatedItem;
      it("should increase the quality", () => { // 51
        updatedItem = gildedRose.updateQuality()
        expect(updatedItem[0].quality).toBe(50)
      })
      it("should not be bigger than 50", () => {
        updatedItem = gildedRose.updateQuality() // 50
        expect(updatedItem[0].quality).toBe(50)
      })
      it("should decrease the sellIn date", () => {
        expect(updatedItem[0].sellIn).toBe(50)
      })
    })

    describe("When it's not within the expiration date", () => {
      beforeAll(() => {
        for (let i = 0; i < 50; i++) {
          gildedRose.updateQuality()
        }
      })
      it("should keep the same quality", () => {
        updatedItem = gildedRose.updateQuality()
        expect(updatedItem[0].quality).toBe(50)
      })
    })
  })

  describe("Sulfuras", () => {
    // sulfuras
      // nao tem data de expiração
      // qualidade nunca diminui
      // tem uma qualidade imutavel de 80
    describe("When it's within the expiration date", () => {
      let gildedRose;
      beforeAll(() => {
        // name, sellIn, quality
        const item = new Item("Sulfuras, Hand of Ragnaros", 2, 80);
        gildedRose = new Shop([item])
      })

      it("should have the same quality", () => {
        gildedRose.updateQuality()
        const updatedItem = gildedRose.updateQuality()
        expect(updatedItem[0].quality).toBe(80)
      })
    })
    describe("When it's not within the expiration date", () => {
      let gildedRose;
      beforeAll(() => {
        const item = new Item("Sulfuras, Hand of Ragnaros", -1, 80)
        gildedRose = new Shop([item])
      })

      it("should have the same quality", () => {
        gildedRose.updateQuality()
        const updatedItem = gildedRose.updateQuality()
        expect(updatedItem[0].quality).toBe(80)
      })
    })
  })

  describe("Backstage passes", () => {
    describe("Increases in quality as its SellIn value approaches", () => {
      describe("Increases by 2 when there are 10 days or less", () => {
        it("should increase 2x when SellIn = 10", () => {

        })
        it("should not be bigger than 50", () => {

        })
      })

      describe("Increases by 3 when there are 5 days or less", () => {
        it("should increase 3x when SellIn = 5", () => {

        })
        it("should not be bigger than 50", () => {

        })
      })
    })
    describe("The Quality is never negative", () => {
      it("should be 0 with a negative SellIn", () => {

      })
    })
  })
});
