import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Typography } from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import SettingsIcon from '@material-ui/icons/Settings';
import LayersIcon from '@material-ui/icons/Layers';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

export default function Employees() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const [open2, setOpen2] = React.useState(false);

	const handleClick2 = () => {
		setOpen2(!open2);
	};

	const [open3, setOpen3] = React.useState(false);

	const handleClick3 = () => {
		setOpen3(!open3);
	};

	const [open4, setOpen4] = React.useState(false);

	const handleClick4 = () => {
		setOpen4(!open4);
	};

	return (
		<>
			<List
				component="nav"
				aria-labelledby="nested-list-subheader"
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						<Typography vaiant="h1" color="primary" style={{ fontSize: 20, color: 'black', marginBottom: 15, marginTop: 10 }}>Сотрудники</Typography>
					</ListSubheader>
				}
				className={classes.root}
			>
				<ListItem button onClick={handleClick}>
					<ListItemIcon>
						<MoneyIcon />
					</ListItemIcon>
					<ListItemText primary="Бухгалтерия" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Азамат Белеков" />
						</ListItem>
					</List>
				</Collapse>

				<ListItem button onClick={handleClick2}>
					<ListItemIcon>
						<SettingsIcon />
					</ListItemIcon>
					<ListItemText primary="Технический отдел" />
					{open2 ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open2} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Иван Иванов" />
						</ListItem>
					</List>
				</Collapse>

				<ListItem button onClick={handleClick3}>
					<ListItemIcon>
						<LayersIcon />
					</ListItemIcon>
					<ListItemText primary="Юридический отдел" />
					{open3 ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open3} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Семен Петров" />
						</ListItem>
					</List>
				</Collapse>

				<ListItem button onClick={handleClick4}>
					<ListItemIcon>
						<CallIcon />
					</ListItemIcon>
					<ListItemText primary="Call центр" />
					{open4 ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open4} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Дэвид Джонс" />
						</ListItem>
					</List>
				</Collapse>
			</List>

		</>

	);
}
