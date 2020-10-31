import React from 'react'
import headerImage from '../images/image-intro-desktop.jpg'
import decalLeft from '../images/bg-pattern-intro-left-desktop.svg'
import decalRight from '../images/bg-pattern-intro-right-desktop.svg'

function Header() {
	return (
		<header>
			<img
				src={decalRight}
				className='decal-right'
				alt='decal right of display'
			/>
			<div className='header-left'>
				<div className='line'></div>
				<h1>
					Humanizing <br /> your insurance.
				</h1>
				<p>
					Get your life insurance coverage easier and faster. We blend our
					expertise and technology to help you find the plan that’s right for
					you. Ensure you and your loved ones are protected.
				</p>
				<button>View Plans</button>
			</div>
			<div className='header-right'>
				<img
					src={headerImage}
					className='headerImage'
					alt='family holding hands'
				/>
			</div>
			<img src={decalLeft} className='decal-left' alt='decal left of display' />
		</header>
	)
}

export default Header
