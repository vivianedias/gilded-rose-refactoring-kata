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
    describe("When sellIn date passes", () => {
      it("should increase the quality", () => {

      })
      it("should not be bigger than 50", () => {

      })
    })
    describe("The quality is never negative", () => {
      it("should be >= 0 with a SellIn >= 0", () => {

      })
      it("should be >= 0 with SellIn = 0", () => {

      })
    })
  })

  describe("Sulfuras", () => {
    describe("Stays with the same quality of 80 over time", () => {
      it("should have the same quality with SellIn = 0", () => {

      })
      it("should have the same quality with SellIn = 5", () => {
        
      })
      it("should have the same quality with SellIn = 10", () => {
        
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
