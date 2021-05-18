import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NewsItem(props) {
	let data = props.location.state.posts
	return (
		<div className="newsItem">
            <NavLink to="/main"><i className="fas fa-arrow-left"/></NavLink>
			<div className="newsItem_title">{data.name}</div>
			<div className="newsItem_desc">{data.description}</div>
			<div className="newsItem_img">
				<img src={data.image} alt="" />
			</div>
		</div>
	)
}
