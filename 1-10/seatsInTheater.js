const seatsInTheater = (nCols,nRows,col,row) =>{
    if(nCols>1000 || nCols <1 || nRows>1000 || nRows<1 || col<1 || col>nCols || row<1 || nRows<row) return false;
    return (nCols-col+1)*(nRows-row)
}
console.log(seatsInTheater(16, 11, 5, 3));