function enchantAndAttack(targetHealth, damage, weapon) {
    const enchantedDamage = damage + 10;
    е
    const newHealth = targetHealth - enchantedDamage;

    const enchantedWeapon = "enchanted " + weapon;

    return [enchantedWeapon, newHealth];
}

function test(targetHealth, damage, weapon) {
    console.log(`У цели ${targetHealth} здоровья.`);
    console.log(`Базовый урон оружия ${weapon}: ${damage}... Зачаровываем и атакуем.`);
    
    const [enchantedWeapon, newHealth] = enchantAndAttack(targetHealth, damage, weapon);
    
    console.log(`Цель была атакована оружием: ${enchantedWeapon}.`);
    console.log(`У цели осталось ${newHealth} здоровья.`);
    console.log("=====================================");
}

function main() {
    test(100, 50, "sword");
    test(500, 100, "axe");
    test(1000, 250, "bow");
}

main();