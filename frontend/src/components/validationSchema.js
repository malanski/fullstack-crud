import * as yup from 'yup';

export function validationSchema(){
    const today = new Date();
    // Form validation schema
    const schema = yup.object().shape({
        patientName: yup.string().min(2, "Patient name should have 2 characters or more")
            .max(70, "Patient name should be at maximum 70 characters long").required("Patient name should be required"),
    
        // birthDate: yup.date().transform(parseDateString).max(today).required("Patient birth date should be required"),
        birthDate: yup.date().max(today).required("Patient birth date should be required"),
    
        patientEmail: yup.string().email("Patient email must be a valid email!").required("Patient email should be required!"),
    
        // Address Validation
        country: yup.string().required("Patient Country should be required!"),
        zipCode: yup.number().required("Patient Zip Code should be required!"),
        county: yup.string().required("Patient county should be required!"),
        city: yup.string().required("Patient city name should be required!"),
        streetAddress: yup.string().required("Patient street address should be required!"),
        addition: yup.string(),
    })
    validationSchema(schema)
} 

