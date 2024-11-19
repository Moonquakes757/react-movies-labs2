import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import { getMovieCredits } from "../../api/tmdb-api";

export default function MovieCredits({ movie }) {
  const { data, error, isLoading, isError } = useQuery(
    ["credits", { id: movie.id }],
    getMovieCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const cast = data.cast;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="cast table">
        <TableHead>
          <TableRow>
            <TableCell>Actor</TableCell>
            <TableCell align="center">Character</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cast.map((actor) => (
            <TableRow key={actor.cast_id}>
              <TableCell component="th" scope="row">
                {actor.name}
              </TableCell>
              <TableCell align="center">{actor.character}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
