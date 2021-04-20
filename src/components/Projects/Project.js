import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './Project.css';
import { CardHeader, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    cardHeader: {
      color:'#161d6f',

    },
    cardcontent: {
      marginTop: '10px',
      textAlign: 'justify',

    },
    typography: {
      color: '#1687a7',
    },
  }));


const Project = ( {title, github, img, desc, hostLink}) => {
    const classes = useStyles();
    
    return (
      
          <Card className="card">
            <CardHeader className={classes.cardHeader} title={title} />
            <CardMedia
              className={classes.media}
              image={img}
              title={title}
            />
            <CardContent className={classes.cardcontent}>
              <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
                {desc}
                </Typography>
                <Typography className="card-icons">
                  <a href={github}><GitHubIcon /></a>
                  {
                    hostLink.length ? <a href={hostLink}><LinkIcon /></a> : ''
                  }
                </Typography>
              </CardContent>
            </Card>
    )
}

export default Project;
