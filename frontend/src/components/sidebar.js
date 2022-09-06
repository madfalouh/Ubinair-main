import { useEffect } from "react"

import navLogo from '../img/nav.png'

import navLogo1 from '../img/nav1.png'

import navLogo2 from '../img/nav2.png'


import navLogo3 from '../img/nav3.png'


import navLogo4 from '../img/nav4.png'

import navLogo5 from '../img/nav5.png'

export default function Sidebar({el}) {




useEffect ( ()=> {

toggle()
} , []  )


const  toggle = ()=> {
var element = document.getElementById("sidenav");
element.classList.toggle("is-collapsed");
if(element.classList.contains("is-collapsed") ) {
el.current.style.marginLeft="0%"

}else{
el.current.style.marginLeft="9%"

}
console.log(el);
}

return (

	<div id="sidenav" class="sidenav">
		<nav class="sidenav__nav nav">
			<ul class="nav__list">
				<li class="nav__item"  id="main-logo"  >
					<button class="nav__button">
						<span class="nav__icon">
						 <img src={navLogo}   onClick={toggle} />
						</span>
						<span class="nav__label"> Ubinair</span>
					</button>
				</li>
				<li class="nav__item"  id="project-logo">
					<button class="nav__button">
						<span class="nav__icon">
							
						<img src={navLogo1}   onClick={toggle} />

 						</span>	
						<span class="nav__label">Conversation</span>
					</button>
				</li>
				<li class="nav__item"  id="equipe-logo">
					<button class="nav__button">
						<span class="nav__icon">
                        <img src={navLogo2}   onClick={toggle} />
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
						<span class="nav__label">Equipes</span>
					</button>
				</li>
				<li class="nav__item"  id="calendar-logo">
					<button class="nav__button">

						<span class="nav__icon">
	                   <img src={navLogo3}   onClick={toggle} />
						
						</span>
						<span class="nav__label">Calendrier</span>
					</button>
				</li>
				<li class="nav__item" id="slider" >
					<img src={navLogo4}   onClick={toggle} />
				</li>
		
			</ul>
		
		
		</nav>
		
		<div class="sidenav__footer user">
<ul class="nav__list">
						<li class="nav__item">
					<button class="nav__button">

						<span class="nav__icon">
	<p  onclick="calendar()" ><img src={navLogo5}   onClick={toggle} /></p>	<i class="fa fa-home" aria-hidden="true"></i>
							<i class="fa fa-flag" aria-hidden="true"></i>
						</span>
						<span class="nav__label"> Mohamed Reda</span>
					</button>
				</li>
</ul>
		</div>
	</div>
    )
}
