import './viewClients.scss';

// API
import { ClientApi } from '../../services/api';

// Components
import ClientCard from "../../components/ClientCard/ClientCard";

// Material UI
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

// React and Router-Dom
import { useState, useEffect } from 'react';

export const ViewClients = () => {
    let [dataApi, setDataApi] = useState([]);

        useEffect(() => {
            ClientApi.listClients()
              .then((response) => {
                // console.log(response)
                const data = response.data.clients;
                setDataApi(data);
              })
              .catch(function (error) {
                console.log(error);
              });
        }, []);

    return (
        <div className="clients-view">
            <h2>
                <FormatListNumberedIcon />&ensp;Clients list view&ensp;<FormatListNumberedIcon />
            </h2>

            <div className="clients-view-list">
                {dataApi.map((data) => <ClientCard key={data._id} dataApi={data} />)}

            </div>
        </div>
    );
}