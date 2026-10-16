
import {
  attr,
  getNode,
  addClass,
  insertLast,
  removeClass,
  clearContent
} from "./lib/index.js";


//import clearContent from "./lib/dom/clearContent.js";
//import { getNode, getNodes } from "./lib/dom/getNode.js";
//import { getNode as $, getNodes } from "./lib/dom/getNode.js";
//변수명을 바꾸어줄 수 있다.
//import { insertLast } from "./lib/dom/insert.js";

//import {debounce} from "./lib/utils/debounce.js";


// named export => import { 함수이름/변수이름 as $ } from '경로설정'

// default export(기본 내보내기) => import 함수이름/변수이름,{함수이름} from '경로설정'
// 괄호없이 내보낸다(둘을 동시에 내보낼 수 없다). 하나만 내보낸다는 뜻이다.
// 한개의 객체, 배열, 함수 만 내보낸다.
// import clearContent {getNode as $} from "./lib/dom/clearContent.js";



// 1. input 선택하기
// 2. input 이벤트 바인딩
//    -addEventListener('input')
// 3. input value값 가져오기
// 4. 숫자 더하기
// 5. result에 출력하기

function phase1(){

    const first = getNode('#firstNumber');
    const second = getNode('#secondNumber');
    const result = getNode('.result');
    const clear = getNode('#clear');

    function handleInput(){
      const firstValue = Number(first.value);
      const secondValue = +second.value;
      const total = firstValue + secondValue;

      clearContent(result)
      insertLast(result,total);
    }

    function handleClear(e){
      e.preventDefault();
      clearContent(first)
      clearContent(second)
      clearContent(result)
      first.focus();
    }

    first.addEventListener('input',handleInput)
    second.addEventListener('input',handleInput)
    clear.addEventListener('click',handleClear)
}

phase1();



function phase2(){
  // const first = getNode('#firstNumber');
  // const second = getNode('#secondNumber');
  const calculator = getNode('.calculator');
  const result = getNode('.result');
  const clear = getNode('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

  function handleInput(){
    const total = numberInputs.reduce((acc,cur)=> acc + Number(cur.value),0);
    
    result.textContent = ''
    insertLast(result,total);

  }

  function handleClear(e){
    e.preventDefault();
    console.log( numberInputs );
    
    numberInputs.forEach((elem)=> elem.value = '')
    result.textContent = '-'
  }


  calculator.addEventListener('input',handleInput)
  clear.addEventListener('click',handleClear)

}











