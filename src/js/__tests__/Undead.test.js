import Undead from '../Undead';

describe('Undead', () => {
  test('should create a new Undead character', () => {
    const undead = new Undead('Ghost');
    expect(undead.name).toBe('Ghost');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});
