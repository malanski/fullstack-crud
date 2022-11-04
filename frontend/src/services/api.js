import Axios from 'axios';

const axios = Axios.create({
    //LOCAL URL DEVELOPMENT
    baseURL: 'http://localhost:8000'
    
    // Heroku Backend Deploy
    // baseURL: 'https://my-register-backend.herokuapp.com'
});

export const PatientApi = {
    listPatients: () => {
        return axios.get('/patients');
    },
    getPatientById: (id) => {
        return axios.get(`/patients/${id}`)
    },
    registerPatient: (dataRegister) => {
        return axios.post('/patients', dataRegister)
    },
    updatePatient: (id, dataUpdate) => {
        return axios.patch(`/patients/${id}`, dataUpdate)
    },
    deletePatient: (id) => {
        return axios.delete(`/patients/${id}`)
    }
};