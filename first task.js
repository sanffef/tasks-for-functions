function tripleAttack(damageOne, damageTwo, damageThree) {
    return damageOne + damageTwo + damageThree;
}

const attackOne = 2;
const attackTwo = 4;
const attackThree = 3;
const firstTripleAttackDamage = tripleAttack(attackOne, attackTwo, attackThree);

console.log("Получаем урон для", attackOne, attackTwo, "и", attackThree, "...");
console.log(firstTripleAttackDamage, "очков урона нанесено!");
console.log("=====================================");

const attackFour = -1;
const attackFive = 10;
const attackSix = 5;
const secondTripleAttackDamage = tripleAttack(attackFour, attackFive, attackSix);

console.log("Получаем урон для", attackFour, attackFive, "и", attackSix, "...");
console.log(secondTripleAttackDamage, "очков урона нанесено!");
console.log("=====================================");