// import React, { useState } from 'react';
import Dropdown from '../componentes/Dropdowns'
// import { Container } from '@material-ui/core';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function Filters(props){

    // const [selectedArea, setSelectedArea] = useState(null);
    // const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const classes = useStyles();    

    return (
        <div>

            {/* <Container>
                <Dropdown 
                    tittle='Selecciona un Area'
                    data={areas}
                    value='area'
                    setChange={setSelectedArea}
                />

                <Dropdown 
                    tittle='Selecciona Especialidad'
                    data={
                        selectedArea ?
                            specialties.filter(specialties => selectedArea.specialty.includes(specialties.specialty))
                        :
                        specialties
                    }
                    value='specialty'
                    setChange={setSelectedSpecialty}
                />
            </Container> */}

<div className={classes.root}>
      <Grid container spacing={3} justify='space-evenly'>
            
            <Grid item>
                <Dropdown 
                    tittle='Selecciona un Area'
                    data={areas}
                    value='area'
                    setChange={props.changeArea}
                    initValue={props.selectedArea}
                />
            </Grid>

            <Grid item>
                <Dropdown 
                    tittle='Selecciona Especialidad'
                    data={
                        props.selectedArea ?
                            specialties.filter(specialties => props.selectedArea.specialty.includes(specialties.specialty))
                        :
                        specialties
                    }
                    value='specialty'
                    setChange={props.changeSpecialty}
                    initValue={props.selectedSpecialty}
                />
            </Grid>

      </Grid>
    </div>

        </div>
    )
}

const areas = [
    { area: 'Medica', specialty: ['Especialidad 1', 'Especialidad 2'] },
    { area: 'Telemedicina', specialty: ['Especialidad 3', 'Especialidad 1'] },
    { area: 'Dental', specialty: ['Especialidad 1','Especialidad 4'] },
    { area: 'Laboratorio', specialty: ['Especialidad 5'] },
    { area: 'Imagenes', specialty: ['Especialidad 3'] },
    { area: 'Procedimientos', specialty: ['Especialidad 4'] },
    { area: 'Kinesiologiia', specialty: ['Especialidad 2'] },
    { area: 'Vacunatorio', specialty: ['Especialidad 3'] }
];

const specialties = [
    {specialty: 'Especialidad 1', doctors: ['Deiby Cabrera', 'Bastian Peso']},
    {specialty: 'Especialidad 2', doctors: ['Manuel Martinez']},
    {specialty: 'Especialidad 3', doctors: ['Bastian Peso']},
    {specialty: 'Especialidad 4', doctors: ['Deiby Cabrera', 'Manuel Martinez']},
    {specialty: 'Especialidad 5', doctors: ['Deiby Cabrera']}
];


const agenda_doctores = [
    {doctor: 'Deiby Cabrera', hours: [{date: '20-08-05', hour:'19:30'}]},
    {doctor: 'Manuel Martinez', hours: [{date: '20-08-05', hour:'19:30'}]},
    {doctor: 'Bastian Peso', hours: [{date: '20-08-05', hour:'19:30'}]}
];

const doctores = [
    {doctor: 'Deiby Cabrera',  especiality: ['Especialidad 1', 'Especialidad 2']},
    {doctor: 'Manuel Martinez',  especiality: ['Especialidad 1', 'Especialidad 2']},
    {doctor: 'Bastian Peso',  especiality: ['Especialidad 1', 'Especialidad 2']}
]


// const doctors = [
//     {doctor: 'Deiby Cabrera', doctors: ['Deiby Cabrera', 'Bastian Peso']},
//     {doctor: 'Bastian Peso', doctors: ['Manuel Martinez']},
//     {doctor: 'Manuel Martinez', doctors: ['Bastian Peso']},
//     {doctor: 'Vicky Latorre', doctors: ['Deiby Cabrera', 'Manuel Martinez']},
// ];