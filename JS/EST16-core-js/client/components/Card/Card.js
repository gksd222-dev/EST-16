class Card extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.state = {
      showImage: this.getAttribute('showImage') || 'true',
      title : this.getAttribute('title') || '{{Card Title}}'
    }
    //this.render();
  }
  //html의 값을 js에서 읽어들이고 있다

  connectedCallback() {
    this.render();

    console.log(this.state);

  }

  render() {

    const {showImage, title} = this.state

    const figure = `
      <figure>
        <img src="./assets/visual.png" alt=""/>
        <figcaption class="a11y-hidden">${title}</figcaption>
      </figure>
    
    `

    this.shadowRoot.innerHTML = `
    <style>@import url('./components/Card/Card.css');</style>
    
      <div class="card">
        ${ showImage === 'true' ? figure : ''}
        <h2>${title}</h2>
        <h3>
          <slot></slot>
        </h3>
        <p>description....</p>
        <button type="button">CTA</button>
      </div>
    `;
  }
}

customElements.define('c-card', Card);