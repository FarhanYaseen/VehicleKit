import React from 'react';
import {
  Link
} from "react-router-dom";
import {
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper,
  makeStyles, withStyles
} from '@material-ui/core';

import '../style.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function CustomTable(props) {
  const { bikes = [] } = props;
  const classes = useStyles();
  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Latitude</StyledTableCell>
            <StyledTableCell align="right">Longitude</StyledTableCell>
            <StyledTableCell align="right">Reserved</StyledTableCell>
            <StyledTableCell align="right">Disabled</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {bikes.map(({ bike_id, lat, lon, is_disabled, is_reserved, vehicle_type }, myKey) => (
            <StyledTableRow key={bike_id}>
                <StyledTableCell component="th" scope="row">
                  <Link to={`/${bike_id}`} className="text-link"> {bike_id}</Link>
                </StyledTableCell>
              <StyledTableCell align="right">{lat}</StyledTableCell>
              <StyledTableCell align="right">{lon}</StyledTableCell>
              <StyledTableCell align="right">{is_reserved ? 'yes' : 'no'}</StyledTableCell>
              <StyledTableCell align="right">{is_disabled ? 'yes' : 'no'}</StyledTableCell>
              <StyledTableCell align="right">{vehicle_type}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  )
}