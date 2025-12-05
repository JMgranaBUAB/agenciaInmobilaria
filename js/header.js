class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

      <header>
        <h1>Bienvenidos a mi Agencia Inmobiliaria</h1>
        <h3>Los mejores precios del planeta</h3>
      </header>
    `;
    }
}

customElements.define("my-header-custom", MyHeader);
