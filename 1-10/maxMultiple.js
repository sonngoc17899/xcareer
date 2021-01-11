const maxMultiple = (divisor, bound) =>{
    if(divisor <2 || divisor < 10 || bound > 100 || bound <5 || divisor>bound)
    return false
    return parseInt(bound/divisor)*divisor;
}
maxMultiple(3,10)