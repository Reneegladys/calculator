import { describe, test, expect, beforeEach } from 'vitest';
import { createCalculator } from '../lib/calculator.js';

let calculator;

describe('Calculator functionality', () => {
  beforeEach(() => {
    calculator = createCalculator();
  });

  test('adderar 2 + 2', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('subtraherar 5 - 3', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('multiplicerar 4 * 3', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });

  test('dividerar 10 / 2', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
});
