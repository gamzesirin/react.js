const Result = ({ correctCount, totalCount, onRestart }) => {
	return (
		<div className="result">
			<h2>Sonuçlar</h2>
			<p>Doğru: {correctCount}</p>
			<p>Toplam: {totalCount}</p>
			<button onClick={onRestart}>Yeniden Başlat</button>
		</div>
	)
}

export default Result
