import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { createRoot } from 'react-dom/client';


const drawerWidth = 240;

const mount = (el) => {
    createRoot(el).render(
        <Box sx={{ display: 'flex' }}>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                backgroundColor: "#E9504D",
            },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
            {['All Products', 'Category'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton>
                    <ListItemIcon style={{ color: "white" }}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} 
                        primaryTypographyProps={{ color: "white", fontWeight: "bold", fontSize: 20 }}/>
                </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Drawer>
        </Box>
    );
}

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-sidebar");
    if (el) {
        mount(el);
    }
}

export { mount };