import React, { useState } from 'react'
import './Todos.css'
import Fab from '@material-ui/core/Fab'
import Input from '@material-ui/core/Input'
import AddIcon from '@material-ui/icons/Add'
import shortid from 'shortid'

function Docs() {
	const [text, setText] = React.useState('')
	const [todos, setTodos] = useLocalStorage('todoArrLkNorma', [])
	function useLocalStorage(key, initialValue) {
		const [storedValue, setStoredValue] = useState(() => {
			try {
				const item = window.localStorage.getItem(key)
				return item ? JSON.parse(item) : initialValue
			} catch (error) {
				return initialValue
			}
		})
		const setValue = (value) => {
			try {
				const valueToStore = value instanceof Function ? value(storedValue) : value
				setStoredValue(valueToStore)
				window.localStorage.setItem(key, JSON.stringify(valueToStore))
			} catch (error) {}
		}
		return [storedValue, setValue]
	}
	const handleClick = () => {
		setTodos([...todos, { id: shortid.generate(), text: text }])
		setText('')
	}
	const deleteTodo = (e) => {
		let newTodos = [...todos]
		setTodos(newTodos.filter((todo) => todo.id !== e))
	}
	return (
		<div className='todos'>
			<h1>Задачи</h1>
			<form>
				<Input
					value={text}
					onChange={(e) => setText(e.target.value)}
					className='todos_input'
					placeholder='Напишите задачу...'
				/>
				<Fab
					onClick={handleClick}
					style={{ outline: 'none', width: 40, height: 40 }}
					color='primary'
					aria-label='add'
				>
					<AddIcon />
				</Fab>
			</form>
			{todos.map((item) => (
				<div key={item.id} className='todo'>
					<div className='todo_text'>{item.text}</div>
					<div onClick={(e) => deleteTodo(item.id)} className='fas fa-trash'></div>
				</div>
			))}
		</div>
	)
}

export default Docs
