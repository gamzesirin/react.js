import './App.css'

import { useEffect, useRef, useState } from 'react'

const data = [
	{ id: 1, name: 'Ahmet' },
	{ id: 2, name: 'Mehmet' },
	{ id: 3, name: 'Ayşe' },
	{ id: 4, name: 'Fatma' },
	{ id: 5, name: 'Ali' },
	{ id: 6, name: 'Veli' },
	{ id: 7, name: 'Zeynep' },
	{ id: 8, name: 'Hasan' },
	{ id: 9, name: 'Hüseyin' },
	{ id: 10, name: 'Merve' }
]
function App() {
	const [search, setSearch] = useState('')
	const [result, setResult] = useState(false)
	const isTyping = search.replace(/\s+/, '').length > 0
	const searchRef = useRef()
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])
	const handleClickOutside = (e) => {
		if (searchRef.current && !searchRef.current.contains(e.target)) {
			setSearch('')
		}
	}

	useEffect(() => {
		if (isTyping) {
			const filteredResult = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
			setResult(filteredResult.length > 0 ? filteredResult : false)
		} else {
			setResult(false)
		}
	}, [search])

	return (
		<div className="search" value={search} ref={searchRef}>
			<input
				type="text"
				className={isTyping ? 'typing' : null}
				placeholder="Search..."
				onChange={(e) => setSearch(e.target.value)}
			/>
			{result && isTyping && (
				<div className="search-result">
					{result &&
						result.map((item) => (
							<div key={item.id} className="search-result-item">
								<h1>{item.name}</h1>
							</div>
						))}
					{result === false && isTyping && (
						<div className="search-result">
							<div className="result-not-found">{search} ile ilgili bir şey bulunamadı</div>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default App
