import React from 'react'
import './Sidebar.css'
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom'
import clsx from 'clsx'
import logo from './logo.png'
import arrowLogo from "./iconArrow.png"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/index'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { useMediaQuery } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Profile from '../Profile/Profile'
import Docs from '../Docs/Docs'
import Otchets from '../Otchets/Otchets'
import Machines from '../Machines/Machines'
import Casses from '../Casses/casses'
import Company from '../Companies/Companies'
import Todos from '../Todos/Todos'
import Calendar from '../Calendar/Calendar'
import ContactChat from '../Contacts/Contacts'
import Employees from '../Employees/Employees'
import UpdateProfile from '../Profile/UpdateProfile'
import NewsItem from '../News/NewsItem'
import TableDoc from '../Docs/TableDoc'
import AddTable from '../Docs/AddTable'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36,
		marginTop: 4
	},
	hide: {
		display: 'none',
		
	},
	drawer: {
		width: drawerWidth,
		position:"relative",
		zIndex:500,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		background: 'linear-gradient(180deg, #374F6B 41.15%, rgba(55, 79, 107, 0.64) 100%)'
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar
	},
	toolbar2: {
		color: 'white'
	},
	toolbar3: {
		color: 'white'
	},
	content: {
		flexGrow: 1
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	},
	mobileTitle: {
		marginLeft: 80,
		marginTop: 0
	},
	main_link: {
		color: 'white',
		fontSize: '1rem',
		fontFamily: 'Roboto',
		fontWeight: 400,
		lineHeight: 1.5,
		letterSpacing: '0.00938em'
	}
}))

