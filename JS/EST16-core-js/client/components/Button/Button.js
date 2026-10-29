
class CustomButton extends HTMLElement{
  count = 0;

  constructor(){
    super();
  }

  connectedCallback(){
    console.log('connected');
    this.attachEvent();
    this.render();
  }

  disconnectedCallback(){
    console.log('disconnected');
  }

  static get observedAttributes(){
    return ['data-value'];
  }

  attributeChangedCallback(name, oldValue, newValue){
    console.log( name, oldValue, newValue );
    this.render();
  }

  // 내가 맘대로 정한 메서드 

  handleClick(){
    console.log('clicked');
    this.dataset.value = ++this.count;
    
  }

  attachEvent(){
    this.addEventListener('click',this.handleClick);
  }


  render(){
    this.innerHTML = this.dataset.value;
  }


}


customElements.define('my-button',CustomButton);



// 챕터명 Custom Elements
// 'my-element' html에서 사용할 태그명
// MyElement 클래스에서 정의한 정의명
// 커스텀 엘리먼트의 이름은 반드시 하이픈(-)을 포함해야 합니다. 
// 이렇게 하는 이유는 내장된 HTML 엘리먼트와 커스텀 엘리먼트 간에 이름 충돌이 없도록 보장하기 위함입니다
// 이 웹컴포넌트 세상에서는 이렇게 해야한다.
// 웹컴포넌트 api는 기본적인 도구이다
// 리엑트가 먼저 나오고 웹컴포넌트api가 나왔다.
// 함수의 앞이 class로써, 생성자이므로 앞에를 대문자로 하였다.

// customElements.define(
//   'user-info', class extends HTMLElement {
//   connectedCallback() {
//     alert(`${this.id} connected.`);
//     setTimeout(() => alert(`${this.id} initialized.`));
//   }
// });


// 챕터명 Shadow DOM
// 숨겨주는 그 무언가를 만들어주는 것
// 라이트 돔, 쉐도우 돔

class HelloButton extends HTMLButtonElement {
  /* 사용자 정의 엘리먼트 메서드 */
}

customElements.define('hello-button', HelloButton, { extends: 'button' });

