import Daemon from '../Daemon';

describe('Daemon', () => {
  test('should create a new Daemon character', () => {
    const daemon = new Daemon('Demon');
    expect(daemon.name).toBe('Demon');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});
