import React from 'react'

function Home() {
	return (
		<div className='text-center'>
			<h2>Üdözöllek kérlek válassz projektet</h2>
			<a href="/todo" className="btn btn-primary px-4 m-3">Todo</a>
			<a href="/weather" className="btn btn-primary px-4  m-3">Weather</a>
		</div>
	)
}

export default Home