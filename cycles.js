console.group ('First');
let number = 10;
let answer = '';

while (number < 21) {
    if (number === 20) {
        answer += number;
    } else {
        answer += `${number}, `;
    }
    number++;
}
console.log(answer);
console.groupEnd();

console.group('Second');
let j = 10;
while (j <= 20) {
    console.log(`Квадрат числа ${j * j}`);
    j++
}
console.groupEnd();

console.group('Third');
for (let n = 1; n < 11; n++) {
    console.log(`${n} * 7 = ${n * 7}`);
}
console.groupEnd();

console.group('Fourth');
let multi = 15;

for (let m = 16; m <= 35; m++) {
    multi = multi * m;
}
console.log(multi);
console.groupEnd();

console.group('Fifth');
let mean = 0;
let average = '';

for (let z = 1; z <= 500; z++) {
    mean = mean + z;
}
average = mean / 500;
console.log(average);
console.groupEnd();

console.group('Sixth');
let index = 30;
let sum = 0;

while (index <= 80){
    if (!(index % 2)) {
        sum += index;
    }
    index++
}
console.log(sum);
console.groupEnd();
