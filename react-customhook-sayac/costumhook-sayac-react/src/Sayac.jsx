import { useState } from 'react'

const Sayac = () => {
	const [sayac, setSayac] = useState(0)
	return (
		<div>
			<h1>Sayaç: {sayac}</h1>
			<button onClick={() => setSayac(sayac + 1)}>Arttır</button>
			<button onClick={() => setSayac(sayac - 1)}>Azalt</button>
			<button onClick={() => setSayac(0)}>Sıfırla</button>
		</div>
	)
}

export default Sayac
