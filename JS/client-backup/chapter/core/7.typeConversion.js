/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* //문자형으로 변환 */
/* let value = true; */
/* console.log(typeof value); */
/*  */
/* value = String(value); */
/* console.log(typeof value); */
/*  */
/* //숫자형으로 변환 */
/* console.log('6' / '2'); */
/*  */
/* let str = '123'; */
/* console.log(typeof str); */
/*  */
/* let num = Number(str); // 문자열 "123"이 숫자 123으로 변환됩니다. */
/*  */
/* console.log(typeof num); //number */
/*  */
/* let age = Number('임의의 문자열 123'); */
/*  */
/* console.log(age); */
/*  */
/* console.log(Number(true)); */
/*  */
/* console.log(Number(false)); */
/*  */
/* // 불린형으로 변환 */
/*  */
/* const person = { */
/*     name: "홍길동", */
/*     age: 32 */
/* }; */
/*  */
/* function Person(name, age) { */
/*     this.name = name; */
/*     this.age = age; */
/* } */
/*  */
/* const person1 = new Person("홍길동", 32); */
/* const person2 = new Person("김철수", 25); */
/*  */

/* 데이터 → 문자 ----------------------------------------------------------- */
// number
const YEAR = 2026;

//명시적
console.log(String(YEAR));

//암시적
console.log(YEAR + '');

// undefined, null
const days = null;
let undef;
console.log(String(days));
console.log(String(undef));

// boolean

const isClicked = false;

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
const aa = {
    name:'tiger',
    age:30
};

//null
const money = null;

console.log(money*1);
console.log(money/1);
console.log(+money);

//boolean
let isActive = false;

console.log(isActive/1);

//string
let num = "100";

console.log(num*1);

//numeric string
const width = '120.5px';

console.log( parseInt(width) );
console.log( parseFloat(width)+ 10 + 'px');

//console.log(Number(friend));

// null

// boolean

// string

// numeric string

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

console.clear()

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));

// 위에 나열한 것 이외의 것들

console.log(Boolean('0'));
console.log(Boolean(' '));
console.log(!!(-1));
console.log(!!({}));
console.log(!!([false]));
console.log(!!(()=>false));

