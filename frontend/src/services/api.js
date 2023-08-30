import Axios from 'axios';

const axios = Axios.create({
    //  LOCAL URL DEVELOPMENT
    // baseURL: 'http://localhost:8000',
    
    //  Render backend cloud deploy
    // baseURL: 'https://bakcend-crud.onrender.com',
    
    baseURL: process.env.REACT_APP_API_URL,
    timeout: '8000ms',
});

export const ClientApi = {
    listClients: () => {
        return axios.get('/clients');
    },
    getClientById: (id) => {
        return axios.get(`/client/${id}`)
    },
    registerClient: (dataRegister) => {
        return axios.post('/client', dataRegister)
    },
    updateClient: (id, dataUpdate) => {
        return axios.patch(`/client/${id}`, dataUpdate)
    },
    deleteClient: (id) => {
        return axios.delete(`/client/${id}`)
    }
};