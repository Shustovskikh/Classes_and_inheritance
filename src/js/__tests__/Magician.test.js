import Magician from '../Magician';

describe('Magician', () => {
  test('should create a new Magician character', () => {
    const magician = new Magician('Wizard');
    expect(magician.name).toBe('Wizard');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });
});
