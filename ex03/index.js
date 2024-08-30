const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = arr =>
    arr.map(age => (age <= 2) ? 2 * age : (16 + age * 4))
    .filter(age => age >= 18)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0, ) / arr.length

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));