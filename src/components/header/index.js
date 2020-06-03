import React, { Component, Fragment } from 'react';
import './style.css';

class Header extends Component {
  constructor(props){
		super(props)
		this.state = {
       
		}
  }
	render(){
    return(
      <header>
        <div className="logo">
          <a>
            <img src="http://files.cod3r.com.br/curso-web/logo.png" alt="Logo" title="Home"></img>
          </a>
        </div>
        <button className="menu-toggle">
          <i className="fa fa-lg fa-bars"></i>
        </button>
        <nav className="menu">
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#cursos">Cursos</a>
              <ul className="">
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">ReactJS</a></li>
                <li><a href="#">Node</a></li>
                <li><a href="#">ReactNative</a></li>
              </ul>
            </li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <aside className="autenticacao">
          <a href="#login">Login</a>
          <a href="#registrar" className="botao destaque">Registrar</a>
        </aside>
      </header>
    )
  }
	
}
export default Header