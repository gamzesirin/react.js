import './App.css'

import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0)
	const [data, setData] = useState([])
	const getapi = () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => {
				setCount(json.length)
				setData(json)
			})
	}
	return (
		<div className="App">
			<p>item count: {count}</p>
			<button type="button" onClick={getapi}>
				Get API
			</button>
			<ul>
				{data.map((item) => (
					<li key={item.id}>
						{item.id}-{item.title}
					</li>
				))}
			</ul>
		</div>
	)
}

export default App
