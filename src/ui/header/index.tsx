import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Theme from '../shared/themeFile';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderLogo from './headerLogo';
import ToggleMenuIcon from './toggleMenuIcon';

export const Header: React.FC<{}> = () => {
    return (
        <AppBar position="fixed" style={{ zIndex: Theme.zIndex.drawer + 101 }}>
            <Toolbar style={{ minHeight: 48 }}>
                <ToggleMenuIcon menuOpen={true} />
                <HeaderLogo text="Sygment" />
                <div style={{ flexGrow: 1 }} />
            </Toolbar>        
        </AppBar>
    );
}

export default Header;
