import '../App.css'

import { useEffect, useState } from 'react'

import Result from './Result'
import Timer from './Timer'
import WordList from './WordList'

const wordList = [
	'kelime1',
	'kelime2',
	'kelime3' // Buraya daha fazla kelime ekleyin
]

function App() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [inputValue, setInputValue] = useState('')
	const [correctCount, setCorrectCount] = useState(0)
	const [gameStarted, setGameStarted] = useState(false)

	useEffect(() => {
		if (gameStarted) {
			document.getElementById('input').focus()
		}
	}, [gameStarted])

	const handleInputChange = (e) => {
		const inputWord = e.target.value.trim()
		setInputValue(inputWord)

		if (inputWord === wordList[currentIndex]) {
			setCorrectCount(correctCount + 1)
			setCurrentIndex(currentIndex + 1)
			setInputValue('')
		}
	}

	const handleTimerEnd = () => {
		setGameStarted(false)
	}

	const handleRestart = () => {
		setCurrentIndex(0)
		setInputValue('')
		setCorrectCount(0)
		setGameStarted(true)
	}

	return (
		<div className="app">
			<h1>Hız Testi</h1>
			{gameStarted ? (
				<>
					<Timer onTimerEnd={handleTimerEnd} />
					<WordList words={wordList} currentIndex={currentIndex} onWordInput={handleInputChange} />
					<input type="text" id="input" value={inputValue} onChange={handleInputChange} />
				</>
			) : (
				<Result correctCount={correctCount} totalCount={wordList.length} onRestart={handleRestart} />
			)}
		</div>
	)
}

export default App
