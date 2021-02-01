import Bowerman from '../Bowerman';

test('Create new bowerman', () => {
  const newBowerman = new Bowerman('Алексей');
  const expectedBowerman = {
    name: 'Алексей',
    type: 'Bowerman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(newBowerman).toEqual(expectedBowerman);
});
