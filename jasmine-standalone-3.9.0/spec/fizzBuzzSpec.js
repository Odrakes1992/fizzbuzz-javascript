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

  describe('multiples of 3 and 5', () => {
    it('fizzbuzzes for 15', () => {
      expect(fizzBuzz.play(15)).toEqual("fizzbuzz");
    });
    it("fizzbuzzes for 30", () => {
      expect(fizzBuzz.play(30)).toEqual("fizzbuzz");
    });
  });

  describe('all other numbers', () => {
    it('returns the number 1', () => {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
    it('returns the number 11', () => {
      expect(fizzBuzz.play(11)).toEqual(11);
    });
  });
});