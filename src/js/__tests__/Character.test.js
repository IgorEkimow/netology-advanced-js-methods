import Character from '../Character';
import Bowerman from '../Bowerman';

test('should throw error for class name too short', () => {
  const received = () => new Character('b', 'Bowerman');
  const expected = 'Имя класса персонажа должно быть строкой и содержать от 2 до 10 символов';
  expect(received).toThrowError(expected);
});

test('should throw error for class name too long', () => {
  const received = () => new Character('bowermantest', 'Bowerman');
  const expected = 'Имя класса персонажа должно быть строкой и содержать от 2 до 10 символов';
  expect(received).toThrowError(expected);
});

test('should throw error for class type is unknown', () => {
  const received = () => new Character('Алексей', 'healer');
  const expected = 'Такого типа класса персонажа в не существует';
  expect(received).toThrowError(expected);
});

test('should throw error because the character is dead', () => {
  const character = new Bowerman('Алексей');
  character.health = 0;
  const receivedCharacter = () => character.levelUp();
  const expectedCharacter = 'Персонаж умер. Нельзя повысить уровень умершего персонажа';
  expect(receivedCharacter).toThrowError(expectedCharacter);
});

test('should level up of the character', () => {
  const character = new Bowerman('Алексей');
  character.levelUp();
  const expectedCharacter = {
    name: 'Алексей',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(character).toEqual(expectedCharacter);
});

test('should to lower health in damage of the character', () => {
  const character = new Bowerman('Алексей');
  character.damage(30);
  const expectedCharacter = {
    name: 'Алексей',
    type: 'Bowerman',
    health: 77.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toEqual(expectedCharacter);
});
