import { useEffect } from "react"

import navLogo from '../img/nav.png'

import navLogo1 from '../img/nav1.png'

import navLogo2 from '../img/nav2.png'


import navLogo3 from '../img/nav3.png'


import navLogo4 from '../img/nav4.png'

import navLogo5 from '../img/nav5.png'

export default function Sidebar({el , card ,cards , second}) {




useEffect ( ()=> {

toggle()
} , []  )


const  toggle = ()=> {
var element = document.getElementById("sidenav");
element.classList.toggle("is-collapsed");
if(element.classList.contains("is-collapsed") ) {
el.current.style.marginLeft="0%"



const nodes = card.current.childNodes[0]

console.log(card.current.childNodes.length);

if(card.current.childNodes.length===2){
cards.current.style.width="1350px"
nodes.style.width=1300 +'px'
nodes.style.width=1300 +'px'
const bottomSection = nodes.childNodes[2]
if(bottomSection!=undefined) {
bottomSection.style.marginTop = 0 +'px'
const details = (bottomSection.childNodes[0]).childNodes[1]
const progress = (bottomSection.childNodes[1]).childNodes[0]
const deadline = (bottomSection.childNodes[1]).childNodes[1]
//details.style.marginTop =0 +'px'
progress.style.width =542 +'px'
details.style.marginLeft =40 +'px'
deadline.style.marginLeft =30 +'px'
deadline.style.marginTop =-120 +'px'


}
} else{

cards.current.style.width="1320px"
console.log(cards.current.childNodes[0]);



second.current.style.marginLeft="3%"

console.log(cards.current.childNodes[0]);


}

}else{
el.current.style.marginLeft="9%"

cards.current.style.width="1250px"


console.log(card.current.childNodes.length);

const nodes = card.current.childNodes[0]



if(card.current.childNodes.length===2){
cards.current.style.width="1150px"
nodes.style.width=1100 +'px'
const bottomSection = nodes.childNodes[2]
if(bottomSection!=undefined) {
bottomSection.style.marginTop = 10 +'px'
const details = (bottomSection.childNodes[0]).childNodes[1]
const progress = (bottomSection.childNodes[1]).childNodes[0]
const deadline = (bottomSection.childNodes[1]).childNodes[1]
//details.style.marginTop =0 +'px'
progress.style.width =342 +'px'
details.style.marginLeft =40 +'px'
deadline.style.marginLeft =30 +'px'
deadline.style.marginTop =-120 +'px'
second.current.style.marginLeft="-1%"
}
}
else {

cards.current.style.width="1260px"
console.log(cards.current.childNodes[0]);


second.current.style.marginLeft="-2%"

}


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
