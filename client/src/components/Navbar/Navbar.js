import { AppBar, Toolbar, Container, Grid } from "@material-ui/core";
import useStyles from "./styles";

import Searchbar from "./Searchbar/Searchbar";
import logo from '../../assets/logo.png';
import mini from '../../assets/mini.png';

const Navbar = ({ onSearch }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Container maxWidth='lg'>
        <Toolbar>
          <div className={classes.title}>
            <img src={logo} className={classes.logo}/>
            <img src={mini} className={classes.logo}/>
          </div>
          <Searchbar onSearch={onSearch} />
        </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;