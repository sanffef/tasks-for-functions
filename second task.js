function getTitle(firstName, lastName, job) {
    const title = `${firstName} ${lastName} the ${job}`;
    return title;
}

function test(firstName, lastName, job) {
    const title = getTitle(firstName, lastName, job);
    console.log("Имя:", firstName);
    console.log("Фамилия:", lastName);
    console.log("Профессия:", job);
    console.log("Титул:", title);
    console.log("=====================================");
}

test("Frodo", "Baggins", "warrior");
test("Bilbo", "Baggins", "thief");
test("Gandalf", "The Grey", "wizard");
test("Aragorn", "Son of Arathorn", "ranger");