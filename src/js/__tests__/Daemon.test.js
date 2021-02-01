import Daemon from '../Daemon';

test('Create new daemon', () => {
  const newDaemon = new Daemon('Антон');
  const expectedDaemon = {
    name: 'Антон',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(newDaemon).toEqual(expectedDaemon);
});
