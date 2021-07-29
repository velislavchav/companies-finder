import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { setManagementData } from "./utils/setManagementData"

const useStyles = makeStyles({
  tableContainer: {
    marginTop: '75px'
  },
  table: {
    minWidth: 650,
  },
  heading: {
    '&:first-letter': {
      textTransform: 'capitalize'
    },
  }
});

const managementRoles = [
  "MANAGEMENT",
  "ADMINISTRATION",
  "CHIEF EXECUTIVE OFFICER",
  "BOARD OF DIRECTORS",
  "CHAIRMAN",
  "DEPUTY CHAIRMAN",
  "DEPUTY",
  "STAKEHOLDER",
]

const Management = ({ relations }) => {
  const classes = useStyles();
  const { management, boardOfDirectors } = relations;
  const managementData = setManagementData(managementRoles, [
    ...management,
    ...boardOfDirectors,
  ]);

  if (managementData && managementData.length > 0) {
    const keys = Object.keys(managementData[0])
    return (
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {keys.map((key, i) => (
                <TableCell className={classes.heading} align={i > 1 ? "right" : "left"} key={`only keys ${key}`}>{key}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {managementData.map((data, i) => (
              <TableRow key={i}>
                {keys.map((key, i) => (
                  <TableCell key={i} align={i > 1 ? "right" : "left"}>{data[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return <></>
  }
}

export default Management