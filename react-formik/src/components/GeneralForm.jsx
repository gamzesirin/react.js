import { basicSchema } from '../schemas/index'
import { useFormik } from 'formik'

const GeneralForm = () => {
	const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: '',
			age: 0,
			password: '',
			confirmpassword: ''
		},
		validationSchema: basicSchema, // Use the imported basicSchema here
		onSubmit: async (values, actions) => {
			console.log(values)
			console.log(actions)
			actions.resetForm()
			await new Promise((r) => setTimeout(r, 1000))
		}
	})

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="input-div">
					<label>Email</label>
					<input
						type="email"
						onChange={handleChange}
						value={values.email}
						id="email"
						placeholder="Emailinizi giriniz"
						className={errors.email ? 'input-error' : ''}
					/>
					{errors.email && <div className="error">{errors.email}</div>}
				</div>
				<div className="input-div">
					<label>Yaş</label>
					<input
						type="number"
						onChange={handleChange}
						value={values.age}
						id="age"
						placeholder="Yaşınızı giriniz"
						className={errors.age ? 'input-error' : ''}
					/>
					{errors.age && <div className="error">{errors.age}</div>}
				</div>
				<div className="input-div">
					<label>Şifre</label>
					<input
						type="passwword"
						onChange={handleChange}
						value={values.password}
						id="password"
						placeholder="Şifrenizi giriniz"
						className={errors.password ? 'input-error' : ''}
					/>
					{errors.password && <div className="error">{errors.password}</div>}
				</div>
				<div className="input-div">
					<label>Şifre Tekrar</label>
					<input
						type="password"
						onChange={handleChange}
						value={values.email}
						id="confirmpassword"
						placeholder="Şifrenizi tekrar giriniz"
						className={errors.password ? 'input-error' : ''}
					/>
					{errors.password && <div className="error">{errors.password}</div>}
				</div>
				<button type="submit" disabled={isSubmitting}>
					Kaydet
				</button>
			</form>
		</div>
	)
}

export default GeneralForm
