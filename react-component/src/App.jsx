import 'bulma/css/bulma.css'
import './App.css'

import Course from './Course'
import angular from './images/angular.jpg'
import bootstrap5 from './images/bootstrap5.png'
import ccsharp from './images/ccsharp.png'
import kompleweb from './images/kompleweb.jpg'

function App() {
	return (
		<div className="App">
			<section className="hero is-danger">
				<div className="hero-body">
					<p className="title" style={{ fontSize: '40px' }}>
						Kurslarım
					</p>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="columns">
						<div className="column">
							<Course
								image={angular}
								title="kurs 1"
								description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sit eligendi rem. Suscipit hic non nemo adipisci impedit dicta a? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium a, molestias reprehenderit sed odio soluta dolorem tenetur labore sit suscipit?"
							/>
						</div>
						<div className="column">
							<Course
								image={bootstrap5}
								title="kurs 2"
								description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sit eligendi rem. Suscipit hic non nemo adipisci impedit dicta a? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium a, molestias reprehenderit sed odio soluta dolorem tenetur labore sit suscipit?"
							/>
						</div>
						<div className="column">
							<Course
								image={ccsharp}
								title="kurs 3"
								description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sit eligendi rem. Suscipit hic non nemo adipisci impedit dicta a? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium a, molestias reprehenderit sed odio soluta dolorem tenetur labore sit suscipit?"
							/>
						</div>
						<div className="column">
							<Course
								image={kompleweb}
								title="kurs 4"
								description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sit eligendi rem. Suscipit hic non nemo adipisci impedit dicta a? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium a, molestias reprehenderit sed odio soluta dolorem tenetur labore sit suscipit?"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default App
