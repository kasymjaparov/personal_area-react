import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Fab } from '@material-ui/core'
import { FormHelperText } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { auth } from '../../redux/actions/index'
import NumberFormat from 'react-number-format'
import shortid from 'shortid'

export default function Registration() {
	const dispatch = useDispatch()
	const authLoading = useSelector((state) => state.data.auth.loading)
	const authSuccess = useSelector((state) => state.data.auth.success)
	const authError = useSelector((state) => state.data.auth.failed)
	const validationSchema = yup.object().shape({
		first_name: yup.string().required('Обязательное поле').min(2, 'Минимально 2 букв'),
		last_name: yup.string().required('Обязательное поле').min(2, 'Минимально 2 букв'),
		email: yup.string().required('Обязательное поле').email('Введите верный формат email'),
		password: yup.string().required('Обязательное поле').min(9, 'Минимальное количество букв 9'),
		password2: yup
			.string()
			.required('Обязательное поле')
			.min(9, 'Минимальное количество букв 9')
			.oneOf([yup.ref('password')], 'Пароли не совпадают'),
		phone: yup.string().required('Обязательное поле').min(8, 'Заполните форму корректно'),
		birthday: yup.string().required('Заполните поле').min(8, 'Заполните форму корректно'),
		address: yup.string().required('Обязательное поле'),
		city: yup.string().required('Обязательное поле')
	})
	return (
		<React.Fragment>
			<Formik
				initialValues={{
					first_name: '',
					last_name: '',
					email: '',
					username: `${shortid.generate()}_${shortid.generate()}`,
					city: '',
					address: '',
					phone: '996',
					birthday: '',
					country: 'Kyrgyzstan',
					password: '',
					password2: '',
					gender: 'Male',
					state: 'KG',
					avatar: null
				}}
				validateOnBlur
				onSubmit={(values) => {
					dispatch(auth(values))
				}}
				validationSchema={validationSchema}
			>
				{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
					<form>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									value={values.first_name}
									onChange={handleChange}
									onBlur={handleBlur}
									name='first_name'
									fullWidth
									label='Имя'
									autoComplete='given-name'
								/>
								{touched.first_name && errors.first_name && (
									<div className='inputError'>{errors.first_name}</div>
								)}
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									value={values.last_name}
									onChange={handleChange}
									onBlur={handleBlur}
									name='last_name'
									fullWidth
									label='Фамилия'
									autoComplete='given-name'
								/>
								{touched.last_name && errors.last_name && (
									<div className='inputError'>{errors.last_name}</div>
								)}
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									name='email'
									label='Почта'
									fullWidth
								/>
								{touched.email && errors.email && <div className='inputError'>{errors.email}</div>}
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									value={values.city}
									onChange={handleChange}
									onBlur={handleBlur}
									name='city'
									label='Город'
									fullWidth
								/>
								{touched.city && errors.city && <div className='inputError'>{errors.city}</div>}
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									value={values.address}
									onChange={handleChange}
									onBlur={handleBlur}
									name='address'
									fullWidth
									label='Улица'
									autoComplete='given-name'
								/>
								{touched.address && errors.address && (
									<div className='inputError'>{errors.address}</div>
								)}
							</Grid>
							<Grid item xs={12} sm={6}>
								<FormHelperText id='filled-weight-helper-text'>Номер*</FormHelperText>
								<NumberFormat
									name='phone'
									type='tel'
									value={values.phone}
									onChange={handleChange}
									onBlur={handleBlur}
									className='phoneInput'
									format='+### ### ### ###'
									placeholder='+996 ___ ___ ___'
									mask='_'
								/>
								{touched.phone && errors.phone && <div className='inputError'>{errors.phone}</div>}
							</Grid>
							<Grid item xs={12} sm={6}>
								<FormHelperText id='filled-weight-helper-text'>Дата рождения*</FormHelperText>
								<TextField
									id='outlined-basic'
									required
									value={values.birthday}
									onChange={handleChange}
									onBlur={handleBlur}
									type='date'
									pattern='(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])/(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])/(?:30))|(?:(?:0\[13578\]|1\[02\])-31))'
									name='birthday'
									fullWidth
								/>
								{touched.birthday && errors.birthday && (
									<div className='inputError'>{errors.birthday}</div>
								)}
							</Grid>

							<Grid item xs={12} sm={6}>
								<TextField
									required
									value={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
									name='password'
									fullWidth
									label='Пароль'
									type='password'
									autoComplete='given-name'
									onKeyDown={(e) => {
										if (e.key === 'Enter') {
											handleSubmit()
										}
									}}
								/>
								{touched.password && errors.password && (
									<div className='inputError'>{errors.password}</div>
								)}
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									value={values.password2}
									onChange={handleChange}
									onBlur={handleBlur}
									name='password2'
									type='password'
									fullWidth
									label='Подтвердите пароль'
									autoComplete='given-name'
									onKeyDown={(e) => {
										if (e.key === 'Enter') {
											handleSubmit()
										}
									}}
								/>
								{touched.password2 && errors.password2 && (
									<div className='inputError'>{errors.password2}</div>
								)}
							</Grid>
						</Grid>
						<br />
						<Box pb={2}>
							<Button
								disabled={!isValid || !dirty}
								fullWidth
								onClick={handleSubmit}
								variant='contained'
								color='primary'
								type='submit'
							>
								{authLoading ? 'Загрузка...' : 'Зарегистрироваться'}
							</Button>
						</Box>
					</form>
				)}
			</Formik>

			{authSuccess && (
				<div className='success-auth'>
					Вы успешно зарегистрировались, перейдите на почту и подтвердите аккаунт
				</div>
			)}
			{authSuccess && (
				<NavLink className='success-link' to='/login'>
					Войти после подтверждения
				</NavLink>
			)}
			{authError && (
				<div className='success-error'>
					Пользователь под данной почтой или номером телефона уже был зарегистрирован
				</div>
			)}
			{!authSuccess && (
				<NavLink className='login-link' to='/login'>
					Уже есть аккаунт?
				</NavLink>
			)}
		</React.Fragment>
	)
}
