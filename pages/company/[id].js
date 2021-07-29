import * as React from "react"
import { useRouter } from "next/router"
import { makeStyles } from '@material-ui/core/styles';
import Management from "@/components/Management"
import Highlights from "@/components/Highlights"
import CompanyBasicInformation from "@/components/CompanyBasicInformation"
import { companyRelations } from "@/requests"
import { getCompanyHighlights, getCompanyBasicInformation, sortHighlights } from "@/requests/companyGeneral"

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexBasis: '80%',
    width: '80%',
    margin: 'auto'
  }
}));

export default function Company() {
  const router = useRouter();
  const { id } = router.query;
  const [relations, setRelations] = React.useState(null);
  const [highlights, setHighlights] = React.useState(null);
  const [basicInformation, setBasicInformation] = React.useState(null);
  const classes = useStyles();

  React.useEffect(() => {
    if (id != null) {
      try {
        companyRelations({ id }).then(res => {
          setRelations(res)
        })
        getCompanyHighlights(id).then(res => {
          const sortedHiglights = sortHighlights(res);
          setHighlights(sortedHiglights)
        })
        getCompanyBasicInformation(id).then(res => {
          setBasicInformation(res)
        })
      } catch (error) { }
    }
  }, [id])


  return (<div className={classes.container} >
    {relations ? <Management relations={relations} /> : null}
    {/* <div> */}
      {basicInformation ? <CompanyBasicInformation basicInformation={basicInformation} /> : null}
      {highlights ? <Highlights highlights={highlights} /> : null}
    {/* </div> */}
  </div>)
}
