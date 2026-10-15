/* eslint-disable no-undef */

const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]


// 1. navigation을 선택한 후 이벤트 위임을 걸어주세요.
//  - addEventListener
//  - e.preventDefault()
// 2. li들을 수집
//  - e.target
//  - closest()
// 3. target에게 is-active 클래스 넣기
//  - elem.classList.add()
//  - addClass
// 4. target를 제외한 나머지 li들에게는 is-active를 제거해야함
//  - elem.classList.remove()
//  - removeClass()
// 5. data-index값 수집
//  - dataset
//  - attr()
// 6. li클릭시 이미지 교체
//  - 이미지 가져오기
//  - src 속성 접근하기
//  - src값 변경하기

// const nav = getNode('.navigation');
// const image = getNode('.main-image');


// // 1. navigation에 이벤트 위임
// navigation.addEventListener('click', (e) =>{
//   e.preventDefault();
  
//   // 2. 클릭한 li 찾기
//   const target = e.target.closest('li');
//   if(!target|| !navigation.contains(target)) return;

//   // 3~4. 활성화 클래스 변경
//   const items = navigation.querySelectorAll('li');

//   items.forEach((item) => {
//     if (item === target) {
//       item.classList.add('is-active');
//     } else {
//       item.classList.remove('is-active');
//     }
//   });

//     // 5. data-index 값 수집
//   const index = target.dataset.index;

//   // 6. 클릭한 li에 맞춰 이미지 교체
//   image.src = `./images/image${index}.jpg`;

// });

const navigation = getNode('.navigation');
const visualImage = getNode('.visual img');

const split = new SplitText('h3', {type:'chars'})

console.log( split );

function handleClick(e){
  e.preventDefault();
  const target = e.target.closest('li');
  const children = [...navigation.children];

  if(!target) return;

  const index = target.dataset.index;

  console.log(index);

  //visualImage.src = `./assets/part01/visual${index}.jpg`
  visualImage.src = `./assets/part01/${data[index-1].src}`
  //문자안의 변수는 백틱(`)을 사용해야한다.
  visualImage.alt = data[index-1].alt;


  // for(const li of navigation.children) {
  //   removeClass(li, 'is-active')
  // }

  // forEach를 사용해서 

  children.forEach((li)=>removeClass(li,'is-active'))

  addClass(target, 'is-active');

  gsap.from(split.chars,{
    opacity:0,
    y:30,
    immediateRender:false, 
    // 이것이 없으면 문구가 흐릿해지고 아래로 내려가는 현상이 발생
    ease:'power3.inOut',
    stagger:0.03,
    onComplete(){
      console.log('애니메이션 종료 시점');
    }
  })

}


navigation.addEventListener('click', handleClick)

















