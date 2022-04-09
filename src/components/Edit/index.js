import { useState } from "react";
import { Button, Dialog, DialogContent, TextField, Grid } from "@mui/material"
import { storeMovie } from "../../services/edit";
const Edit = (props) =>{
  const [open, setOpen] = useState(false);

  const [values, setValues] = useState({
     name: "",
     last_name: "",
     email: "",
     phone_number: "",
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

   const fetchStoreMovie = async () => {
     await storeMovie(values);
     await props.fetchMovies();
     handleOpenDialog();
   };
     return(
          <div>
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        editar
      </Button>
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogContent>
          <Grid container spacing={3}>
          <Grid item md={8}>
                 <h2>Editar</h2>
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Nombre"
                name="name"
                fullWidth

              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Apellido"
                name="last_name"
                fullWidth
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="correo"
                name="email"
                fullWidth
                onChange={handleChangeInput}

              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="telefono"
                name="phone_number"
                fullWidth
                onChange={handleChangeInput}

              />
            </Grid>
            <Grid item md={12}>
              <Button variant="contained" onClick={fetchStoreMovie} >
                editar
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      </div>
     )
}
export default Edit;