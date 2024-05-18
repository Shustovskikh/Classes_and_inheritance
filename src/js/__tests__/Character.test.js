import Character from '../Character';

describe('Character', () => {
  test('should create a new character with valid parameters', () => {
    const character = new Character('Hero', 'Bowman');
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('should throw an error for invalid name', () => {
    expect(() => new Character('H', 'Bowman')).toThrow('The name must be a string of 2 to 10 characters');
  });

  test('should throw an error for invalid type', () => {
    expect(() => new Character('Hero', 'InvalidType')).toThrow('Incorrect character type');
  });

  test('should not throw an error for valid types', () => {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    for (const type of types) {
      expect(() => new Character('Hero', type)).not.toThrow();
    }
  });

  test('should throw an error for a type not in the list', () => {
    expect(() => new Character('Hero', 'UnknownType')).toThrow('Incorrect character type');
  });
});
