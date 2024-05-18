import Bowman from '../Bowman';

describe('Bowman', () => {
  test('should create a new Bowman character', () => {
    const bowman = new Bowman('Archer');
    expect(bowman.name).toBe('Archer');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});
