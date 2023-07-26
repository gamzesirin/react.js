import { NumberContext } from './App'
import { useContext } from 'react'

const Calcuate = () => {
	const numbercontext = useContext(NumberContext)
	return (
		<div>
			<div>Sayı = {numbercontext.count}</div>
			<button onClick={() => numbercontext.dispatch('increment')}>Arttır</button>
			<button onClick={() => numbercontext.dispatch('decrement')}>Azalt</button>
			<button onClick={() => numbercontext.dispatch('reset')}>Sıfırla</button>
		</div>
	)
}

export default Calcuate
