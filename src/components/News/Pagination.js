import React, { useState, useEffect } from 'react'

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
	const [counter, setCounter] = useState(1)
	const [numberOfButtons] = useState(Math.ceil(total / showPerPage))

	useEffect(() => {
		const value = showPerPage * counter
		onPaginationChange(value - showPerPage, value)
	}, [counter])

	const onButtonClick = (type) => {
		if (type === 'prev') {
			if (counter === 1) {
				setCounter(1)
			} else {
				setCounter(counter - 1)
			}
		} else if (type === 'next') {
			if (numberOfButtons === counter) {
				setCounter(counter)
			} else {
				setCounter(counter + 1)
			}
		}
	}
	return (
		<div className="d-flex justify-content-center">
			<nav aria-label="Page navigation example">
				<ul className="pagination">
					<li className="page-item">
						<span style={{ cursor: 'pointer' }} className="page-link" onClick={() => onButtonClick('prev')}>
							<i className="fas fa-arrow-left"></i>
						</span>
					</li>

					{new Array(numberOfButtons).fill('').map((el, index) => (
						<li key={index} className={`page-item ${index + 1 === counter ? 'active' : null}`}>
							<span
								style={{ cursor: 'pointer' }}
								className="page-link"
								onClick={() => setCounter(index + 1)}
							>
								{index + 1}
							</span>
						</li>
					))}
					<li className="page-item">
						<span style={{ cursor: 'pointer' }} className="page-link" onClick={() => onButtonClick('next')}>
							<i className="fas fa-arrow-right"></i>
						</span>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Pagination