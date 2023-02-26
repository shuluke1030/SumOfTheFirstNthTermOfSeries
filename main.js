function SeriesSum(n){
    let sum = 0;
    if( n === 0){
    return "0.00";
}
for( let i = 1; i <= n; i++){
    let x = 2 * (i - 1);
    
    sum = sum +  (1 / (i + x));
}
  return sum.toFixed(2)
}