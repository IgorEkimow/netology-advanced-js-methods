import './css/style.css';

import Bowerman from './js/Bowerman';
import Daemon from './js/Daemon';
import Magician from './js/Magician';
import Swordsman from './js/Swordsman';
import Undead from './js/Undead';
import Zombie from './js/Zombie';

const personOne = new Bowerman('Алексей');
const personTwo = new Daemon('Антон');
const personThree = new Magician('Анастасия');
const personFour = new Swordsman('Роман');
const personFive = new Undead('Олег');
const personSix = new Zombie('Юлия');

console.log(personOne);
console.log(personTwo);
console.log(personThree);
console.log(personFour);
console.log(personFive);
console.log(personSix);
