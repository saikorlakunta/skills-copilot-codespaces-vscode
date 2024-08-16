// Import the function to be tested
import calculateNumbers from "./skills";

// Test case 1: Testing with positive numbers
test("Adding positive numbers", () => {
  const result = calculateNumbers(5, 10);
  expect(result).toBe(15);
});

// Test case 2: Testing with negative numbers
test("Adding negative numbers", () => {
  const result = calculateNumbers(-5, -10);
  expect(result).toBe(-15);
});

// Test case 3: Testing with a positive and a negative number
test("Adding a positive and a negative number", () => {
  const result = calculateNumbers(5, -10);
  expect(result).toBe(-5);
});

// Test case 4: Testing with zero
test("Adding zero", () => {
  const result = calculateNumbers(5, 0);
  expect(result).toBe(5);
});
