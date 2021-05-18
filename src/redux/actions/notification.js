import React from 'react'
import { NOTIFICATION_TYPE_ERROR, NOTIFICATION_TYPE_SUCCESS } from 'react-redux-notify'

export const updateProfileSuccessNotification = {
	message: 'Ваш профиль отредактирован!',
	type: NOTIFICATION_TYPE_SUCCESS,
	duration: 5000,
	canDismiss: true,
	icon: <i className='fa fa-check' />
}

export const updateProfileErrorNotification = {
	message: 'Ошибка при отредактировании!',
	type: NOTIFICATION_TYPE_ERROR,
	duration: 5000,
	canDismiss: true,
	icon: <i className='fa fa-check' />
}
