import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getCorrectInformation } from './utils/setBasicData';

const useStyles = makeStyles({
  table: {
    display: 'inline-block',
    minWidth: 650,
    width: '48.75%',
    marginTop: '75px'
  },
  heading: {
    '&:first-letter': {
      textTransform: 'capitalize'
    },
  }
});

const keys = ["email", "phone", "score", "address", "status", "company_name", "company_type", "main_industry_code",
  "registered_capital", "date_of_incorporation", "local_organization_id", "company_secondary_names", "risk_assessment"]

const CompanyBasicInformation = ({ basicInformation }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
        <TableBody>
          {keys.map((key, i) => (
            <TableRow key={i}>
              <TableCell className={classes.heading}>{key.replaceAll("_", " ")}</TableCell>
              <TableCell className={classes.heading}>{getCorrectInformation(basicInformation[key])}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CompanyBasicInformation
