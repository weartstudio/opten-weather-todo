import React from 'react'

function TodoItem({ data, remove }) {
	return (
		<div onClick={() => remove(data.id)} className="list-group-item list-group-item-action">
			<div className="row align-items-center">
				<div className="col-auto"><i className="fa-solid fa-check"></i></div>
				<div className="col">{data.name}</div>
			</div>
		</div>
	)
}

export default TodoItem