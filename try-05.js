var x = `ia am sardar"nadeem"`
console.log(x);
var algh = 'A B C D E F J H I J K L M N O P Q R S T U V W X Y Z '
console.log(algh.length);

console.log(algh.slice(0,7));

console.log(algh.substring(7));
console.log(algh.substr(1,10));


var string = '    I am so tired i is is wanna sleep broo';
var String2 = ' i love coding,coding is my love bro'
console.log(string.charAt(6))
console.log(string.charCodeAt(' '))
console.log(algh + string);
console.log(algh.concat(string, " ",String2));
console.log(algh.endsWith('Z'));
// console.log(string.fromCharCode(77,65,85,041));
// console.log(String2.includes('love'))
console.log(string.indexOf('is'))
console.log(string.match(/is/g))
document.write(string.repeat(12))
console.log(String2.replace(/love/g,'don,t love'));
console.log(string.startsWith('i'));
console.log(string.toUpperCase())
console.log(String2.toLowerCase())
//trim
var x = algh.trim
console.log(algh.length)
console.log(x)
console.log(algh.length)
console.log(algh.split('c '))

function toup(){
    
var thename = document.querySelector('input').value
document.write(thename.toUpperCase(thename))
}
var intNum = 10;
var strnum = '10'
console.log(intNum != strnum);

var n = 12;
console.log(typeof(n));
var xx = n.toString()
console.log(typeof(xx))
var alj = xx + n;
var alj2 = n + xx;

console.log(alj);
var y = 20;
var k = '10'
var kk = parseInt(k)

console.log(y + kk);
console.log(alj2);
let t = 123;
t.toString();
(123).toString();
console.log((100 + 123).toString())

let z = 9.25437816;
console.log(z.toFixed())
let v = 123;
v.valueOf();
(123).valueOf();
console.log((100 + 23).valueOf());


var p = '123.22'
console.log(typeof(p))
var y = Number(p)
console.log(Number(y));

console.log(Number(true))
console.log(Number(false))
console.log(Number("10"))
console.log(Number(" 10"))
console.log(Number("10 "))
console.log(Number(" 10 "))
console.log(Number("10.33"))
console.log(Number("10,33"))
console.log(Number("JOHAN"))
console.log(Number("10/33"))



console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("-10"));
console.log(parseInt("years 10"));

console.log(parseFloat("-10"));
console.log(parseFloat("-10.33"));
console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("-10"));
console.log(parseFloat("years 10"));

const car = ['fard' ,'lumborgini', 'bmw', 'farari'];
console.log(car)
car.pop()
console.log(car)
console.log (car.push("bmw"));
console.log(car)
car.shift()
console.log(car)
car.unshift()
console.log(car)

car[car.length]="marix"
console.log(car)
const fruits = ["banana", "orange" , "apple" , "mango" ];
fruits.splice(2, 0 , "lemon" , "kiwi")
console.log(fruits)
fruits.slice(2)


console.log(fruits.slice(2));










