function curse(weaponDamage) {
    const lesserCursed = weaponDamage * 0.5;  
    const greaterCursed = weaponDamage * 0.25; 
    
    return [lesserCursed, greaterCursed];
}

function test(weaponDamage) {
    console.log("Базовый урон оружия:", weaponDamage);
    console.log("Накладываем проклятие...");
    
    const [lesserCursed, greaterCursed] = curse(weaponDamage);
    
    console.log("С малым проклятием урон:", lesserCursed, "ед.");
    console.log("С большим проклятием урон:", greaterCursed, "ед.");
    console.log("=====================================");
}

function main() {
    test(100);
    test(500);
    test(1000);
}

main();