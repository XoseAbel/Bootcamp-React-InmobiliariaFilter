import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      marginTop: '15px',
      marginRight: '20px',
      marginLeft: '20px',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      width: '75%',
    },
    cover: {
      width: '25%',
    },
    description: {
      fontSize: '0.6rem',
    },
    info: {
      display: 'flex',
      marginTop: '15px',
      marginRight: '20px',
      marginLeft: '20px',
      flexDirection: 'row',
      fontSize: '0.8rem',
      justifyContent: 'space-between',
    },
  })
);

const PropertyCard = (props: any) => {
  //css style
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography component='h6' variant='h6'>
            {props.title}
          </Typography>
          <Typography
            variant='body2'
            className={classes.description}
            color='textSecondary'
          >
            {props.description}
          </Typography>
          <div className={classes.info}>
            <Typography variant='body2' color='textSecondary'>
              Type: {props.type}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Rooms: {props.room}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Bathrooms: {props.bath}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Parking: {props.parking}
            </Typography>
          </div>
        </CardContent>
        <CardMedia
          className={classes.cover}
          image={props.photo}
          title={props.title}
        />
      </Card>
    </div>
  );
};

export { PropertyCard };
