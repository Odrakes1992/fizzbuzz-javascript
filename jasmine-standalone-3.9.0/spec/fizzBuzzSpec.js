describe("FizzBuzz", () => {

  let fizzBuzz;

  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
    });

  describe("multiples of 3", () => {
    it("fizzes for 3", () => {
      expect(fizzBuzz.play(3)).toEqual("fizz");
    });
    it("fizzes for multiples of 3", () => {
      expect(fizzBuzz.play(6)).toEqual("fizz");
    });
  });
  
  describe("multiples of 5", () => {
    it("buzzes for 5", () => {
      expect(fizzBuzz.play(5)).toEqual("buzz");
    });
    it("buzzes for multiples of 5", () => {
      expect(fizzBuzz.play(10)).toEqual("buzz");
    });
  });




});