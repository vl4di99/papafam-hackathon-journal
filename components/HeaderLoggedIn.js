import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Home, ExitToAppOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../context/UserContext";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `left`,
    flexDirection: `row`,
    padding: `0px`,
    margin: `0px`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `left`,
    flexDirection: `row`,
    flexWrap: `wrap`,
    width: `100%`,
    marginTop: `10px`,
    marginBottom: `10px`,
  },
  linkText: {
    color: `pink`,
    fontSize: `1.2rem`,
    fontWeight: `bold`,
    textDecoration: `none`,
    margin: `4px`,
    "&:hover": {
      color: `pink`,
      textDecoration: `underline`,
    },
  },
});

const navLinks = [
  { title: `My Journal`, path: `/journal/entry` },
  { title: `Thoughts of the day✍️`, path: `/product` },
  { title: `Advice`, path: `/blog` },
  { title: `Sentimental score`, path: `/score` },
  { title: `Motivation`, path: `/motivationalQuote` },
];

const Header = () => {
  const classes = useStyles();
  const { authSignOut } = useContext(UserContext);

  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="small" />
          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
          <IconButton edge="start" color="pink" aria-label="logout" onClick={authSignOut}>
            <ExitToAppOutlined fontSize="small" />
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
