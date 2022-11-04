// Components
import { PatientRegister } from "../../components/PatientRegister/PatientRegister"

export const Register = (props) => {
    return (
        <div>
             <PatientRegister component={PatientRegister} exact />
        </div>
    )
}