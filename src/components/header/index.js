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
				<ul>
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
							<li><a href="#" >Home</a></li>
							<li><a href="#">Reportar DMCA</a></li>
							<li><a href="#">Contato</a></li>
							<li><a href="#" onClick={() => this.setState({cursos:true})}>Cursos</a>
								{this.cursos()}
							</li>
							<li><a >Ajuda</a></li>
						</ul>
					</nav>
				</header>
			</Fragment>
		)
	}
}
export default Header