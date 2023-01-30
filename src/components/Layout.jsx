import { makeStyles, AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import { 
    Drawer, 
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
} from '@material-ui/core';
import { AddCircleOutline, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})

const Layout = ({children}) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {text: 'My Notes', icon: <SubjectOutlined color='secondary'/>, path: '/'},
        {text: 'Create Notes', icon: <AddCircleOutline color='secondary'/>, path: '/create'},
    ];

    return (
        <div className={classes.root}>
            {/* app bar */}
            <AppBar
                className={classes.appbar}
                elavation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        {format(new Date(), 'do MMM Y')}
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar src="/mario-av.png" className={classes.avatar}/>
                </Toolbar>
            </AppBar>

            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>

                {/* list links */}
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem 
                            key={index} 
                            button
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    );
};

export default Layout;