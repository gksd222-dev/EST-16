/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log( AandB );

// 논리곱 할당 연산자

//a &&= b;
//a = a && b;





// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// 논리합 할당 연산자

//a ||=  b;



// 부정 연산자
let reverseValue = !!value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ` ` && [] && {thisIsFalsy:false};


// 첫번째 Truthy를 찾는 연산 (||)
const whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};






/* 
1. 대소문자 구분 없이 받을 수 있게
2. 공백 문자 처리
*/

function login(){
  const userName = prompt('누구십니까?');

  if(!userName) return;

  if(userName.toLowerCase() === 'admin'){

    const pass = prompt('비밀번호:');

    if(pass.toLowerCase() === 'themaster'){
      console.log('환영합니다!');
    } else if(pass === null){
      console.log('취소되었습니다.');
    } else{
      console.log('인증에 실패하였습니다.');
      login();
    }
  } else if(userName.replace(/\s*/g, "") === '' || userName === null){
    console.log('취소되었습니다.');
  } else{
    console.log('인증되지 않은 사용자입니다.');
  }
}

  // const userName = prompt('누구십니까?');

  // if(userName?.toLowerCase() === 'admin'){

  //   const pass = prompt('비밀번호:');

  //   if(pass?.toLowerCase() === 'themaster'){
  //     console.log('환영합니다!');
  //   } else if(pass === null){
  //     console.log('취소되었습니다.');
  //   } else{
  //     console.log('인증에 실패하였습니다.');
  //   }
  // } else if(userName?.replace(/\s*/g, "") === '' || userName === null){
  //   console.log('취소되었습니다.');
  // } else{
  //   console.log('인증되지 않은 사용자입니다.');
  // }
