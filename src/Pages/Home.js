import React from 'react'

function Home() {
	return (
		<div className='text-center text-white'>
			<h2>Üdözöllek, kérlek válassz projektet!</h2>
			<a href="/todo" className="btn btn-primary px-4 m-3">Todo</a>
			<a href="/city" className="btn btn-primary px-4  m-3">City</a>
		</div>
	)
}

export default Home