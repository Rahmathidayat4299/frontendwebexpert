class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowDOM
      .querySelector(".drawer-icon")
      .addEventListener("click", () => {
        this.toggleDrawer();
      });
  }
  // method toggleDrawer() akan mengubah class dari elemen .nav-menu menjadi .show 
  // yang akan menampilkan menu navigasi pada layar mobile. Method addEventListener()
  toggleDrawer() {
    const navMenu = this.shadowDOM.querySelector(".nav-menu");
    navMenu.classList.toggle("show");
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            width: 100%;
            background-color: cornflowerblue;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }
          h2 {
            padding: 16px;
          }
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .nav-menu {
            display: flex;
            list-style: none;
          }
          .nav-menu li {
            margin-right: 20px;
          }
          .nav-menu li:last-child {
            margin-right: 0;
          }
          .nav-menu a {
            color: white;
            text-decoration: none;
          }
          .nav-menu a:hover {
            text-decoration: underline;
          }
          .drawer-icon {
            display: none;
            cursor: pointer;
          }
          @media screen and (max-width: 600px) {
            .nav-menu {
              display: none;
            }
            .drawer-icon {
              display: block;
            }
          }
          .logo img {
            height: 30px;
          }

          /* Tampilkan menu navigasi pada layar mobile */
          .nav-menu.show {
            display: block;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            padding: 16px;
            background-color:#E7AB9A ;
            ;
            z-index: 1;
          }
          .nav-menu.show li {
            margin-bottom: 16px;
          }
  
          /* Animasi ketika menu navigasi ditampilkan */
          @keyframes slideIn {
            0% {
              transform: translateY(-50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .nav-menu.show li {
            animation: slideIn 0.5s forwards;
            animation-delay: calc(var(--i) * 0.1s);
          }
  
          /* Tambahkan class active pada icon hamburger saat menu navigasi ditampilkan */
          .drawer-icon.active {
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
          }
        </style>
        
        <div class="container">
          <div class="logo">Restaurant 🥘 </div>
          <nav>
            <ul class="nav-menu">
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Favorite</a></li>
              <li><a href="https://www.linkedin.com/in/rahmat-hidayat-a19419136/">About Us</a></li>
            </ul>
          </nav>
          <div class="drawer-icon">&#9776;</div>
        </div>
        
      `;
  }
}

customElements.define("app-bar", AppBar);
