import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import { newPassword } from '../../redux/actions/index'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import * as yup from 'yup'

export default function ResetPassword() {
	const dispatch = useDispatch()
	const validationNewPAsswordSchema = yup.object().shape({
		password: yup.string().required('Обязательное поле').min(9, 'Должно быть больше 9 символов')
	})
	const onSubmit = (data, { resetForm }) => {
		dispatch(newPassword(data))	
		resetForm({})
	}
	return (
		<div className='login-body'>
			<Card className='login-container'>
				<Box>
					<h1 className='login-title'>Пароль</h1>
				</Box>

				<Formik
					initialValues={{
						password: '',
						uidb64: window.localStorage.getItem('resetPasswordUidb'),
						token: window.localStorage.getItem('resetPasswordToken')
					}}
					validateOnBlur
					onSubmit={onSubmit}
					validationSchema={validationNewPAsswordSchema}
				>
					{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
						<div>
							<Box pt={2} pb={2}>
								<TextField
									value={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
									variant='outlined'
									margin='normal'
									name='password'
									fullWidth
									label='Новый пароль'
								/>
								{touched.password && errors.password && (
									<div className='inputError resetError'>{errors.password}</div>
								)}
								<Button
									disabled={!isValid || !dirty}
									onClick={handleSubmit}
									variant='contained'
									color='primary'
									type='submit'
								>
									Отправить
								</Button>
							</Box>
						</div>
					)}
				</Formik>
			</Card>
		</div>
	)
}
