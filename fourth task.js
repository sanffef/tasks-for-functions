function toCelsius(f) {
    return (5 / 9) * (f - 32);
}

function test(f) { 
    const c = toCelsius(f).toFixed(2); 
    console.log(f, "градусов по Фаренгейту — это", c, "градусов по Цельсию");
}

test(100);
test(88);
test(104);
test(112);