export default function MiniDrawer() {
	const classes = useStyles()
	const dispatch = useDispatch()
	const [open, setOpen] = React.useState(false)
	const MobileVersionPlatform = useMediaQuery('(max-width:768px)')
	const handleDrawerOpen = () => {
		setOpen(true)
	}
	const handleDrawerClose = () => {
		setOpen(false)
	}
	const successUpdate = useSelector((state) => state.data.updateProfile.success)
	return (
		<BrowserRouter>
			<div className={classes.root}>
				{!MobileVersionPlatform && (
					<Drawer
						variant='permanent'
						className={clsx(
							classes.drawer,
							{
								[classes.drawerOpen]: open,
								[classes.drawerClose]: !open
							},
							classes.bgsidebar
						)}
						classes={{
							paper: clsx({
								[classes.drawerOpen]: open,
								[classes.drawerClose]: !open
							})
						}}
					>
						<div
							style={{
								background: 'linear-gradient(180deg, #374F6B 41.15%, rgba(55, 79, 107, 0.64) 100%)',
								height: '100vh'
							}}
							className={classes.mainToolbar}
						>
							<div className='sidebar_logo'>
								<img src={logo} alt='logo' />
							</div>
							<div className={classes.toolbar}>
								<IconButton onClick={open === false ? handleDrawerOpen : handleDrawerClose}>
									{open === false ? (
										<MenuIcon style={{ color: 'white' }} />
									) : (
										<ChevronLeftIcon style={{ color: 'white' }} />
									)}
								</IconButton>
							</div>

							<List className={classes.toolbar2}>
								{[
									{ text: 'Главная', path: '/main/', icon: 'fas fa-home' },
									{ text: 'Отчетность', path: '/main/otchets', icon: 'far fa-file-word' },
									{ text: 'Документы', path: '/main/docs', icon: 'far fa-file-alt' },
									{ text: 'Транспорт', path: '/main/machines', icon: 'fas fa-car' },
									{ text: 'Кассы', path: '/main/casses', icon: 'fas fa-cash-register' }
								].map((data, index) => (
									<ListItem button key={data.text}>
										<ListItemIcon onClick={open === false ? handleDrawerOpen : handleDrawerClose}>
											<i className={data.icon}></i>
										</ListItemIcon>
										<NavLink
											className='main_link'
											activeClassName='main_link_active'
											to={data.path}
											exact
										>
											{data.text}
										</NavLink>
										<img className="arrowIcon" src={arrowLogo} alt="sds"/>
									</ListItem>
								))}
							</List>

							<List className={classes.toolbar3}>
								{[
									{ text: 'Компания', path: '/main/company', icon: 'far fa-building' },
									{ text: 'Сотрудники', path: '/main/employees', icon: 'fas fa-user-friends' },
									{ text: 'Задачи', path: '/main/todos', icon: 'fas fa-clipboard-list' },
									{ text: 'Календарь', path: '/main/calendar', icon: 'fas fa-calendar-alt' },
									{ text: 'Контакты', path: '/main/contacts', icon: 'fas fa-comment' }
								].map((data, index) => (
									<ListItem button key={data.text}>
										<ListItemIcon onClick={open === false ? handleDrawerOpen : handleDrawerClose}>
											<i className={data.icon}></i>
										</ListItemIcon>
										<NavLink
											className='main_link'
											activeClassName='main_link_active'
											to={data.path}
											exact
										>
											{data.text}
										</NavLink>
										<img className="arrowIcon" src={arrowLogo} alt="sds"/>

									</ListItem>
								))}
								<div onClick={() => dispatch(logout())} className='logout'>
									<i className='fas fa-sign-out-alt' /> Выйти
								</div>
							</List>
						</div>
					</Drawer>
				)}

				<main className={classes.content}>
					{MobileVersionPlatform && (
						<div className={classes.root2}>
							<Accordion
								style={{
									background:
										'linear-gradient(rgb(55, 79, 107) 41.15%, rgba(55, 79, 107, 0.64) 100%)',
									marginTop: '-10px'
								}}
							>
								<AccordionSummary
									aria-controls='panel1a-content'
									id='panel1a-header'
									expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
								>
									<MenuIcon style={{ color: 'white' }} />
									<Typography style={{ color: 'white' }} className={classes.mobileTitle}>
										Личный кабинет
									</Typography>
								</AccordionSummary>
								<Divider />
								<List style={{ color: 'white' }}>
									{[
										{ text: 'Главная', path: '/main/', icon: 'fas fa-home' },
										{ text: 'Отчетность', path: '/main/otchets', icon: 'far fa-file-word' },
										{ text: 'Документы', path: '/main/docs', icon: 'far fa-file-alt' },
										{ text: 'Транспорт', path: '/main/machines', icon: 'fas fa-car' },
										{
											text: 'Кассы',
											path: '/main/casses',
											icon: 'fas fa-cash-register'
										},
										{ text: 'Сотрудники', path: '/main/employees', icon: 'fas fa-user-friends' },
										{ text: 'Задачи', path: '/main/todos', icon: 'fas fa-clipboard-list' },
										{ text: 'Календарь', path: '/main/calendar', icon: 'fas fa-calendar-alt' },
										{ text: 'Контакты', path: '/main/contacts', icon: 'fas fa-comment' }
									].map((data, index) => (
										<ListItem button key={data.text}>
											<ListItemIcon>
												<i className={data.icon}></i>
											</ListItemIcon>
											<NavLink
												className='main_link'
												activeClassName='main_link_active'
												to={data.path}
												exact
											>
												{data.text}
											</NavLink>
										</ListItem>
									))}
									<div onClick={() => dispatch(logout())} className='logout'>
										<i className='fas fa-sign-out-alt' /> Выйти
									</div>
								</List>
							</Accordion>
						</div>
					)}
					<div className='main_content_container'>
						<Switch>
							<Route path='/main/' component={Profile} exact />
							<Route path='/main/docs' component={Docs} />
							<Route path='/main/otchets' component={Otchets} />
							<Route path='/main/machines' component={Machines} />
							<Route path='/main/casses' component={Casses} />
							<Route path='/main/company' component={Company} />
							<Route path='/main/employees' component={Employees} />
							<Route path='/main/todos' component={Todos} />
							<Route path='/main/calendar' component={Calendar} />
							<Route path='/main/contacts' component={ContactChat} />
							{!successUpdate && <Route path='/main/update-profile' component={UpdateProfile} />}
							<Route path='/news/:id' component={NewsItem} />
							<Route path='/docs/my_doc/:id' component={TableDoc} />
							<Route path='/docs/add_table/' component={AddTable} />
							<Redirect to='/main/' />
						</Switch>
					</div>
				</main>
			</div>
		</BrowserRouter>
	)
}
