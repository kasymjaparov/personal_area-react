import React from 'react'
import './ResetPassword.css'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../../redux/actions/index'
import { Formik } from 'formik'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import * as yup from 'yup'

export default function ResetPassword(props) {
	const [sent, setSent] = React.useState(false)
	const dispatch = useDispatch()
	const resetSuccess = useSelector((state) => state.data.resetPassword.success)
	const validationResetSchema = yup.object().shape({
		email: yup.string().required('Обязательное поле').email('Введите верный формат email')
	})
	const resetFailed = useSelector((state) => state.data.resetPassword.failed)
	const onSubmit = (data, { resetForm }) => {
		dispatch(resetPassword(data))
		setSent(true)
		resetForm({})
	}
	return (
		<div className='login-body'>
			<Card className='login-container'>
				<Box>
					<h1 className='login-title'>Напишите свою почту</h1>
				</Box>
				<Formik
					initialValues={{
						email: '',
						redirect_url: 'https://www.google.ru/'
					}}
					validateOnBlur
					onSubmit={onSubmit}
					validationSchema={validationResetSchema}
				>
					{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
						<div>
							<Box className='formReset' pt={2} pb={2}>
								<TextField
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									variant='outlined'
									margin='normal'
									name='email'
									fullWidth
									label='Почта'
								/>
								{touched.email && errors.email && (
									<div className='inputError resetError'>{errors.email}</div>
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
				{resetSuccess && <div className='modal_reset'>Проверьте свою почту</div>}
				{resetFailed && <div className='inputError resetError'>Такой почты в базе данных нет</div>}
			</Card>
		</div>
	)
}
