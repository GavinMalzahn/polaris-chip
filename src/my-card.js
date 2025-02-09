import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Plo Koon";
    this.image = "https://cdn.shopify.com/s/files/1/0883/1929/5779/files/image-8.png";
    this.link = "https://hax.psu.edu/";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      #card-list {
        display: flex;
      }
      .card {
        background-color: #400000;
        color: grey;
        max-width: 400px;
        border-width: 4;
        border-radius: 8%;
        padding: 8px 8px 8px 32px;
        margin: 8px;
      }
      img{
        width: 375px;
      }

      .card:hover {
        background-color: blue;
        border: 1px solid black;
      }

      @media not screen and (min-width: 500px) and (max-width: 800px) {
        .details{
          display: none;
        }
      }
      @media only screen and (max-width: 500px) {
        div{
          width: 300px;
        }
        img{
          width: 275px;
        }      
      }`;
  }

  render() {
    return html`
    <div>
    <button class="duplicate">Clone Card</button>
    <button id="namechange">Change name</button>
    <button id="pic-change">Change pic.</button>
    <button id="bg-change">Change background</button>
    <button id="delete">Delete card</button>
    </div>
    <div id="cardList">
      <div class="card">
      <h2 class="card-title">
      ${this.title}
    </h2>
    <img src=${this.image} alt="Plo Koon" class="card-image">
    
  <p>  
  Home Planet: Dorin
  <br>Species: Kel Dor
  <br>Height: 1.88 meters/6ft 2inch
  <br>Mass: 80 kilograms
  <br>Padawan: Bultar Swan
    <br><a class="details" href=${this.link}>Details</a>
    </p> 
      </div>
      </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
