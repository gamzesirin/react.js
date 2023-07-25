import './App.css'

import Course from './Course'
import { useState } from 'react'

function getRandomCourse() {
	const courses = ['angular', 'bootstrap5', 'ccsharp', 'kompleweb']
	const randomIndex = Math.floor(Math.random() * courses.length)
	return courses[randomIndex]
}

function App() {
	const [course, setCourse] = useState([])

	const handleClick = () => {
		setCourse([...course, getRandomCourse()])
	}

	return (
		<div className="App">
			<button onClick={handleClick}>Kurs Ekle</button>
			<div className="courseList">
				{course.map((courseName, index) => {
					return <Course key={index} courseName={courseName} />
				})}
			</div>
		</div>
	)
}

export default App
