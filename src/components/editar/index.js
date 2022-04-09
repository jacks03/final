import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Dialog, DialogContent, TextField, Grid } from "@mui/material";
import { storeMovie, updateMovie } from "../../services/edit";
import {
  storeProductClothe,
  sendEmail,
  updateProductClothe,
  getProductClothes,
} from "../../services/firestore";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import swal from "sweetalert";
const Editar = (props) => {
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

  const fetchDetailMovie = async () => {
    const response = await updateProductClothe(id, values);
    // cuando hacemos la peticion podemos llenar a values usando setValues
    setValues({
      nombre: response.nombre,
      apellido: response.apellido,
      gender: response.correo,
      photoURL: response.photoURL,
    });
  };

  const handleOpenDialog = () => {
    setOpen(!open);
  };

  const fetchStoreMovie = async () => {
    await storeMovie(values);
    await updateProductClothe(id, values);
    swal({
      icon: "success",
      title: "Success",
      text: "Se actualizo correctamente",
    });
    await props.fetchMovies();
    handleOpenDialog();
  };

  //acutalizar

  const fetchUpdateMovie = async () => {
    await updateProductClothe(id, values);
  };

  useEffect(() => {
    fetchDetailMovie();
  }, []);

  return (
    <div>
      <EditRoundedIcon onClick={handleOpenDialog} />
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item md={8}>
              <h2>Editar Administrador</h2>
            </Grid>
            <Grid item md={6}>
              <TextField
                label="nombre"
                name="nombre"
                fullWidth
                value={values.nombre}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Apellido"
                name="apellido"
                fullWidth
                value={values.apellido}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="correo"
                name="correo"
                fullWidth
                value={values.correo}
                onChange={handleChangeInput}
              />
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
            <Grid item md={12}>
              <Button variant="contained" onClick={fetchStoreMovie}>
                actualizar
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Editar;
