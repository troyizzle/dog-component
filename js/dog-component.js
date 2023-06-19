const template = document.createElement("template");
template.innerHTML = `
  <h1>Dog Component</h1>
  <slot></slot>
`

class Dog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("dog-component", Dog);
