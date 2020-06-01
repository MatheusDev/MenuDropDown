import React, { Component, Fragment } from 'react';
import './style.css';

class Header extends Component {
  constructor(props){
		super(props)
		this.state = {
       subMenu: null
		}
  }
  hideSubMenu = () => {
    this.setState({subMenu: null
      
    })
  }
  showSubMenu = () => {
    this.setState({subMenu:
    <ul className="sub-menu" onMouseOut={this.hideSubMenu()} style={{display: "grid"}}>
      <li onMouseEnter={()=>this.showSubMenu()} onMouseOut={()=>this.hideSubMenu()}><a href="#">JavaScript</a></li>
      <li onMouseEnter={()=>this.showSubMenu()} onMouseOut={()=>this.hideSubMenu()}><a href="#">React.js</a></li>
      <li  ><a href="#">Node.js</a></li>
      <li  ><a href="#">MySQL</a></li>
    </ul>
    })
  }
  
	render(){
    const subMenu = this.state.subMenu
		return(
			<Fragment>
				<header>
					<nav>
						<ul>
              <li ><a className="main-menu" href="#">Home</a></li>
              <li ><a className="main-menu" href="#">Reportar DMCA</a></li>
              <li ><a className="main-menu" href="#">Contato</a></li>
              <li className="test" onMouseEnter={()=>{this.showSubMenu()}} ><a className="main-menu" href="#">Cursos</a>
                {subMenu}
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