import React, { useState } from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getCompanies } from '../requests/companyGeneral'
import CompanyCards from './company/CompanyCards';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '75%',
    margin: 'auto',
    marginTop: '30vh',
    justifyContent: 'center'
  },
  textField: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  companyCardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: "auto",
    marginTop: "50px",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: '75%',
  }
}));

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [companies, setCompanies] = useState([]);
  const classes = useStyles();

  const handleSearch = () => {
    getCompanies(searchText).then((data) => {
      setCompanies(data);
    })
  }

  const handleKeySubmit = (event) => {
    event?.keyCode === 13 || event?.key === 'Enter' ? handleSearch(event.target.value) : null;
  }

  return (
    <NoSsr>
      <div className={classes.root}>
        {/* <div> */}
          <TextField
            id="outlined-full-width"
            label="Search for company"
            style={{ margin: 8 }}
            placeholder="Company name"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            autoComplete="false"
            value={searchText}
            onChange={() => setSearchText(event.target.value)}
            onKeyPress={handleKeySubmit}
          />
          <Button variant="contained" color="secondary" onClick={handleSearch}>
            Search
          </Button>
        {/* </div> */}
      </div>
      <div className={classes.companyCardsContainer}>
        <CompanyCards companies={companies}></CompanyCards>
      </div>
    </NoSsr>
  )
}
