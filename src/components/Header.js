import React, { Component } from "react";

import logo from "../assets/logo.png";
import perfil from "../assets/perfil.png";

class Header extends Component {
  render() {
    return (
      
        <header>
          <img src={logo} alt="Logo Facebook" id="logo" />
          <nav>
            <ul>
              <a href="">
                <li>
                  Meu Perfil <img src={perfil} alt="Imagem do Perfil" />
                </li>
              </a>
            </ul>
          </nav>
        </header>
      
    );
  }
}

export default Header;
