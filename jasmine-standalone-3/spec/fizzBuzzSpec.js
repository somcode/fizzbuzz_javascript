describe('FizzBuzz', function() {
  var fizzBuzz;
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(fizzBuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(fizzBuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

  describe('return something', function() {
    it('return Fizz if is divisible by 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it('return Buzz if is divisible by 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it('return Buzz if is divisible by 15', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
  });
});
