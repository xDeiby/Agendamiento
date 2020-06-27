import React, { useState } from 'react';

import Steps from './Steps';
import Filters from '../views/Fiters';
import Scheduling from '../views/Scheduling';
import { LocalStorageObjects } from '../static_data/localstorage';
import Identify from '../views/Identify';


export default function FullWidthGrid() {
  const [activeStep, setActiveStep] = useState(1);
  const [hour, setHour] = useState(null);
  const [area, setArea] = useState(localStorage.getItem('area') ? LocalStorageObjects.getObject('area') : null);
  const [specialty, setSpecialty] = useState(localStorage.getItem('specialty') ? LocalStorageObjects.getObject('specialty') : null);


  
  switch (activeStep) {
        case 1:

            return <Steps children={<Identify/>} setActiveStep={setActiveStep}/>

        case 2:
            return (
              <Steps 
                children={
                  <Filters
                    changeArea={setArea}
                    selectedArea={area}
                    changeSpecialty={setSpecialty}
                    selectedSpecialty={specialty}
                  />
                }
                area={area}
                specialty={specialty}
                hour={hour}
                setActiveStep={setActiveStep}
              />
            );

        case 3:
            return (
              <Steps 
                children={
                  <Scheduling
                    changeHour={setHour}
                    selectedHour={hour}
                    selectedSpecialty={specialty.specialty}
                  />
                }
                area={area}
                specialty={specialty}
                hour={hour}                
                setActiveStep={setActiveStep}
              />
            );
        
        default:
            return <div>Su hora ha sido agendada</div>

  }


}