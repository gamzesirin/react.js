import './Card.css'

import { useState } from 'react'

function Card({ title, desc }) {
	const [detail, setDetail] = useState(false)
	const detailText = detail ? 'Bu yukarıda gördüğünüz paragraf içeriğinin detaylı açıklamasıdır. ' : ''
	const [count, setCount] = useState(0)
	return (
		<div className="Card">
			<h4>{title}</h4>
			<p>{desc}</p>
			<p>{detailText}</p>
			<button
				onClick={() => {
					setDetail(true)
				}}
			>
				Detay Göster
			</button>
			<br></br>
			<br></br>
			<button
				onClick={() => {
					setCount(count + 1)
				}}
			>
				Counter
			</button>
			<p>{count}</p>
			{count == 10 ? <p> counter şuanda {count} </p> : ''}
		</div>
	)
}

export default Card
