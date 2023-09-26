import { useEffect, useState } from 'react'

const Timer = ({ onTimerEnd }) => {
	const [seconds, setSeconds] = useState(60)

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds - 1)
		}, 1000)

		if (seconds === 0) {
			clearInterval(interval)
			onTimerEnd()
		}

		return () => clearInterval(interval)
	}, [seconds, onTimerEnd])

	return (
		<div className="timer">
			<span>{seconds} saniye</span>
		</div>
	)
}

export default Timer
