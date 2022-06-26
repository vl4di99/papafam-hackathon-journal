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
import Link from "next/link";
import { Home, ExitToAppOutlined, AppRegistration } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../context/UserContext";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `left`,
    flexDirection: `row`,
  },
  navDisplayFlex: {
    display: `flex`,
    color: `pink`,
    justifyContent: `space-between`,
  },
  linkText: {
    color: `pink`,
    fontWeight: `bold`,
    textDecoration: `none`,

    "&:hover": {
      color: `green`,
      transparent: `true`,
      textDecoration: `underline`,
      transform: "scale(1.1)",
      transition: "all 0.3s ease-in-out",
    },
  },
});

const navLinks = [{ title: `Register`, path: `auth/register` }];

const Header = () => {
  const classes = useStyles();
  const { authSignOut } = useContext(UserContext);

  return (
    <AppBar position="static" color="black" >
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <Link href="/">
            <IconButton edge="start" color="grey" aria-label="home">
              <Home fontSize="small" />
            </IconButton>
          </Link>
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
          <Link href="/auth/login">
            <IconButton edge="start" color="pink" aria-label="logout">
              <ExitToAppOutlined fontSize="small" />
            </IconButton>
          </Link>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
