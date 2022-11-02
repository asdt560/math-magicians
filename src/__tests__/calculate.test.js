import '@testing-library/jest-dom';
import calculate from '../logic/calculate';

describe('test calculate component', () => {
  it('test addition', () => {
    const state = {
      total: '2',
      next: '2',
      operation: '+',
    };
    const result = calculate(state, '=');
    expect(result.total).toBe('4');
  });
  it('test substraction', () => {
    const state = {
      total: '2',
      next: '2',
      operation: '-',
    };
    const result = calculate(state, '=');
    expect(result.total).toBe('0');
  });
  it('test division', () => {
    const state = {
      total: '2',
      next: '2',
      operation: '÷',
    };
    const result = calculate(state, '=');
    expect(result.total).toBe('1');
  });
  it('test multiplication', () => {
    const state = {
      total: '2',
      next: '2',
      operation: 'x',
    };
    const result = calculate(state, '=');
    expect(result.total).toBe('4');
  });
  it('test divide by zero error', () => {
    const state = {
      total: '2',
      next: '0',
      operation: '÷',
    };
    const result = calculate(state, '=');
    expect(result.total).toBe("Can't divide by 0.");
  });
  it('test AC button', () => {
    const state = {
      total: '2',
      next: '2',
      operation: 'x',
    };
    const result = calculate(state, 'AC');
    expect(result.total).toBe(null);
  });
  it('test -/+ button', () => {
    const state = {
      total: '2',
      next: '2',
      operation: 'x',
    };
    const result = calculate(state, '+/-');
    expect(result.next).toBe('-2');
  });
});
