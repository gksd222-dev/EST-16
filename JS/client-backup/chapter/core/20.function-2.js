/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

//console.log(resultX);
//console.log(resultY);
//console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(){
    

    // 함수 안에서만 접근 가능한 인수들의 집합 객체

    //console.log( arguments );
    //for문을 사용해서 모든 값의 합을 return 시켜주세요.
    
    //console.log(l);
    //let value=0;
/*     for(let i=0; i<arguments.length; i++){

      value = value + arguments[i];

      value += arguments[i];

      //console.log(arguments[i]);
      //console.log(value);

    } 

    return value;*/
    //return a+b+c+d+e+f+g

    //let total=0;
    //for(const value of arguments)total += value;
    //return total

    //배열의 메서드
    // 유사배열 -> 진짜배열을 만들면 되지 않나?
   
  //방법1
  // Array의 slice이란 기능을 이용하여 argu를 배열로 변환
  //const arr = Array.prototype.slice.call(arguments)  // array의 instance method

  //console.log( arr ); // array의 static method

  //방법2
  // Array의 from이란 기능을 이용하여 argu를 배열로 변환
  //const arr = Array.from(arguments) // array static method

  //배열을 만들 수 있는 또다른 방법
  //spread operator(전개 연산자, 전개 구문), 가장 많이 쓰인다.
  
  const arr= [...arguments]

  // return total
              //던더프로토   부모바꿔치기
  arguments.__proto__ = Array.prototype;
  // console.log( arguments );

  arguments.forEach(function(v){
    
    // console.log(v);

  })


  //reduce는 초깃값을 설정하지 않으면 배열의 첫번째 값을 acc에 할당
  /* return arr.reduce(function(acc,current){
    //console.log('acc : ',acc);
    //console.log('current : ',current);
    
    return acc + current;

  },0) */


  //return result;

/*   arr.forEach(function(value, index){
    console.log(value, index);

  })

  
  console.log( arr ); */

/*   Array.prototype.forEach.call(arguments, function(v){
    console.log(v);
  })
  arguments.forEach()
 */
  

};




const result = calculateTotal(10000,23500,38400,19900,18700,29800,9900)

// console.log( result );

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){

};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello (){

};


// 콜백 함수 (표현)식
let cb = function(condition, success, fail){

  if(condition) success()
    else fail()

};

cb(
  false,
  function(){
    console.log('성공입니다.');
  },
  function(){
    console.log('실패입니다.');
  }
)

// 함수 선언문 vs. 함수 (표현)식

//그래서 콜백 함수를 왜 쓰는거야? 뭐가 좋은 거지?

function movePage(url,success,fail){

  if(url.includes('https')){
    // 제대로된 url
    success(url)

  }else{
    // 이상한 url
    fail()
  }
}



movePage(
  'https://www.daum.net',
  function(변수){
    console.log(`
      현재 입력하신 url은 ${변수} 입니다.
      3초 뒤 해당 사이트로 이동합니다.`);

    // setTimeout(function(){
    //   location.href = 'https://www.naver.com'
    // },3000)


  },
  function(){
    console.log('잘못된 URL 정보를 입력하셨습니다.');
  }
)

function getGeolocation(success){  
  navigator.geolocation.getCurrentPosition(function(so){
    //console.log(so.coords);
    const data = so.coords.latitude;
    success(data)
  })
  //통신시간이 오래 걸린다.
}


getGeolocation(function(data){
  console.log(`이곳이 맛집입니다. 위도: ${data}`);
});







// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// encapsulation(캡슐화)

const master = (function(){

  //var a = 10;
  var uuid = 'zdfsadf@sadfasd'

  return {
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value;
    }
  }

}())

console.log(master); 