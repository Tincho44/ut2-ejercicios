function sumAll(a,b){
  let sum = 0;
  for (let i = a; i <= b; i++) {
    console.log(i, a, b);
    sum += i;
  }
  return sum;
}

console.log(sumAll(1, 4));