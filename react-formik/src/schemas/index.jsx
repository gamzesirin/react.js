import * as yup from 'yup'

// Define the passwordRules regular expression or string pattern here
const passwordRules = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const basicSchema = yup.object().shape({
	email: yup.string().email('Geçerli email giriniz.').required('Email alanı zorunludur.'),
	age: yup.number().positive('Lütfen pozitif bir yaş giriniz.').required('Yaş alanı zorunludur.'),
	password: yup
		.string()
		.min(8, 'Minimum 8 karakter giriniz.')
		.matches(passwordRules, 'En az bir büyük harf, bir sayı ve bir işaret içermelidir.')
		.required('Şifre alanı zorunludur.'),
	confirmpassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Şifreler eşleşmiyor.')
		.required('Tekrar şifre girmek zorunludur.')
})
