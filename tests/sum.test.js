const addinator = require('../modules/addinator.js')
const fizzbuzz = require('../modules/fizzbuzz.js')
const leapyear = require('../modules/leapyear')
//test happy path

test('Sum of -1 and 2 is 1', () => {
    expect(addinator(1, 1)).toBe(2)
})

test('Test negative number input', () => {
    expect(addinator(-1,2)).toBe(1)
})

test('Test decimal number input', () => {
    expect(addinator(1.5,1)).toBe(2.5)
})

test('Sum with only 1 value given', () => {
    expect(addinator(1)).toBe(1)
})

test('Strings of digits work', () => {
    expect(addinator('1','2')).toBe(3)
})

test('Return Fizz if divisible by 3', () => {
    expect(fizzbuzz(9)).toBe('Fizz')
})

test('Return Buzz if divisible by 5', () => {
    expect(fizzbuzz(10)).toBe('Buzz')
})

test('Return FizzBuzz if divisible by 3 && 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
})

test('Return no if divisible by 100', () => {
    expect(leapyear(200)).toBe('yes')
})

test('Return yes if divisible by 4', () => {
    expect(leapyear(16)).toBe('yes')
})

test('Return yes if divisible by 400', () => {
    expect(leapyear(800)).toBe('yes')
})

test('Return yes if divisible by 1900', () => {
    expect(leapyear(1900)).toBe('no')
})