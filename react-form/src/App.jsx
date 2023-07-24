import './App.css'

import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import { useState } from 'react'

function App() {
	const [tasks, setTasks] = useState([])
	const createTask = (title, taskDesc) => {
		const createdTask = [
			...tasks,
			{
				id: Math.round(Math.random() * 900000),
				title: title,
				taskDesc: taskDesc
			}
		]
		setTasks(createdTask)
	}
	const deletETaskById = (id) => {
		const filteredTasks = tasks.filter((task) => task.id !== id)
		setTasks(filteredTasks)
	}
	const EditTaskById = (title, taskDesc, id) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				return {
					...task,
					title: title,
					taskDesc: taskDesc
				}
			}
			return task
		})
		setTasks(updatedTasks)
	}

	return (
		<div className="App">
			<TaskCreate onCreate={createTask} />
			<h1>Görevler</h1>
			<TaskList tasks={tasks} onDelete={deletETaskById} onUpdate={EditTaskById} />
		</div>
	)
}

export default App
