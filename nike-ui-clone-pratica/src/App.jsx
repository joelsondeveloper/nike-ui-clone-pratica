import { FaUser } from "react-icons/fa";

import "./App.css";

function App() {
  return (
    <div className="app">
      <section className="section-banner">
        <header className="header">
          <h1 className="header-title">Nike Clone</h1>
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li className="header-nav-item active">
                <a href="#">Home</a>
              </li>
              <li className="header-nav-item">
                <a href="#">Sobre</a>
              </li>
              <li className="header-nav-item">
                <a href="#">Historia</a>
              </li>
              <li className="header-nav-item">
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>
          <button className="header-login">
            <FaUser />
            <span>Login</span>
          </button>
        </header>
        <div className="banner-carroussel">
          <div className="banner-carroussel_info">
            <h2>Use seu estilo com conforto</h2>
            <p>marca do tenis</p>
          </div>
          <div className="banner-carroussel_size">
            sp
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
