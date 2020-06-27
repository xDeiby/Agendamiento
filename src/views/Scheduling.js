import React, {useState} from 'react';
import DateLabel from '../componentes/DateLabel';
import HourLabel from '../componentes/HourLabel';
import TimeLine from '../componentes/TimeLine';
import { LocalStorageObjects } from '../static_data/localstorage';
import Grid from '@material-ui/core/Grid';
import { dateToHourString, dateToDateString} from '../modules/dateConverter';


export default function Scheduling(props){

    const [selectedDate, setSelectedDate] = useState(null);


    console.log(props.selectedSpecialty);
    

    return (
        <div>
            <DateLabel setDate={setSelectedDate} date={selectedDate}/>

            <Grid container spacing={3} justify='space-evenly'>

            {props.selectedHour ?
                <Grid item key={props.selectedHour.id}>
                    <TimeLine 
                        key={props.selectedHour.id} 
                        hour={props.selectedHour}
                        setSelectedHour={props.changeHour} 
                        selectedHour={props.selectedHour}
                    />
                </Grid>
                :

                selectedDate ?
                    nose.filter(hora => (hora.date.getHours() == selectedDate.getHours() && dateToDateString(hora.date) === dateToDateString(selectedDate) &&  hora.speciality === props.selectedSpecialty)).map(tamp => (
                        <Grid item key={tamp.id}>
                            <TimeLine 
                                key={tamp.id} 
                                hour={tamp}
                                setSelectedHour={props.changeHour} 
                                selectedHour={props.selectedHour}
                            />
                        </Grid>
                    ))
                :
                    nose.filter(hora => hora.speciality === props.selectedSpecialty).map(tamp => (
                        <Grid item key={tamp.id}>
                            <TimeLine 
                                key={tamp.id} 
                                hour={tamp}
                                setSelectedHour={props.changeHour} 
                                selectedHour={props.selectedHour}
                            />
                        </Grid>
                    ))
        }


            </Grid>

        </div>
    )
}


const nose = [
    {name:'Bastian Peso', id:'12', speciality:'Especialidad 1', date: new Date('June 25, 2020 08:30:00')},
    {name:'Deiby Cabrera', id:'123',speciality:'Especialidad 1', date: new Date('June 25, 2020 09:30:00')},
    {name:'Manuel Martinez', id:'124',speciality:'Especialidad 1', date: new Date('June 25, 2020 10:00:00')},
    {name:'Vicky Latorre', id:'125',speciality:'Especialidad 2', date: new Date('June 25, 2020 13:30:00')},
    {name:'Pedro Luis', id:'126',speciality:'Especialidad 3', date: new Date('June 25, 2020 08:30:00')},
    {name:'Janito Alcachofa', id:'1308',speciality:'Especialidad 3', date: new Date('June 25, 2020 10:00:00')},
    {name:'Luisa Palma', id:'127',speciality:'Especialidad 3', date: new Date('June 25, 2020 15:00:00')},
    {name:'Deiby Cabrera', id:'1208',speciality:'Cardiologia', date: new Date('June 25, 2020 15:24:00')},
    {name:'Deiby Cabrera', id:'129',speciality:'Cardiologia', date: new Date('June 25, 2020 08:24:00')},
    {name:'Deiby Cabrera', id:'137',speciality:'Cardiologia', date: new Date('June 25, 2020 09:00:00')},
    {name:'Deiby Cabrera', id:'131',speciality:'Cardiologia', date: new Date('June 25, 2020 12:30:00')},
]