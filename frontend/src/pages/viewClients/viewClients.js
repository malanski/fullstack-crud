import './viewClients.scss';
import { ClientApi } from '../../services/api';
import ClientCard from "../../components/ClientCard/ClientCard";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { useState, useEffect } from 'react';

export const ViewClients = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [dataApi, setDataApi] = useState([]);
        useEffect(() => {
            ClientApi.listClients()
              .then((response) => {
                // console.log(response)
                const data = response.data.clients;
                setDataApi(data);
                setIsLoading(false);

              })
              .catch(function (error) {
                console.log(error);
                setIsLoading(false);

              });
        }, []);

        if (isLoading) {
            return <p><b>Please Wait. Loading Clients...</b></p>;
        }

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