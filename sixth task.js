function becomeWarrior(fullName, power) {
    const title = `${fullName} the warrior`;
    const newPower = power + 1;
    
    return [title, newPower]; 
}

function main() {
    test("Frodo Baggins", 5);
    test("Bilbo Baggins", 10);
    test("Gandalf The Grey", 9000);
}

function test(input1, input2) {
    const [result1, result2] = becomeWarrior(input1, input2);
    console.log(result1, "имеет уровень силы:", result2);
}

main();