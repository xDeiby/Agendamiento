import React from 'react';
import Grid from '@material-ui/core/Grid';

import Label from '../componentes/Label';

export default function Indentify(){

    return (
        <Grid container >
            <Grid item xs={6}>
                <Label 
                    placeholder={'Nombre del Paciente'}
                    defaultValue={'DEIBY NICOLAS CABRERA ESPARZA'}
                />
            </Grid>

            
            <Grid item xs={6}>
                <Label 
                    placeholder={'Rut'}
                    defaultValue={'19.330.008-1'}
                />
            </Grid>

        </Grid>

    )
}