console.log('Hello World!');

// let text = 'JavaScriptの練習';
// console.log(text);

// text = 'JavaScriptをマスターした';
// console.log(text);

//処理①
let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

//処理②
console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

let string = 'JavaScriptの練習';
console.log(string);

//文字列型(string型)
console.log('elephant');
// console.log(elephant);

let Username = 'ジョニー';
let greet = '私は' + Username + '!';
console.log(greet);

let template = 'テンプレートリテラル';//※これは文字列
let templateText = `これが${template}です。
${template}は改行もできます。`;//これはテンプレートリテラル
console.log(templateText);

//数値型(number型)
let num = 10;
console.log(num);

let numTen = 10;
let strTen = '10';//追加
console.log(numTen,strTen);//値を追加

let minus = -10;
let decimal = 1.1;
console.log(minus,decimal);

//数値型でできる操作
let num1 = 25;
let num2 = 2;
console.log(num1+num2);//加算(足し算)
console.log(num1-num2);//減算(引き算) - に変更
console.log(num1*num2);//乗算(掛け算) * に変更
console.log(num1/num2);//除算(割り算) / に変更

//省略記法
// let number = 5;
// number += 3;//number = number + 3と同じ
// console.log(number);
// number -= 1;//number = number - 1と同じ
// console.log(number);
// number *= 5;//number = number * 5と同じ
// console.log(number);
// number /= 7;//number = number / 7と同じ
// console.log(number);

//インクリメント(1を足す)
let increment = 0;
console.log(increment);
increment++;//increment += 1と同じ
console.log(increment);

//デクリメント(1を引く)
let decrement = 10;
console.log(decrement);
decrement--;//decrement -= 1と同じ
console.log(decrement);

//剰余(割った余り)
let bigNum = 25;
let smallNum = 2;
//console.log(bigNum % smallNum);//25 / 2 = 12 あまり 1 なので1が表示される
console.log(bigNum ** smallNum);//25の2乗なので、25 * 25 となり、625が表示される
//↑累乗

let stringNum = '25';
let numberNum = 2;
console.log(stringNum + numberNum);//文字列が入ってないかを確認する‼

//配置型(array型)
let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log('names[0] ⇒ ', names[0]);
console.log('names[1] ⇒ ', names[1]);
console.log('names[2] ⇒ ', names[2]);
console.log('names[3] ⇒ ', names[3]);
console.log('names.length ⇒ ', names.length);

let emptyNames = [];
emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);

//オブジェクト型(object型)
//let John = {
//  name: 'John',//key(キー): value(バリュー)←プロパティ
//  age: 26,
//  bloodType: 'A',
//  favorite: 'card',
//};
//console.log(John.bloodType);//⇒ A

let Andy = {};
Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';

//配置とオブジェクトの使い分け
//配列は同じジャンルをまとめるときに(例：フルーツ[リンゴ、バナナ、ブドウ])、オブジェクトは同じモノのそれぞれの属性をまとめるとき(リンゴ[色：赤、形：丸])使用

let vehicles = [
  {vehicleName: 'car', color: 'red', speed: 'normal'},
  {vehicleName: 'train', color: 'green', speed: 'fast'},
  {vehicleName: 'airplane', color: 'grey', speed: 'faster'},
];

//Section3　関数
function getArea(){
let radius = 2;
let circle = radius * radius * 3.14;
console.log('円の面積は' + circle +'です。');
}
getArea();//これが関数の呼び出し、何回でも呼び出せて使いまわせる
//function 関数名(){処理の内容}

//引数
function getArea(radius){
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です。');
}
getArea(5);
getArea(6);
getArea(10);

//返り値
function getArea(radius){
  let circle = radius * radius * 3.14;
  return circle;
}
console.log('円の面積は' + getArea(5) + 'です。');
console.log('円の面積は' + getArea(10) + 'でござんす。');

//コールバック関数(引数に渡す関数のこと)
function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}
doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});

let John = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};
John.sing();

let round = Math.round(2.86); // 四捨五入
console.log('round => ', round);

let ceil = Math.ceil(4.05);   // 切り上げ
console.log('ceil => ', ceil);

let floor = Math.floor(4.98); // 切り下げ
console.log('floor => ', floor);

let random = Math.random(); // 0~1までの乱数の生成
console.log('random => ', random);


let userAge = 0;  // 変数の定義を関数の外で行う
myFunc();

function myFunc() {
  userAge = 27;  // ここは再代入するように変更
  console.log(userAge); // => 27がConsoleに表示される
}

console.log(userAge); // => 27がConsoleに表示される

//Section4 if文(条件分岐を行いたいときに使用する構文)

//if (条件式) {
  // 条件式がtrue（真）のときの処理
// }

//真偽値型(boolean型)
let value1 = true;
let value2 = false;

if (false) {
  console.log('trueです！');
}
console.log('処理が終わりました');

//比較演算子
let tall = 185;
if (tall >= 180) {
  console.log('高身長です');
}

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');

//複雑な条件分岐
let signal = 'red';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'blue') {
  console.log('青信号です。進みましょう');
} else if (signal === 'yellow') {
  console.log('黄色信号です。空気を読みましょう');
}//else if 何回でも使える

let myAge = 12;
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
} else {
  console.log('子供です');
}

//論理演算子(「または」や「かつ」の条件式を作れる演算子)
let loto = 8;

if (loto === 7 || loto === 8) {
  console.log('当たり');
} else {
  console.log('ハズレ');
}

let numVal = 8;
let strVal = 'text'

console.log(numVal === 7 || strVal === 'text');

let userA = '到着';
let userB = '到着';

//if (userA === '到着' && userB === '到着') {
  // console.log('全員揃ったので出発します。');
// } else {
  // console.log('揃っていないため、出発できません。');
// }
console.log(userA === '到着' && userB === '到着');

//三項演算子(if文の代替として、一行で記述できる書き方)
// 条件式 ? trueの時の処理 : falseの時の処理
let errMsg = '';

// if 文を使った書き方
if (errMsg === '') {
    console.log('ない！');
} else {
    console.log('ある！');
}

// 三項演算子を使った書き方
errMsg === '' ? console.log('ない！') : console.log('ある！');

let number = 1;

// numberを2で割った時
// 割り切れたら「偶数です」、割り切れなかったら「奇数です」
// という文字列をtextに代入する
let text = number % 2 === 0 ? '偶数です' : '奇数です';
console.log(text); // 奇数です

// Truthy (真値) と Falsy (偽値)
if (1) {
  console.log('hoge');
}

if (0) {
  console.log('piyo');
}

// for文(繰り返し処理をするためのもの)
// for (初期値; 繰り返しの条件式; 処理の後にされる式) {
  // ここに繰り返す処理を書きます。
// }
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
