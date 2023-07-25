import './Course.css'

import angular from './images/angular.jpg'
import bootstrap5 from './images/bootstrap5.png'
import ccsharp from './images/ccsharp.png'
import kompleweb from './images/kompleweb.jpg'

const courseMap = {
	angular: angular,
	bootstrap5: bootstrap5,
	ccsharp: ccsharp,
	kompleweb: kompleweb
}

const Course = (courseName) => {
	console.log(courseName)
	console.log(courseMap[courseName.courseName])
	return (
		<div className="courseDiv">
			<img className="course" src={courseMap[courseName.courseName]} alt="" />
		</div>
	)
}

export default Course
