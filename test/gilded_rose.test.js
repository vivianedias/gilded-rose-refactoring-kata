const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  describe("Default goods", () => {
    describe("Sell date hasn't passed", () => {
      it("should degrade quality by three", () => {
      })
      it("should subtract sellIn by three", () => {
      })
      describe("The quality is never negative", () => {
        it("should be greater or equal to 0", () => {
        })
      })
    })
    describe("Sell date has passed", () => {
      it("should degrade quality twice as fast", () => {
      })
      describe("The quality is never negative", () => {
        it("should be greater or equal to 0", () => {
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
