import React from 'react'

function City({ data }) {
	if (data) return (
		<div>
			<h6 className="text-primary border-bottom mt-5">Találat</h6>
			<p>Keresett: <strong>{data['post code']}, {data['country']}, {data['country abbreviation']}</strong></p>

			{data['places'].map((c) => {
				return (
					<div>
						<p>Város: {c['place name']} <br />
							Régió: {c['state']}, {c['state abbreviation']}</p>
					</div>
				)
			})}
		</div>
	)
}

export default City