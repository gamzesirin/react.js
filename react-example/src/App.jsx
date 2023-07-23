import './App.css'

function App() {
	const countries = [
		{
			name: 'France',
			capital: 'Paris',
			region: 'Europe',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png'
		},
		{
			name: 'Germany',
			capital: 'Berlin',
			region: 'Europe',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
		},
		{
			name: 'Italy',
			capital: 'Rome',
			region: 'Europe',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png'
		},
		{
			name: 'Spain',
			capital: 'Madrid',
			region: 'Europe',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png'
		},
		{
			name: 'Portugal',
			capital: 'Lisbon',
			region: 'Europe',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png'
		}
	]
	console.log(countries)
	return (
		<>
			{countries.map((country, index) => {
				return (
					<>
						<div className="text" key={index}>
							<h3>{country.name}</h3>
							<h4>{country.capital}</h4>
							<h5>{country.region}</h5>
						</div>
						<img className="bayrak" src={country.img} alt={country.name} />
					</>
				)
			})}
		</>
	)
}

export default App
