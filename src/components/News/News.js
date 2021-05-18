import { useState } from 'react'
import './news.css'
import products from '../../products'
import Pagination from './Pagination'
import { NavLink } from 'react-router-dom'

const News = () => {
	const [showPerPage] = useState(4)
	const [pagination, setPagination] = useState({
		start: 0,
		end: showPerPage
	})

	const onPaginationChange = (start, end) => {
		setPagination({ start: start, end: end })
	}
	return (
		<div className="news_block">
			<h4 className="news_block_h">Новости</h4>
			<div className="news_block_row">
				{products.slice(pagination.start, pagination.end).map((posts) => (
					<NavLink
						className="newsLink"
						key={posts._id}
						to={{ pathname: `/news/${posts._id}`, state: { posts } }}
					>
						<div className="news_title">{posts.name}</div> <br />
						<div className="news_desc">{`${posts.description.substr(0, 150)}...`}</div>
					</NavLink>
				))}
			</div>

			<Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={products.length} />
		</div>
	)
}

export default News
