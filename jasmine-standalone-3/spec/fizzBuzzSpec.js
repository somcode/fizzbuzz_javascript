describe('Fizzbuzz', function() {
  var javabuzz;
  beforeEach(function() {
    fizzbuzz = new fizzBuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDIvisibleByThree(3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDIvisibleByThree(1)).toBe(false);
    });
  });
});
