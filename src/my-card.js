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
    this.fancy = false;
    this.description = "hi";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      :host([fancy]) .card{
        background-color: blue;
        color: white;
      }
      .cardList{
        display: inline-flex;
      }
      .card {
        background-color: #400000;
        color: grey;
        width: 366px;
        border-width: 16px;
        border-radius: 6%;
        padding: 16px;
        margin: 16px;
      }
      .card-title{
        padding: 0px 8px;
        height: 30px;
        overflow: hidden;
      }
      img{
        width: 350px;
        padding: 8px;
        aspect-ratio: 1/1;
        
      }
      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }

      .card:hover {
        background-color: blue;
        border: 1px solid black;
      }
     
      }`;
  }
  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }
  

  render() {
    return html`
    <button @click="${() => { this.fancy = !this.fancy }}">Toggle</button>
    <div id="cardList">
      <div class="card">
      <h2 class="card-title">
      ${this.title}
    </h2>
    <img src=${this.image} alt="Plo Koon" class="card-image">
    <table>
        <td>Home Planet: </td>
        <td><slot name="planet">Dorin</slot></td>
      </table>
      <table>
        <td>Species: </td>
         <td><slot name="species">Kel Dor</slot></td>
      </table>
  
  <!-- put this in your render method where you had details -->
  <details ?open="${this.fancy}" @toggle="${this.openChanged}">
    <summary>Description</summary>
    <div>
      <table>
        <td>Height: </td>
        <td><slot name="height">1.88 meters/6ft 2inch</slot></td>
      </table>
      <table>
        <td>Mass: </td>
        <td><slot name="mass">80 kilograms</slot></td>
      </table>  
      <table>
        <td>Padawan(s): </td>
        <td><slot name="padawan">Bultar Swan</slot></td>
      </table>
    </div>
  </details>
      </div>
      </div>`;
  }

  static get properties() {
    return {
      fancy:{ type:Boolean, reflect: true },
      title: { type: String },
      image: { type: String },
      link: { type: String },

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
