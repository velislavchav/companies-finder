import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeKeysToUI } from './utils/setHighlightsData';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
        width: '48.75%',
        marginTop: '75px',
        marginLeft: '2.5%',
    },
    heading: {
        '&:first-letter': {
            textTransform: 'capitalize'
        },
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));


const Highlights = ({ highlights }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            {highlights ?
                highlights.map((insObj, i) => {
                    for (let [insKey, insValue] of Object.entries(insObj)) {
                        return (<Accordion key={i} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={"panel" + i + "bh-content"}
                                id={"panel" + i + "bh-header"}
                            >
                                <Typography className={classes.heading}> {makeKeysToUI(insObj.key)} </Typography>
                                <Typography className={classes.secondaryHeading}>{insValue}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {insObj["message"]}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>)
                    }
                }) : null}
        </div>
    )
}

export default Highlights
