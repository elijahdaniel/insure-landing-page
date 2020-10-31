import React from 'react'
import logo from '../images/logo.svg'

function Nav() {
	return (
		<nav>
			<img src={logo} alt='' />
			<section className='nav-links'>
				<a href='#'>How we work</a>
				<a href='#'>Blog</a>
				<a href='#'>Account</a>
				<a href='#' id='view-plans-btn'>
					View plans
				</a>
			</section>
		</nav>
	)
}

export default Nav
