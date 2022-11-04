import './viewPatients.scss';

// API
import { PatientApi } from '../../services/api';

// Components
import PatientCard from "../../components/PatientCard/PatientCard";

// Material UI
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

// React and Router-Dom
import { useState, useEffect } from 'react';

export const ViewPatients = () => {
    let [dataApi, setDataApi] = useState([]);

        useEffect(() => {
            PatientApi.listPatients()
              .then((response) => {
                // console.log(response)
                const data = response.data.patients;
                setDataApi(data);
              })
              .catch(function (error) {
                console.log(error);
              });
        }, []);

    return (
        <div className="patients-view">
            <h2>
                <FormatListNumberedIcon />&ensp;Patients list view&ensp;<FormatListNumberedIcon />
            </h2>

            <div className="patients-view-list">
                {dataApi.map((data, index) => <PatientCard dataApi={data} index={index} />)}
            </div>
        </div>
    );
}