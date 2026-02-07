function hoursToSeconds(hours) {
    return hours * 3600;
}
а
function test(hours) {
    const secs = hoursToSeconds(hours);
    console.log(hours, "часов — это", secs, "секунд");
}

test(10);
test(1);
test(25);
test(100);
test(33);