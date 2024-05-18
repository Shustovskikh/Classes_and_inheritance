import Swordsman from '../Swordsman';

describe('Swordsman', () => {
  test('should create a new Swordsman character', () => {
    const swordsman = new Swordsman('Warrior');
    expect(swordsman.name).toBe('Warrior');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });
});
