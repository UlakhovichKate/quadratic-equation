module.exports = function solveEquation(equation) {
  // your implementation
  let array = equation.split(' ');
  let a = array[0];
  let b = array.slice(3,5).join('');
  let c = array.slice(7,10).join('');
  var d = b * b - 4 * a * c;
  var Arr=[];
   if ( d < 0 ) {
     res1=Math.ceil( - b / ( 2 * a ) + Math.sqrt( -d ) / ( 2 * a ));
     res2=Math.ceil( - b / ( 2 * a) - Math.sqrt( -d ) / ( 2 * a ));
     if (res1<res2){
       r1=res1;
       r2=res2;
     }
     else{
       r1=res2;
       r2=res1;
     }
   }
   if ( d == 0 ) {
       r1= -b / ( 2 * a );
       r2= -b / ( 2 * a );
   }
   else {
         res1=Math.ceil( -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a ));
         res2=Math.ceil( -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a ));
         if (res1<res2){
           r1=res1;
           r2=res2;
         }
         else{
           r1=res2;
           r2=res1;
         }
       }
   Arr.push(r1,r2);
  return Arr;
}
