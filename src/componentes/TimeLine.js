import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import PlusIcon from '@material-ui/icons/PlusOneRounded';
import { dateToHourString, dateToDateString } from '../modules/dateConverter';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();

  const onSelectHour = () => {
    props.setSelectedHour(props.hour);

    props.hour.id === props.selectedHour?.id?
      props.setSelectedHour(null)
    :
      props.setSelectedHour(props.hour);
    



  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="http://lorempixel.com/400/300/" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.hour.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.hour.speciality}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Hora de Atencion: {dateToHourString(props.hour.date)}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Button
                    variant="contained"
                    color={props.hour.id === props.selectedHour?.id ? 'secondary': 'primary'}
                    className={classes.button}
                    startIcon={<PlusIcon />}
                    onClick={onSelectHour}
                  >
                    {props.hour.id === props.selectedHour?.id?
                      'Cancelar'
                    :
                      'Seleccionar'
                    }
                  </Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
                  <Typography variant="subtitle1">{dateToDateString(props.hour.date)}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
