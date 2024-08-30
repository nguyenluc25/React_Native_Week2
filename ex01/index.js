const julia = [3, 5, 2, 12, 7]
const kate = [4, 1, 15, 8, 3]

const checkDogs = (arr1, arr2) => {
    let arr = [...arr1];
    arr.shift();
    arr.splice(-2);

    let allArr = [...arr, ...arr2];
    allArr.map((item, index) => {
        return item >= 3 ? console.log(`Dog number ${index + 1} is an adult, and is ${item} years old`) :
            console.log(`Dog number ${index + 1} is still a puppy`);
    });
}

checkDogs(julia, kate);