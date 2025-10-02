class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                <section id="header">
                    <a href="#">
                        <img src="images/logo10.png" class="logo" alt="">
                    </a>
                
                    <div>
                        <!-- Navigation bar -->
                        <ul id="nav">
                            <li><a Class="active" href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </section>
        `;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <footer>
                <p>&copy; 2025 Potometrics. All rights reserved.</p>
                <div class="social-icons">
                    <a href="https://x.com/potometrics" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://bsky.app" target="_blank" title="Bluesky">
                        <img src="images/bluesky-icon.png" alt="Bluesky" style="height: 21px; width:30px; vertical-align: bottom;">
                    </a>

                </div>
            </footer>
        `;
  }
}

customElements.define("my-footer", MyFooter);
