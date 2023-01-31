class Nav extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #eee;
          padding: 10px;
        }

        .is-active {
          color: green;
        }
      </style>
      <nav>
        <a href="/">Home</a>
        <a href="/examples.html">Examples</a>
      <nav>
    `;

    const currentUrl = window.location.pathname;

    const links = this.shadowRoot.querySelectorAll("a");

    links.forEach((link) => {
      if (currentUrl.includes(link.pathname) && link.pathname !== "/") {
        link.classList.add("is-active");
        return;
      }
    });
  }
}

customElements.define("my-nav", Nav);
