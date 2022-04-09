import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const Main = () => {
  return (
    <Box m={3}>
      <Grid item md={1.7} className="border-right">
        <img
          className="logo"
          src="https://www.logocrea.com/wp-content/uploads/2016/07/juguete1.png"
          alt=""
        />
        <List>
          <ListItem>
            <Button variant="contained">
              <Link className="link" to="/perfil">
                perfil
              </Link>
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="contained">
              <Link className="link" to="/Administracion">
                Administrador
              </Link>
            </Button>
          </ListItem>
        </List>
        {/**esto va a recibir los componentes */}
        <Grid item md={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
