function factorial(n){
    // 0!=1, 1!=1
    if (n > 0 && n <= 1){
        return 1;
    }
    else {
        return n * factorial(n-1)
    }
}
const num = "1101"
console.log(parseInt(num, 2));
