import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useCalStore } from "../store";

export default function BasicTable() {
  const list = useCalStore((state) => state.list);
  const removeList = useCalStore((state) => state.removeList);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ชื่อ</TableCell>
            <TableCell align="center">ราคา</TableCell>
            <TableCell align="center">ลบรายการ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {list?.map((v, i) => {
          return (
          <TableRow key={i}>
            <TableCell align="left">{v?.name}</TableCell>
            <TableCell align="center">{v?.price}</TableCell>
            <TableCell align="center">
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => removeList(i)}
              >
              <DeleteIcon />
            </IconButton>
            </TableCell>
          </TableRow>
        )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// <IconButton aria-label="edit" color="secondary">
//   <ModeEditIcon />
// </IconButton>
