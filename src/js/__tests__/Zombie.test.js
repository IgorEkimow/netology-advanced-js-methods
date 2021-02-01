import Zombie from '../Zombie';

test('Create new zombie', () => {
  const newZombie = new Zombie('Юлия');
  const expectedZombie = {
    name: 'Юлия',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(newZombie).toEqual(expectedZombie);
});
