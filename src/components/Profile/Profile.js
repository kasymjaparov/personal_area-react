import React from 'react'
import Header from '../Header/Header'
import ContactInfo from '../ContactInfo/ContactInfo'
import News from '../News/News'
import Footer from '../Footer/footer'
import { useSelector } from 'react-redux'

const Main = () => {
	const userData = useSelector((state) => state.data.userData)
	return (
		<div className='main'>
			<Header userData={userData} />
			<ContactInfo userData={userData} />
			<News />
			<Footer />
		</div>
	)
}

export default Main
