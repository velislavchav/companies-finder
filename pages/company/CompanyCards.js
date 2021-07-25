import React from 'react';
import { useRouter } from "next/router"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 335, 
    margin: "5px 15px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CompanyCards(props) {
  const classes = useStyles();
  const router = useRouter();
  const bull = <span className={classes.bullet}>•</span>;

  const redirectToCompanyDetails = (companyId) => {
    router.push({
      pathname: '/company/[id]',
      query: { id: companyId },
    })
  }

  return (
    props.companies.length > 0 ? props.companies.map(company => {
      return (<Card className={classes.root} key={company.local_organization_id.id}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {company.company_name} {bull} {company.status}
          </Typography>
          <Typography variant="h5" component="h2">
            {company.email.email}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {company.webpage}
          </Typography>
          <Typography variant="body2" component="p">
            {company.phone.phone_number}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => redirectToCompanyDetails(company.local_organization_id.id)}>Learn More</Button>
        </CardActions>
      </Card>
      )
    }) : <></>
  );
}
