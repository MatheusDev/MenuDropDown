import React, { Component, Fragment } from 'react';
import './style.css';

class Header extends Component {
  constructor(props){
		super(props)
		this.state = {
      cursosKey: false,
      subMenu:  <ul className="sub-menu">
                  <li><a href="#">JavaScript</a></li><br/>
                  <li><a href="#">React.js</a></li><br/>
                  <li><a href="#">Node.js</a></li><br/>
                  <li><a href="#">MySQL</a></li>
                </ul>
		}
  }
  mouseOut = (className = 'sub-menu') => {
    if(this.state.subMenu){
      this.setState({cursosKey:true})
    }
    this.setState({cursosKey:false})
  }
	cursos = () => {
		if(this.state.cursosKey){
			return (
				this.state.subMenu
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
              <li ><a className="main-menu" href="#"onMouseEnter={() => this.setState({cursosKey:true})} onMouseOut={() => this.mouseOut()}>Cursos</a>
								{this.cursos()}
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