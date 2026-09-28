/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = DAWN;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch(thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;

  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;

  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

if(thisTime === MORNING){
  console.log('뉴스 기사 글을 읽는다.');
}else if(thisTime === LUNCH){
  console.log('자주 가는 식당에 가서 식사를 한다.');
}else if(thisTime === DINNER){
  console.log('동네 한바퀴를 조깅한다.');  
}else if(thisTime === NIGHT){
  console.log('친구에게 전화를 걸어 수다를 떤다.');  
}else if(thisTime === LATE_NIGHT || thisTime === DAWN){
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

/* switch vs. if -------------------------------------------------------- */


// prompt를 통해서 숫자를 입력받는다. (0 ~ 6 까지)
// 받은 숫자를 사용해서 switch case 사용해주세요. 

function getRandom(n){
  const value = Math.floor(Math.random()*n);

  return value;
}





function getDay(n){
  //const inputNumber = +prompt('숫자를 입력해주세요?', '0 ~ 6 까지의 숫자만 입력 가능');

  const value = getRandom(n);

  switch(value){
    case 0:
      console.log('월');
      return '월';

    case 1:
      console.log('화');
      return '화'; 

    case 2:
      console.log('수');
      return '수'; 

    case 3:
      console.log('목');
      return '목'; 

    case 4:
      console.log('금');
      return '금'; 

    case 5:
      console.log('토');
      return '토'; 

    case 6:
      console.log('일');
      return '일'; 
  }
}

//getDay 함수를 가지고
// 주말인지 평일인지 구분할 수 있는 함수 만들기.(weekend)


function weekend(){
  const day=getDay(7);

  // switch(day){
  // case '월':
  // case '화':
  // case '수':
  // case '목':
  // case '금':
  //   console.log('평일입니다.');
  //   break;

  // case '토':
  // case '일':
  //   console.log('주말입니다.');
  //   break;
  // }

  // if(day.includes('토') || day.includes('일')){
  //   return `오늘은 ${day}요일입니다. 그러므로 주말입니다.`
  // }else{
  //   return `오늘은 ${day}요일입니다. 그러므로 평일입니다.`
  // }

  return day.includes('토') || day.includes('일')?
                `오늘은 ${day}요일입니다. 그러므로 주말입니다.`:
                `오늘은 ${day}요일입니다. 그러므로 평일입니다.`

  //return value;
}


/*

0 : 일
1 : 월
2 : 화
3 : 수
4 : 목
5 : 금
6 : 토

*/





