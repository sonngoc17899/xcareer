function addTwoDigits(n){
    if(n<10 || n>99) return -1
    else return (n-parseInt(n/10)*10)+parseInt(n/10)
}
