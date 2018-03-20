describe('Fizzbuzz', function() {
  var javabuzz;

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      fizzbuzz = new fizzBuzz();
      expect(fizzbuzz.isDIvisibleByThree(3)).toBe(true);

    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      fizzbuzz = new fizzBuzz();
      expect(fizzbuzz.isDIvisibleByThree(1)).toBe(false);

    });
  });
});
