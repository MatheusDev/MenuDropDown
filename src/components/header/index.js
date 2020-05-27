import React, { Component, Fragment } from 'react';
import './style.css';

class Header extends Component {
  constructor(props){
		super(props)
		this.state = {
			cursos: false
		}
	}
	cursos = () => {
		if(this.state.cursos){
			return (
				<ul className="cursos">
					<li><a href="#">JavaScript</a></li>
					<li><a href="#">React.js</a></li>
					<li><a href="#">Node.js</a></li>
					<li><a href="#">MySQL</a></li>
				</ul>
			)
		}
	}
	render(){
		return(
			<Fragment>
				<header>
					<nav>
						<ul>
              <li ><a className="main-menu" href="#">Home</a></li>
              <li ><a className="main-menu" href="#">Reportar DMCA</a></li>
              <li ><a className="main-menu" href="#">Contato</a></li>
              <li ><a className="main-menu" href="#"onClick={() => this.setState({cursos:true})} onMouseOut={() => this.setState({cursos:false})}>Cursos</a>
								{/*this.cursos()*/}
                <ul>
					        <li><a href="#">JavaScript</a></li><br/>
					        <li><a href="#">React.js</a></li><br/>
					        <li><a href="#">Node.js</a></li><br/>
					        <li><a href="#">MySQL</a></li>
				        </ul>
							</li>
							<li ><a className="main-menu" >Ajuda</a></li>
						</ul>
					</nav>
				</header>
			</Fragment>
		)
	}
}
export default Header