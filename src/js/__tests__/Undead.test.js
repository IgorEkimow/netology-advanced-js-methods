import Undead from '../Undead';

test('Create new undead', () => {
  const newUndead = new Undead('Олег');
  const expectedUndead = {
    name: 'Олег',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(newUndead).toEqual(expectedUndead);
});
