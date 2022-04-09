//* importaciones
import { Button, TextField, Grid, Container } from "@mui/material";
import { useState, useEffect } from "react";
import "./index.css";
import {
  getProductClothes,
  sendEmail,
  storeProductClothe,
  updateProductClothe,
} from "../../services/firestore";
import { useParams } from "react-router-dom";

//padre 👇
const Profile = () => {
  const [open, setOpen] = useState(false);

  const { id } = useParams();

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    photoURL: "",
  });

  const handleChangeInput = (e) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const irAdministracion = async () => {
    window.location.href = "/Administracion";
    await getProductClothes(values);
    await updateProductClothe(id, values);
  };

  return (
    <Container className="color">
      <Grid container spacing={2} mt={5}>
        <Grid item md={4}>
          <img className="imagen" src={values.photoURL} alt="" />
        </Grid>
        <Grid item md={4} container spacing={3}>
          <Grid container spacing={3}>
            <Grid item md={8}>
              <h2>Hola Administrador</h2>
            </Grid>
            <Grid item md={6}>
              <TextField
                label="nombre"
                name="nombre"
                fullWidth
                value={values.nombre}
                onChange={handleChangeInput}
              />
              <h5> {values.nombre} </h5>
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Apellido"
                name="apellido"
                fullWidth
                value={values.apellido}
                onChange={handleChangeInput}
              />
              <h5>{values.apellido}</h5>
            </Grid>
            <Grid item md={6}>
              <TextField
                label="correo"
                name="correo"
                fullWidth
                value={values.correo}
                onChange={handleChangeInput}
              />
              <h5> {values.correo} </h5>
            </Grid>
            <Grid item md={6}>
              <TextField
                label="foto de perfil"
                name="photoURL"
                fullWidth
                value={values.photoURL}
                onChange={handleChangeInput}
              />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="secondary"
              onClick={irAdministracion}
            >
              Confirmar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Profile;
