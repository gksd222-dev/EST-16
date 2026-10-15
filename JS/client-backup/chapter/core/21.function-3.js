// /* ---------------------- */
// /* Functions → Arrow      */
// /* ---------------------- */

// //함수표현식
// const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// // console.log(resultX);
// // console.log(resultY);
// // console.log(resultZ);


// // 함수 선언 → 화살표 함수 (표현)식
// /* let calcAllMoney = function(a,b){
//     return a + b;
// }; */

// // 화살표함수를 사용할 때 argu함수는 사용 불가, 없다.
// // 최근 함수는 성능적인 측면을 고려하기 때문에 많은 기능을 덜어냈다.


// //전개연산자
// //[...arr]

// //rest parameter
// let calcAllMoney = (...args) => args.reduce((acc, cur) => acc + cur, 0);
  
//   //const _4000 = args[2]
//   //const first = args[0];
  
//   //for of 문을 사용해 모든 값의 합을 구하시오
//     let total=0;
//     // for(const value of args)total += value;
    
//     // console.log(total);

//   //forEach
//   //args.forEach((value)=> total += value);

//   //console.log(total);

//   //reduce
// //return total = args.reduce((acc, cur) => acc + cur, 0);


//   //return a + b;






// calcAllMoney(1000,2000, 3000, 4000, 5000, 6000, 7000);

// // 화살표 함수와 this

// console.log(this); // window

// // 일반 함수: 나를 호출한 대상을 기준으로 this를 바인딩 합니다.
// function a() {

//   console.log(this);

// }

// // 화살표 함수 : this 자체를 바인딩하지 않는다. 상위 컨텍스트에서 가져온다
// const _a = () => console.log(this)

// console.clear()

// // 함수 선언문, 함수 표현식, 화살표 함수
// // 다양한 함수들은 객체 안에서도 사용할 수 있다. (메서드 method)
// // 메서드 => 다양한 방법을 만들 수 있다.

// //일반 함수
// //this : 나를 호출한 대상을 this

// //화살표 함수
// //this : 바인딩 하지 않ㅇ,ㅁ => 상위 컨텍스트에서 찾음.




// const obj = {
//   name: 'tiger',
//   age:30,
//   sayHi:function(){
//     console.log(`안녕 나는 ${this.name} 이야 내 나이는 ${this.age}`);
//   },
//   _sayHi: () => {
//     console.log(this);
//   }
// }




// /* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// // pow(numeric: number, powerCount: number): number;
// let pow; 

// // repeat(text: string, repeatCount: number): string;
// let repeat; 


/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식

const arr = [1,2,3];

// 전개 연산자
[...arr] 


              // rest parameter
let calcAllMoney = (...args) => {

  // const _4000 = args[2]
  // const first = args[0];

  // for of 문을 사용해 모든 값의 합을 구하시오.

  let total = 0;

  // for(const value of args) total += value;


  // forEach
  args.forEach((value) => total += value)



  // reduce

  return args.reduce((acc,cur) => acc + cur ,0)

  

  // return total

  // return a + b;

};



calcAllMoney(1000,2000,3000,4000,5000,6000,7000);





let _calcAllMoney = (...args) => args.reduce((acc,cur) => acc + cur ,0);



// 화살표 함수와 this



// 자바스크립트 세상에서 this는 어디에나 존재한다.


console.log(this); // window

// 일반 함수: 나를 호출한 대상을 기준으로 this를 바인딩합니다.
function a(){
  console.log(this);
}

// 화살표 함수 : this자체를 바인딩하지 않는다. 상위 컨텍스트에서 가져올 뿐.
const _a = () => console.log(this)


console.clear();


// 함수 선언문, 함수 표현식, 화살표 함수 
// 다양한 함수들은 객체 안에서도 사용할 수 있다. (메서드 method)
// 메서드 => 다양한 방법을 만들 수 있다.


// 일반 함수
// this : 나를 호출한 대상을 this
// constructor : 내장  (concise method는 제외)


// 화살표 함수
// this : 바인딩 하지 않음 => 상위 컨텍스트에서 찾음
// constructor : 비내장 (성능 최적화)

// concise 함수
// 일반함수처럼 취급되지만 
// constructor : 비내장
// this를 호출할 수 있다., prototype를 비내장한 효율적이다.
// 함수에서 내부 호출이 필요할 때 주로 사용

const obj = {
  name:'tiger',
  age:30,
  sayHi:function(){
    console.log(this);
  },
  _sayHi:()=>{
    console.log(this);
  },
  __sayHi(){

    console.log(this);

    const self = this;

    function sayBye(){

      self.name
    
  }

  sayBye();

}
}
//객체에 method를 사용해야한다면 concise method를 사용해라
//그 메서드 안에서 함수를 또 써야하는 일이 생긴다면 화살표 함수를 쓰세요.
// this를 찾아야 하기 때문이다.


const user={
  name:'이소망',
  total:0,
  grades:[30,50,90],
  totalGrades(){
    // this.grades.forEach((grade) =>{
    //   console.log( this.total += grade);
    // })
    this.grades.forEach(()=> {
      this
    },this)
  }
}

//일반함수를 사용하면 값이 안나오고 concise를 사용해야 값이 나온다.

user.totalGrades()  //모든 점수 합


//prototype => constructor





// 자바스크립트의 함수 양면의 얼굴
// 1. normal function (일반 함수) => 리턴값을 명사
// 2. constructor function (생성자 함수) => 무조건 객체를 리턴함.

function Sum(a,b){
  return a + b
}

const result = new Sum(1,2);
// result는 new sum을 받는다. result는 객체이고, instanse이다.




function createUser(){
  return {
    name:'tiger',
    age:30
  }
}

const arrow = (a,b) => {
  return a+b
}

//new arrow(1,2) // 3



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {

  let total=1;

  for(let i =0; i < powerCount; i++){
    total=total*numeric
  }

  return total
} 

let _pow = (numeric, powerCount) => Array(powerCount).fill(null).reduce(acc => acc*numeric,1)

let __pow = (numeric, powerCount) => {
  return Array(powerCount).fill(null).reduce((acc) => {
    return acc*numeric},1) 
}

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) =>{

  let result='';

  for(let i=0; i < repeatCount; i++){
    result += text;
  }

  return result;

}


let _repeat = (text,repeatCount) => Array(repeatCount).fill(null).reduce(acc=> acc+text,'')




