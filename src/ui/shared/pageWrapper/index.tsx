import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import SecondaryMenu from '../../secondaryMenu';
import ToolBarDivider from '../toolBarDivider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface PageWrapperProps {
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

const PageWrapper: React.FC<PageWrapperProps> = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <SecondaryMenu>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </SecondaryMenu>

      <main>
        <ToolBarDivider />
        <Toolbar>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="h6">Kubernetes</Typography>
        </Toolbar>
        <Divider />
        <div className={classes.content}>{props.children}</div>
      </main>
    </React.Fragment>
  );
};

export default PageWrapper;