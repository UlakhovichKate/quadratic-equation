module.exports = function solveEquation(equation) {
  // your implementation
  let array = equation.split(' ');
  let a = array[0];
  let b = array.slice(3,5).join('');
  let c = array.slice(7,10).join('');
  var d = b * b - 4 * a * c;
  var Arr=[];
  if ( d < 0 ) {
    res1= - b / ( 2 * a ) + Math.sqrt( -d ) / ( 2 * a );
    res2= - b / ( 2 * a) - Math.sqrt( -d ) / ( 2 * a );
  }
  if ( d == 0 ) {
      res1= -b / ( 2 * a );
      res2= -b / ( 2 * a );
  }
  else {
        res1= -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
        res2= -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
      }
  Arr.push(res1,res2);
  return Arr;
}
