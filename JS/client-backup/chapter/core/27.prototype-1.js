/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// Object.defineProperty(animal,'sleep',{
//   get(){
//     return true;
//   },
//   enumerable:false
// })

const animal = {
  legs:4,
  tail:true,
  get eat(){
    return this.stomach
  },
  set eat(food){
    this.stomach = [];
    this.stomach.push(food)
  }
}


const tiger = {
  pattern: '호랑이 무늬',
  hunt(target){
    this.prey = target;
    this.eat = this.prey;
    return `${target}에게 조용히 접근 후 먹는다.`
  },
  __proto__: animal
}


const 백두산호랑이 = {
  name:'백돌이',
  color: 'white',
  __proto__: tiger,

}

//백두산호랑이.__proto__ = tiger

const 한라산호랑이 = {
  name:'한돌이',
  color: 'orange',
  __proto__: tiger,

}

// 생성자 함수 

//컴포넌트
function Animal(){
  this.legs = 4;
  this.tail = true;
  this.getEat = function (){
    return this.stomach ?? [];
  }
  this.setEat = function(food){
    this.stomach = [];
    this.stomach.push(food)
  }
}

function Tiger(){
  Animal.call(this)
  this.name = name;
  this.pattern = '호랑이무늬'
  this.hunt = function (target){
    this.prey = target;
    return `${target}에게 조용히 접근합니다.`
  }
}

const _animal = new Animal();

//Tiger.prototype = _animal
//생성자 함수를 통해 생성된 프로토타입에는 _animal이 포함되어 있다.


const _tiger = new Tiger('호돌이');

Animal.bark = function (target, sound){
  return `${target}는 가끔 ${sound} 이런 소리를 냅니다.`;
}

//console.log(_animal, _tiger)

new Array()

//[1,2,3].forEach

// Array.prototype.slice.call('123123');

// Array.from() // 배열로 만듦

// Array.isArray()// 배열인자 확인

// //인스턴스
// const _animal = new Animal();


// console.log( _animal );


console.clear();

//function instance method

/* 

함수를 대신 실행시켜준다.

1. f.call     함수를 대신 "실행"시켜준다. this custom 가능 인수 : , , ,
2. f.apply    함수를 대신 "실행"시켜준다. this custom 가능 인수 : [ , , ]
3. f.bind     함수를 대신 "실행" X        this custom 가능 인수 : , , ,

*/

function sum(a,b){

  console.log(this);

  return a+b;
}

//const a = sum.call('hello',1,2);
//call은 원하는 변수를 this에 전달하여 원하는 this가 작동하도록 만들어 주는 함수
//const b = sum.apply('hello', [1,2]);
const b = sum.bind('hello', 1, 2);






// const obj = {
//   name:'tiger',
//   age:30
// }

// Object.prototype.hasOwnProperty.call(obj,'name')


const span = document.querySelector('.first span');

let count=0;

function print(){
  span.computedStyleMap.color = 'orange';
}


span.addEventListener('click', function(){


  this.style.color = 'orange';


})





