import useInput from './useInput'

const PersonalInfo = () => {
	//const [name, setName] = useState('')
	//const [surname, setSurname] = useState('')
	//const [age, setAge] = useState(0)
	const [name, bindName, resetName] = useInput('')
	const [surname, bindSurname, resetSurname] = useInput('')
	const [age, bindAge, resetAge] = useInput(0)

	const submitForm = (e) => {
		e.preventDefault()
		alert(`Merhaba ${name} ${surname} yasşınız ${age}`)
		resetSurname()
		resetName()
		resetAge()
	}

	return (
		<div>
			<form onSubmit={submitForm}>
				<label>Ad</label>
				<input type="text" {...bindName} />
				<label>Soyad</label>
				<input type="text" {...bindSurname} />
				<label>Yaş</label>
				<input type="number" {...bindAge} />
				<button>Kaydet</button>
			</form>
		</div>
	)
}

export default PersonalInfo
