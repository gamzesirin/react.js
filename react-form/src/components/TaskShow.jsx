import TaskCreate from './TaskCreate'
import { useState } from 'react'

const TaskShow = ({ task, onDelete, onUpdate }) => {
	const [edit, setEdit] = useState(false)
	const handleDeleteClick = () => {
		onDelete(task.id)
	}
	const handleEditClick = () => {
		setEdit(true)
	}
	const handleSubmit = (title, taskDesc, id) => {
		setEdit(false)
		onUpdate(title, taskDesc, id)
	}

	console.log(task)
	return (
		<div className="task-show">
			{edit ? (
				<TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
			) : (
				<div>
					<h3 className="task-title">Göreviniz</h3>
					<p>{task.title}</p>
					<h3 className="task-title">Görev Açıklaması</h3>
					<p>{task.taskDesc}</p>
					<button className="task-delete" onClick={handleDeleteClick}>
						Sil
					</button>
					<button className="task-edit" onClick={handleEditClick}>
						Düzenle
					</button>
				</div>
			)}
		</div>
	)
}

export default TaskShow
