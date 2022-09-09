import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoItem from '../Todo/TodoItem';

const LS_TODOS = 'todos.app';

function Todo() {

	const [todos, setTodos] = useState([]);

	useEffect(() => {
		var storage = JSON.parse(localStorage.getItem(LS_TODOS));
		if (storage && storage.length > 0) setTodos(storage)
	}, [])

	useEffect(() => {
		localStorage.setItem(LS_TODOS, JSON.stringify(todos));
	}, [todos])

	const handleAdd = (e) => {
		if (e.key !== 'Enter' || e.target.value === '') return;

		const newtodo = {
			id: uuidv4(),
			name: e.target.value
		}
		setTodos((prevData) => [...prevData, newtodo])
		e.target.value = null
	}

	const removeItem = (id) => {
		const deleting = todos.filter(item => item.id !== id);
		setTodos(deleting);
	}

	return (
		<div style={{ width: 500 }} className="bg-light shadow p-4 rounded text-primary">

			<h6>New</h6>
			<input onKeyPress={handleAdd} type="text" placeholder="text + enter" className="shadow form-control mb-4" />

			<h6>Todos</h6>
			<div className="list-group shadow">
				{todos.map(todo => <TodoItem key={todo.id} data={todo} remove={removeItem} />)}
			</div>

		</div>
	)
}

export default Todo