import { TestdecimalPipe } from './testdecimal.pipe';

describe('TestdecimalPipe', () => {
  it('create an instance', () => {
    const pipe = new TestdecimalPipe();
    expect(pipe).toBeTruthy();
  });
});
