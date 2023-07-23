import './App.css'

import Adsoyad from './Components/Adsoyad'
import Yas from './Components/Yas'
import { useState } from 'react'

function App() {
	const [name, setName] = useState('Gamze')
	const [surname, setSurname] = useState('Şirin')
	const [age, setAge] = useState(30)

	const resetForm = () => {
		setName('')
		setSurname('')
		setAge('')
	}

	return (
		<div className="App">
			<h1 className="h1">Form control</h1>
			Adınızı giriniz: <input type="text" name="ad" id="ad" value={name} onChange={(e) => setName(e.target.value)} />
			<br />
			<br></br>
			Soyadınızı giriniz:{' '}
			<input type="text" name="soyad" id="soyad" value={surname} onChange={(e) => setSurname(e.target.value)} />
			<Adsoyad ad={name} soyad={surname} />
			Yaşınızı giriniz: <input type="text" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
			<Yas yas={age} />
			<button className="btn" onClick={resetForm}>
				Reset
			</button>
		</div>
	)
}

export default App
