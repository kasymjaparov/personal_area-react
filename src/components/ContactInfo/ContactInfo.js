import React from 'react'
import './ContactInfo.css'

export default function ContactInfo({ userData }) {
	return (
		<div className='contactInfo'>
			<div className='contactInfo_item'>
				<div className='contactInfo_item_text'>Почта:</div>
				<div className='contactInfo_item_text'>{userData.email}</div>
			</div>
			<div className='contactInfo_item'>
				<div className='contactInfo_item_text'>Номер телефона:</div>
				<div className='contactInfo_item_text'>{userData.phone}</div>
			</div>
			<div className='contactInfo_item'>
				<div className='contactInfo_item_text'>Дата рождения:</div>
				<div className='contactInfo_item_text'>{userData.birthday}</div>
			</div>
			<div className='contactInfo_item'>
				<div className='contactInfo_item_text'>Город:</div>
				<div className='contactInfo_item_text'>{userData.city}</div>
			</div>
		</div>
	)
}
