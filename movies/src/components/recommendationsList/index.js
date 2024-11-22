import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getMovieRecommendations } from "../../api/tmdb-api";
import Spinner from "../spinner";
import { useQuery } from "react-query";

export default function RecommendationsList({ movie }) {

  const { data, error, isLoading, isError } = useQuery(
    ["recommendations", { id: movie.id }],
    getMovieRecommendations
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (!data || !data.results || data.results.length === 0) {
    return <h1>No recommendations found for this movie.</h1>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="recommendations table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Title</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Release Date</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Details</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.results.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell>{movie.title}</TableCell>
              <TableCell align="center">{movie.release_date}</TableCell>
              <TableCell align="right">
                <Link to={`/movies/${movie.id}`}>View</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
