const Course = ({ image, title, description }) => {
	//const { title, description } = props
	return (
		<div>
			<img src={image} alt=""></img>
			<h1 style={{ fontSize: '30px' }}>{title}</h1>
			<p>{description}</p>
		</div>
	)
}

export default Course
