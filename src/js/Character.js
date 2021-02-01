export default class Character {
  constructor(name, type, attack, defence) {
    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error('Имя класса персонажа должно быть строкой и содержать от 2 до 10 символов');
    } else {
      this.name = name;
    }
    if (!['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Такого типа класса персонажа в не существует');
    } else {
      this.type = type;
    }
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Персонаж умер. Нельзя повысить уровень умершего персонажа');
    } else {
      this.health = 100;
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
