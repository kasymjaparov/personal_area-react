import point from '../../point.js'
import constants from '../constants'
import axios from 'axios'
import { createNotification } from 'react-redux-notify'
import { updateProfileErrorNotification, updateProfileSuccessNotification } from './notification'
import NotificationManager from 'react-notifications/lib/NotificationManager'

const errorHandler = (error) => (error.response ? error.response.data : error.message)

export const auth = (data) => (dispatch) => {
	const url = `${point}/api/auth/users/registration/`
	dispatch({ type: constants.AUTH_LOADING })
	axios
		.post(url, data, { headers: { 'Content-Type': 'application/json' } })
		.then(({ data }) => {
			if (data.errors) dispatch({ type: constants.AUTH_FAILED })
			else dispatch({ type: constants.AUTH_SUCCESS })
		})
		.catch((err) => {
			dispatch({ type: constants.AUTH_FAILED })
		})
}

export const login = (data) => (dispatch) => {
	const url = `${point}/api/auth/users/login/`
	dispatch({ type: constants.LOGIN_LOADING })
	axios
		.post(url, data)
		.then(({ data }) => {
			window.localStorage.setItem('token', data.token)
			typeof data.token == 'undefined'
				? dispatch({ type: constants.LOGIN_FAILED })
				: dispatch({ type: constants.LOGIN_SUCCESS, payload: data.token })
		})
		.catch((err) => {
			dispatch({ type: constants.LOGIN_FAILED })
		})
}

export const getData = (token) => (dispatch) => {
	const url = `${point}/api/auth/users/me/?`
	dispatch({ type: constants.GET_DATA_LOADING })
	axios
		.get(url, {
			headers: {
				Authorization: `Token ${token}`
			}
		})
		.then(({ data }) => {
			dispatch({ type: constants.GET_DATA_SUCCESS, payload: data })
		})
		.catch((error) => {
			dispatch({ type: constants.GET_DATA_FAILED, payload: errorHandler(error) })
		})
}

export const logout = () => (dispatch) => {
	dispatch({ type: constants.LOGOUT })
	window.localStorage.removeItem('token')
}

export const resetPassword = (data) => (dispatch) => {
	const url = `${point}/api/auth/users/request-password-reset-email/`
	dispatch({ type: constants.RESET_LOADING })
	axios
		.post(url, data)
		.then(({ data }) => {
			if (data[0].token || data[0].uidb64) {
				dispatch({ type: constants.RESET_SUCCESS })
				window.localStorage.setItem('resetPasswordToken', data[0].token)
				window.localStorage.setItem('resetPasswordUidb', data[0].uidb64)
			} else {
				dispatch({ type: constants.RESET_FAILED })
			}
		})
		.catch((err) => {
			dispatch({ type: constants.RESET_FAILED })
		})
}

export const newPassword = (data) => (dispatch) => {
	const url = `${point}/api/auth/users/password-reset-complete/`
	dispatch({ type: constants.NEWPASSWORD_LOADING })
	axios
		.patch(url, data)
		.then(({ data }) => {
			dispatch({ type: constants.NEWPASSWORD_SUCCESS })
			document.location.href = '/login'
		})
		.catch((err) => {
			dispatch({ type: constants.NEWPASSWORD_FAILED })
		})
}

export const updateProfile = (data) => (dispatch) => {
	dispatch({ type: constants.UPDATE_PROFILE_LOADING })
	const token = localStorage.getItem('token')
	const url = `${point}/api/auth/users/update/`
	axios
		.post(url, data, { headers: { Authorization: `Token ${token}` } })
		.then((result) => {
			dispatch({ type: constants.UPDATE_PROFILE_SUCCESS, payload: result.data })
			dispatch(createNotification(updateProfileSuccessNotification))
		})
		.then((data) => {
			setTimeout(() => {
				dispatch({ type: constants.UPDATE_PROFILE_RESET })
			}, 1000)
		})
		.catch((error) => {
			dispatch({ type: constants.UPDATE_PROFILE_FAILED, error: error })
			dispatch(createNotification(updateProfileErrorNotification))
		})
}
