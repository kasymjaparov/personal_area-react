import constants from '../constants'

const initialState = {
	userData: {},
	get: {
		success: false,
		loading: false,
		failed: false
	},
	login: {
		success: false,
		loading: false,
		failed: false
	},
	auth: {
		success: false,
		loading: false,
		failed: false
	},
	updateProfile: {
		success: false,
		loading: false,
		failed: false
	},
	token: '',
	resetPassword: {
		success: false,
		loading: false,
		failed: false
	},
	newPassword: {
		success: false,
		loading: false,
		failed: false
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.GET_DATA_SUCCESS:
			return {
				...state,
				userData: action.payload,
				get: {
					success: true,
					loading: false,
					failed: false
				},
				login: {
					success: false,
					loading: false,
					failed: false
				},
				auth: {
					success: false,
					loading: false,
					failed: false
				}
			}
		case constants.GET_DATA_LOADING:
			return {
				...state,
				get: {
					success: false,
					loading: true,
					failed: false
				}
			}
		case constants.GET_DATA_FAILED:
			return {
				...state,
				get: {
					success: false,
					loading: false,
					failed: true
				}
			}
		case constants.LOGIN_FAILED:
			return {
				...state,
				login: {
					success: false,
					loading: false,
					failed: true
				}
			}
		case constants.LOGIN_LOADING:
			return {
				...state,
				login: {
					success: false,
					loading: true,
					failed: false
				}
			}
		case constants.LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload,
				login: {
					success: true,
					loading: false,
					failed: false
				},
				auth: {
					success: false,
					loading: false,
					failed: false
				}
			}
		case constants.LOGOUT:
			return {
				...state,
				userData: {},
				get: {
					success: false,
					loading: false,
					failed: false
				},
				login: {
					success: false,
					loading: false,
					failed: false
				},
				auth: {
					success: false,
					loading: false,
					failed: false
				},
				token: ''
			}
		case constants.AUTH_LOADING:
			return {
				...state,
				auth: {
					success: false,
					loading: true,
					failed: false
				}
			}
		case constants.AUTH_SUCCESS:
			return {
				...state,
				auth: {
					success: true,
					loading: false,
					failed: false
				},
				login: {
					success: false,
					loading: false,
					failed: false
				}
			}
		case constants.AUTH_FAILED:
			return {
				...state,
				auth: {
					success: false,
					loading: false,
					failed: true
				}
			}
		case constants.UPDATE_PROFILE_SUCCESS:
			return {
				...state,
				userData: action.payload,
				updateProfile: {
					success: true,
					loading: false,
					failed: false
				}
			}
		case constants.UPDATE_PROFILE_FAILED:
			return {
				...state,
				updateProfile: {
					success: false,
					loading: false,
					failed: true
				}
			}
		case constants.UPDATE_PROFILE_LOADING:
			return {
				...state,
				updateProfile: {
					success: false,
					loading: true,
					failed: false
				}
			}
		case constants.UPDATE_PROFILE_RESET:
			return {
				...state,
				updateProfile: {
					success: false,
					loading: false,
					failed: false
				}
			}
		case constants.RESET_SUCCESS:
			return {
				...state,
				resetPassword: {
					success: true,
					loading: false,
					failed: false
				}
			}
		case constants.RESET_FAILED:
			return {
				...state,
				resetPassword: {
					success: false,
					loading: false,
					failed: true
				}
			}
		case constants.RESET_LOADING:
			return {
				...state,
				resetPassword: {
					success: false,
					loading: true,
					failed: false
				}
			}
		case constants.NEWPASSWORD_SUCCESS:
			return {
				...state,
				newPassword: {
					success: true,
					loading: false,
					failed: false
				}
			}
		case constants.NEWPASSWORD_FAILED:
			return {
				...state,
				newPassword: {
					success: false,
					loading: false,
					failed: true
				}
			}
		case constants.NEWPASSWORD_LOADING:
			return {
				...state,
				newPassword: {
					success: false,
					loading: true,
					failed: false
				}
			}
		default:
			return state
	}
}

export default reducer
