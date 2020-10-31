import React from 'react'
import snappy from '../images/icon-snappy-process.svg'
import affordable from '../images/icon-affordable-prices.svg'
import peopleFirst from '../images/icon-people-first.svg'

function Benefits() {
	return (
		<div className='benefits'>
			<div className='line'></div>
			<h1>We're different</h1>
			<div className='benefit-items'>
				<section className='snappy-process card'>
					<img src={snappy} alt='snappy process icon' />
					<h3>Snappy Process</h3>
					<p>
						Our application process can be completed in minutes, not hours.
						Don't get stuck filling in tedious forms.
					</p>
				</section>
				<section className='affordable-prices card'>
					<img src={affordable} alt='affordable prices icon' />
					<h3>Affordable Prices</h3>
					<p>
						We don't want you worrying about high monthly costs. Our prices mau
						be low, but we still offer the best coverage possible.
					</p>
				</section>
				<section className='people-first card'>
					<img src={peopleFirst} alt='people first icon' />
					<h3>People First</h3>
					<p>
						Our plans aren't full of conditions and clauses to prevent layouts.
						We make sure you're covered when you need it.
					</p>
				</section>
			</div>
			<div className='more-information'>
				<section className='mi-left'>
					<h2>
						Find out more <br /> about how we work
					</h2>
				</section>
				<section className='mi-right'>
					<button>How we work</button>
				</section>
			</div>
		</div>
	)
}

export default Benefits
