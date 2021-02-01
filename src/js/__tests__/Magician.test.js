import Magician from '../Magician';

test('Create new magician', () => {
  const newMagician = new Magician('Анастасия');
  const expectedMagician = {
    name: 'Анастасия',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(newMagician).toEqual(expectedMagician);
});
