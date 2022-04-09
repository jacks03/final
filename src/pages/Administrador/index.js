import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Link,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import Create from "../../components/createadmin";
import swal from "sweetalert";
import {
  deleteProductClothe,
  getProductClothes,
  updateProductClothe,
  sendEmail,
} from "../../services/firestore";

const Administrador = () => {
  const [movies, setMovies] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    photoURL: "",
  });

  const fetchMovies = async () => {
    const response = await getProductClothes();
    setMovies(response);
  };
  const fetchConfirmGmail = async (movies) =>{
    const response1 = await swal({
      title: "Quiere confirmar la cuenta",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (response1) {
      await sendEmail(movies);
      await fetchMovies();
    }
  }
  const fetchDeleteItem = async (id) => {
    console.log(id);
    const response = await swal({
      title: "Esta seguro de eliminar?",
      text: "Recuerda que una vez eliminado no hay vuelta atras",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (response) {
      await deleteProductClothe(id);
      await fetchMovies();
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item md={3} m={3}>
          <h4>Lista de Administradores</h4>
        </Grid>
        <Grid item md={3} m={3} ml={64}>
          <Create fetchMovies={fetchMovies} />
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>foto de perfil</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.length > 0 &&
              movies.map((movie) => (
                <TableRow>
                  <TableCell>{movie.nombre}</TableCell>
                  <TableCell>{movie.apellido}</TableCell>
                  <TableCell>{movie.correo}</TableCell>
                  <TableCell>{movie.photoURL}</TableCell>
                  <TableCell>
                    <Button
                      color="error"
                      className="delete-button"
                      onClick={() => fetchDeleteItem(movie.id)}
                    >
                      <DeleteForeverRoundedIcon />
                    </Button>
                    <Button
                      color="primary"
                      className="delete-button"
                      onClick={() => fetchConfirmGmail(movie.id)}
                    >
                      <PersonIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Administrador;
