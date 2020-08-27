import React, { Component, Fragment } from 'react';
import './style.css';

class Header extends Component {
  constructor(props){
		super(props)
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
        &#9776;
        </button>
        <nav className="menu">
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#cursos">Cursos</a>
              <ul>
                <li><a href="#cursos/javascript">JavaScript</a></li>
                <li><a href="#cursos/python">Python</a></li>
                <li><a href="#cursos/reactjs">ReactJS</a></li>
                <li><a href="#cursos/nodejs">NodeJS</a></li>
              </ul>
            </li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <aside className="autenticacao">
          <a href="#login">Login</a>
          <a href="#registrar" className="destaque">Registrar</a>
        </aside>
      </header>
    )
  }
	
}
export default Header