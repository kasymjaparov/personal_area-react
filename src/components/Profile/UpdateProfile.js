import React from 'react'
import { Button, FormHelperText, TextField, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import './update-profile.css'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { updateProfile } from '../../redux/actions'

export default function UpdateProfile() {
	const user = useSelector((state) => state.data.userData)
	const loading = useSelector((state) => state.data.updateProfile.loading)
	const successUpdate = useSelector((state) => state.data.updateProfile.success)
	const dispatch = useDispatch()
	const [data, setData] = React.useState({
		first_name: user.first_name,
		last_name: user.last_name,
		phone: user.phone,
		username: user.username,
		address: user.address,
		birthday: user.birthday,
		avatar: null
	})
	const [valid, setValid] = React.useState(false)
	React.useEffect(() => {
		if (
			data.first_name.length > 3 &&
			data.last_name.length > 3 &&
			data.phone.length > 9 &&
			data.birthday.length > 5 &&
			data.address.length > 6
		) {
			setValid(true)
		} else {
			setValid(false)
		}
	}, [data.first_name, data.last_name, data.phone, data.birthday, data.address])
	return (
		<div className='update-profile-card'>
			<Typography style={{ marginTop: 20 }} variant='h4' className='update-profile-typography' gutterBottom>
				Редактиование профиля
			</Typography>
			<Grid container direction='row' justify='center'>
				<div style={{ paddingTop: 10 }} className='update-profile-row'>
					<Box pt={2}>
						<FormHelperText id='filled-weight-helper-text'>Имя</FormHelperText>
						<TextField
							id='outlined-basic'
							value={data.first_name}
							onChange={(e) => setData({ ...data, first_name: e.target.value })}
							variant='outlined'
						/>
					</Box>
					<Box pt={2}>
						<FormHelperText id='filled-weight-helper-text'>Телефон</FormHelperText>
						<TextField
							id='outlined-basic'
							value={data.phone}
							onChange={(e) => setData({ ...data, phone: e.target.value })}
							variant='outlined'
						/>
					</Box>
					<Box pt={2}>
						<FormHelperText id='filled-weight-helper-text'>Адрес</FormHelperText>
						<TextField
							id='outlined-basic'
							value={data.address}
							onChange={(e) => setData({ ...data, address: e.target.value })}
							variant='outlined'
						/>
					</Box>
				</div>
				<div className='update-profile-row'>
					<Box pt={2}>
						<FormHelperText id='filled-weight-helper-text'>Фамилия</FormHelperText>
						<TextField
							id='outlined-basic'
							value={data.last_name}
							onChange={(e) => setData({ ...data, last_name: e.target.value })}
							variant='outlined'
						/>
					</Box>
					<Box pt={2}>
						<FormHelperText id='filled-weight-helper-text'>Дата рождения</FormHelperText>
						<TextField
							id='outlined-basic'
							value={data.birthday}
							onChange={(e) => setData({ ...data, birthday: e.target.value })}
							variant='outlined'
						/>
					</Box>
	
				</div>
				<Grid container direction='row' justify='center' alignItems='center'>
					<Box pt={3}>
						<Button
							disabled={!valid}
							onClick={() => {
								dispatch(updateProfile(data))
								setData({
									first_name: data.first_name,
									last_name: data.last_name,
									phone: data.phone,
									username: data.username,
									address: data.address,
									birthday: data.birthday
								})
							}}
							variant='contained'
							style={{ marginBottom: 10 }}
							color='primary'
						>
							{loading ? 'Загрузка...' : 'Редактировать'}
						</Button>
					</Box>
				</Grid>
				{successUpdate && <div className='update-profile-success'>Ваш профиль отредактирован</div>}
			</Grid>
		</div>
	)
}
