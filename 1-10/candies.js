const candies = (n, m) =>{
    if(n<1 || n>10 || m<2 || m>100) return false
    return parseInt(m/n)*n
}
console.log(candies(10,10));
