import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const SecondaryMenuIcon: React.FC = () => (
  <Toolbar>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <Typography variant="h6">Kubernetes</Typography>
  </Toolbar>
);

export default SecondaryMenuIcon;