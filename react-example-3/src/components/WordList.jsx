const WordList = ({ words, currentIndex, onWordInput }) => {
	const wordElements = words.map((word, index) => (
		<span key={index} className={index === currentIndex ? 'active' : ''}>
			{word}
		</span>
	))

	return <div className="word-list">{wordElements}</div>
}

export default WordList
