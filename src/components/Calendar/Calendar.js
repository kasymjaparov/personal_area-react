import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Calendar.css'

export default function CalendarPage() {
	const [value, onChange] = useState(new Date())
	return (
		<div className='docs'>
			<div className='card'>
				<Calendar className='card-calendar' onChange={onChange} value={value} />
			</div>
		</div>
	)
}
