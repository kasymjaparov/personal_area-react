import React from 'react'
import { login } from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import TextField from '@material-ui/core/TextField'
import './login.css'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { NavLink } from 'react-router-dom'

const Login = (props) => {
	const dispatch = useDispatch()
	const error = useSelector((state) => state.data.login.failed)
	const loading = useSelector((state) => state.data.login.loading)
	const validationSchema = yup.object().shape({
		email: yup.string().required('Обязательное поле').email('Введите верный формат email'),
		password: yup.string().required('Обязательное поле').min(9, 'Минимальное количество букв 9')
		
	})
	const onSubmit = (data, {resetForm }) => {
		dispatch(login(data))
		resetForm({})
	}
	return (
		<div className="login-body">
			<Card className="login-container">
				<Box>
					<h1 className="login-title">Войти</h1>
				</Box>
				<Formik
					initialValues={{
						email: '',
						password: ''
					}}
					validateOnBlur
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
						<form>
							<Box pt={2} pb={2}>
								<TextField
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									variant="outlined"
									margin="normal"
									disabled={loading}
									name="email"
									fullWidth
									label="Почта"
									onKeyDown={(e) => {
										if (e.key === 'Enter') {
											handleSubmit()
										}
									}}
								/>
								{touched.email && errors.email && <div className="inputError">{errors.email}</div>}
								<TextField
									value={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
									name="password"
									variant="outlined"
									margin="normal"
									fullWidth
									label="Пароль"
									autoComplete="on"
									disabled={loading}
									type="password"
									onKeyDown={(e) => {
										if (e.key === 'Enter') {
											handleSubmit()
										}
									}}
								/>
								{touched.password && errors.password && (
									<div className="inputError">{errors.password}</div>
								)}
							</Box>
							<Box pb={2}>
								<Button
									disabled={!isValid || !dirty}
									onClick={handleSubmit}
									variant="contained"
									color="primary"
									type="submit"
								>
									{loading ? 'Загрузка...' : 'Войти'}
								</Button>
								<div className="auth-link">
									<NavLink to="/auth">Хотите зарегистрироваться?</NavLink>
								</div>
								<div className="auth-link">
									<NavLink to="/reset">Забыли пароль?</NavLink>
								</div>
								{error && <div className="login_error">Неправильный логин или пароль</div>}
							</Box>
						</form>
					)}
				</Formik>
			</Card>
		</div>
	)
}
export default Login
