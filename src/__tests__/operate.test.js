import '@testing-library/jest-dom';
import operate from '../logic/operate';

describe('test operate component', () => {
  it('test addition', () => {
    const result = operate('4', '2', '+');
    expect(result).toBe('6');
  });
  it('test substraction', () => {
    const result = operate('5', '2', '-');
    expect(result).toBe('3');
  });
  it('test modulo', () => {
    const result = operate('9', '2', '%');
    expect(result).toBe('1');
  });
  it('test zero error', () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
});
