import Swordsman from '../Swordsman';

test('Create new swordsman', () => {
  const newSwordsman = new Swordsman('Роман');
  const expectedSwordsman = {
    name: 'Роман',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(newSwordsman).toEqual(expectedSwordsman);
});
