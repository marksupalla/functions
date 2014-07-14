var prompt = require('sync-prompt').prompt

function increment(x){
  x++
  return x;
}

var z = increment(3)
console.log(z);
z = increment(7); 
console.log(z);
z = increment(9);
console.log(z);
z = increment(12);
console.log(z);

function square(z){
  z*=z
  return z;  
}
var zz = square(5);
console.log(zz);


function area(l, w){
  return  l*w; 
}
z = area(3,4)
console.log(z);

function volume(l, w, h){
  return l*w*h;
}
z = volume(5, 5, 5);
console.log (z);

var w = area(square(increment(3) + increment (4)), square(2)); 
console.log(w);

function sayhello(){
console.log('hello');
}
sayhello();

function upper(string){
  return string.toUpperCase();
}
var u;
u = upper('hello');
console.log(u);

function drink(a){
  return a >= 21 ? ('You Can Drink!') : ('You Cannot Drink');  
}
z = drink(18);{
console.log(z);
}

function lettergrade(g){
   if (g >=  90){
    return 'A';
  }else if (g >= 80){
    return 'B';
  }else if (g >= 70){
    return 'C';
  }else if (g >= 60){
    return 'D';
  }else{
    return 'F';
  }
} 
z = lettergrade(67);
console.log(z);


function tax(x, y){
  return x + (x * (y/100));
}

var z = tax(25, 10);
console.log(z);


function numbers(array){
var sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i];
}
    return sum;
}
z = numbers([2, 3, 4]);
console.log(z);


function factorial(n){
  var product = 1;
  for (var i = 2; i <= n; i++){
  product *= i;
  }
  return product;
}

var z = factorial(7);
console.log(z);

function rolldie(){
  return Math.floor((Math.random() * 6) + 1);
}

function ispair(x, y){
  return x === y;
}
function countpairs(x){
  var count = 0;
  for(var i = 0; i < x; i++){
    if (ispair(rolldie(), rolldie()));
      count++
  }

}


var z;
for (var i = 0; i < 10; i++){
z = rolldie();
console.log('Roll: ', z);
}
x = ispair(z, z)
console.log (x);

