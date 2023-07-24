import { useState } from 'react'

const TaskCreate = ({ onCreate, task, taskformUpdate, onUpdate }) => {
	const [title, setTitle] = useState(task ? task.title : '')
	const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '')
	const handleChange = (e) => {
		setTitle(e.target.value)
	}
	const handleTaskChange = (e) => {
		setTaskDesc(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (taskformUpdate) {
			onUpdate(title, taskDesc, task.id)
		} else {
			onCreate(title, taskDesc)
		}

		setTitle('')
		setTaskDesc('')
	}
	return (
		<div>
			{taskformUpdate ? (
				<div className="task-update">
					<h3>Lütfen Taskı Düzenleyiniz!</h3>
					<form>
						<label className="task-label">Başlığı Düzenleyiniz</label>
						<input value={title} onChange={handleChange} className="task-input" />
						<label className="task-label">Taskı Düzenleyiniz</label>
						<textarea value={taskDesc} onChange={handleTaskChange} rows="5" className="task-input" />
						<button className="btn2" onClick={handleSubmit}>
							Düzenle
						</button>
					</form>
				</div>
			) : (
				<div className="task-create">
					<h3>Lütfen task ekleyiniz!</h3>
					<form>
						<label className="task-label">Başlık</label>
						<input value={title} onChange={handleChange} className="task-input" />
						<label className="task-label">Task Giriniz</label>
						<textarea value={taskDesc} onChange={handleTaskChange} rows="5" className="task-input" />
						<button className="btn" onClick={handleSubmit}>
							Oluştur
						</button>
					</form>
				</div>
			)}
		</div>
	)
}

export default TaskCreate
