import React from 'react'
import logo from '../images/logo.svg'

function Footer() {
	return (
		<div className='footer-container'>
			<footer>
				<div className='footer-top'>
					<section className='footer-top-left'>
						<img src={logo} alt='company logo' />
					</section>
					<section className='footer-top-right'>
						<img src='https://img.icons8.com/ios-glyphs/30/000000/facebook.png' />
						<img src='https://img.icons8.com/android/30/000000/twitter.png' />
						<img src='https://img.icons8.com/fluent-systems-filled/30/000000/pinterest.png' />
						<img src='https://img.icons8.com/fluent-systems-regular/30/000000/instagram-new.png' />
					</section>
				</div>
				<div className='footer-bottom'>
					<section className='footer-card'>
						<b>Our Company</b>
						<a href='#'>How we work</a>
						<a href='#'>Why Insure?</a>
						<a href='#'>View plans</a>
						<a href='#'>Reviews</a>
					</section>
					<section className='footer-card'>
						<b>Help me</b>
						<a href='#'>FAQ</a>
						<a href='#'>Teams of use</a>
						<a href='#'>Privacy Policy</a>
						<a href='#'>Cookies</a>
					</section>
					<section className='footer-card'>
						<b>Contact</b>
						<a href='#'>Sales</a>
						<a href='#'>Support</a>
						<a href='#'>Live chat</a>
					</section>
					<section className='footer-card'>
						<b>Others</b>
						<a href='#'>Careers</a>
						<a href='#'>Press</a>
						<a href='#'>Licenses</a>
					</section>
					<section className='footer-card'></section>
				</div>
			</footer>
		</div>
	)
}

export default Footer
