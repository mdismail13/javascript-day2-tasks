const marks = 85;

if (100 < marks || marks < 0) {
    console.log("Number should be between 1 to 100!");
}
else if (100 >= marks && marks >= 80) {
    console.log("Your grade is A+");
}
else if (80 > marks && marks >= 70) {
    console.log("Your grade is A");
}
else if (70 > marks && marks >= 60) {
    console.log("Your grade is A-");
}
else if (60 > marks && marks >= 50) {
    console.log("Your grade is B");
}
else if (50 > marks && marks >= 40) {
    console.log("Your grade is C");
}
else if (40 > marks && marks >= 33) {
    console.log("Your grade is D");
}
else{
    console.log("Your grade is F");
}