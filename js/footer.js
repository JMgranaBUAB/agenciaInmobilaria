class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      

      <footer>
        Para mas informacion contactar al : 456456456
      </footer>
    `;
  }
}

customElements.define("my-footer-custom", MyFooter);
