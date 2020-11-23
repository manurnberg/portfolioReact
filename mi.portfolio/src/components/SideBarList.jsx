import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import FolderSharedIcon from '@material-ui/icons/FolderShared';

const SideBarList = () => {
    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <FaceIcon />
                    </ListItemIcon>
                    <ListItemText primary='Mi Perfil' />
                        

                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <FolderSharedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Contenido' />
                        

                </ListItem>


            </List>

        </div>
    )
}

export default SideBarList
