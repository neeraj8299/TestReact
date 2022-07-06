import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getContactList } from "../Actions/ContactAction";
import { Button } from "@mui/material";

export default function Contact() {
  const dispatch = useDispatch();

  const contactList = useSelector((state) => state.contactList);

  useEffect(() => {
    dispatch(getContactList());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Contact List</h1>
        <Button color="primary" variant="contained">
          ADD
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">DOB</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contactList &&
              contactList.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Namee}
                  </TableCell>
                  <TableCell align="right">{row.Email}</TableCell>
                  <TableCell align="right">{row.Gender}</TableCell>
                  <TableCell align="right">
                    {new Date(row.DOB).toISOString().slice(0, 10)}
                  </TableCell>
                  <TableCell align="right">
                    <Button color="secondary" variant="contained">
                      Update
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => handleDelete(row.Id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
