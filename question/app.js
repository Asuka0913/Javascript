// Section5
// Q1
let nickname = 'ごっしー';
let age = '28';
let greet = '私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です。';
console.log(greet);

// Q2
let language = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log('language[0] ⇒', language[0]);
console.log('language[3] ⇒', language[3]);
let languageText = `私の好きな言葉は${language[0]}です。
次は${language[3]}を勉強してみたいです。`;
console.log(languageText);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

user.birthday = '2000-09-27';
console.log(user);// Q7

user.sayHello = function(){
  console.log('Hello！');
}

user.sayHello();// Q7

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);//Q5

//Q6
function sayHello(){
  console.log('Hello');
}
sayHello();

const sayWorld = function(){
  console.log("World");
}
sayWorld();


//Q8
let calc = {};
calc.add = function(x, y){
  console.log(x + y);
}
calc.add(3, 4);

calc.subtract = function(x, y){
  console.log(x - y);
}
calc.subtract(10, 0);

calc.multiply = function(x, y){
  console.log(x * y);
}
calc.multiply(7, 7);

calc.divide = function(x, y){
  console.log(x / y);
}
calc.divide(5, 1);

//Q9
function remainder(x, y) {
  let remain = x % y;
  console.log(x + 'を' + y + 'で割った余りは' + remain + 'です。');
  return remain;
}

remainder(5, 3);

// Q10
// スコープは関数内でしか参照されないです。なので変数ｘが関数fooのなかで定義されて居りますので、console.logを
// 関数内の入れることでコンソールに1が出力され、エラーが出力されることはありません。


// Section6
// Q1
let randomInteger = Math.floor(Math.random() * 10);
console.log(randomInteger);

// Q2
setTimeout(function() {
  console.log('Hello World！');
}, 3000);

// Q3
let num = 10;
if (num > 0){
  console.log('num is greater than 0');
}

num = -1;
if (num < 0){
  console.log('num is less than 0');
}

num = 0;
if (num == 0){
  console.log('num is 0');
}

// Q4
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}
console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
  console.log(typeof mixed[i]);
  if (typeof mixed[i] == 'string'){
    console.log('not number');
  }else { if ( mixed[i] % 2 == 0) {
    console.log('even');
  }else if ( mixed[i] % 2 == 1) {
    console.log('odd');
  }
}
}
