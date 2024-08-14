function duplicates(arr){
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}

console.log(duplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
