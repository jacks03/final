import { useState } from "react";
import { Button, Dialog, DialogContent, TextField, Grid } from "@mui/material"
import "./index.css"
import { storeMovie } from "../../services/edit";
import { storeProductClothe,sendEmail } from "../../services/firestore";
import swal from "sweetalert";
const Create = (props) =>{
  const [open, setOpen] = useState(false);

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

  const handleOpenDialog = () => {
     setOpen(!open);
   };

   const irAdministracion = async () => {
     await storeMovie(values);
    await storeProductClothe(values)
    swal({
      icon: "success",
      title: "Success",
      text: "Se creo correctamente",
    });
     await props.fetchMovies();
     handleOpenDialog();
   };

   const fetchSendEmail = async () => {
    const response = await sendEmail();
    console.log(response);
  };
   
     return(
          <div>
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Crear admin
      </Button>
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogContent>
          <Grid container spacing={3}>
          <Grid item md={8}>
                 <h2>Crear Administrador</h2>
            </Grid>
            <Grid item md={6}>
              <TextField
                label="nombre"
                name="nombre"
                fullWidth
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Apellido"
                name="apellido"
                fullWidth
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="correo"
                name="correo"
                fullWidth
                onChange={handleChangeInput}

              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="foto de perfil"
                name="photoURL"
                fullWidth
                onChange={handleChangeInput}

              />
            </Grid>
            <Grid item md={12}>
              <Button variant="contained" onClick={irAdministracion} >
                crear admin
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      </div>
     )
}
export default Create;