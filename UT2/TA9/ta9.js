function getOdds(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log(getOdds([1, 2, 3, 4, 5])); 