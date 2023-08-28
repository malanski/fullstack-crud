import * as yup from 'yup';

export function validationSchema(){
    const today = new Date();
    const minBirthDate = new Date();
        minBirthDate.setFullYear(minBirthDate.getFullYear() - 18); // Subtract 18 years from today's date


    // Form validation schema
    const schema = yup.object().shape({
        clientName: yup.string().min(2, "Client name should have 2 characters or more")
        .max(225, "Client name should be at maximum 225 characters long").required("Client name should be required")
        .matches(/\D/, "Client name cannot be composed only of numbers"),
        birthDate: yup.date().max(today, "Client birth date must be earlier than today")
        .min(minBirthDate, "Client must be at least 18 years old")
        .transform((value, originalValue) => {
            // Transform the birth date value to a Date object for comparison
            const [year, month, day] = originalValue.split('-');
            return new Date(year, month - 1, day);
        })
        .required("Client birth date should be required"),
    clientEmail: yup.string().email("Please inset a valid email!").required("Client email should be required!"),
    // Address Validation
    country: yup.string().required("Client Country should be required!")
        .matches(/\D/, "Client Country cannot be composed only of numbers"),
    zipCode: yup.number().required("Client Zip Code should be required!"),
    county: yup.string().required("Client county should be required!")
        .matches(/\D/, "Client County cannot be composed only of numbers"),
    city: yup.string().required("Client city name should be required!")
        .matches(/\D/, "Client City cannot be composed only of numbers"),
    streetAddress: yup.string().required("Client street address should be required!")
        .matches(/\D/, "Client Street address cannot be composed only of numbers"),
    addition: yup.string(),
    })
    validationSchema(schema)
} 

